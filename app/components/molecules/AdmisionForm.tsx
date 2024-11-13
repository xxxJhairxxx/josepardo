/** @format */
import { useForm } from "@/hooks/useForm";
import ReCAPTCHA, { ReCAPTCHA as ReCAPTCHAType } from 'react-google-recaptcha';
import { useGenerals } from '@/context/generals.context';
import { AdmisionFormp } from '@/interfaces/admision';
import React, { useRef, useState } from 'react';
import { Loader } from '../atoms/Loader';
import { EspecialidadesData } from '@/interfaces';
import Alert from '../atoms/Alert';

interface props {
	admisionForm: AdmisionFormp;
	especialidades: EspecialidadesData[];
	className?: string
}

const AdmisionForm = ({
	admisionForm: {
		nombre,
		apellido,
		carrera,
		celular,
		messages,
		email,
		titulo,
		subtitulo,
	},
	especialidades,
	className
}: props) => {
	const [ShowCaptchaError, setShowCaptchaError] = useState(false);
	const captchaRef = useRef<ReCAPTCHAType>(null);
	const captchaKey = process.env.NEXT_PUBLIC_RECAPTCHA as string;


	const [mensaje, setMensaje] = useState<string>('');


	const { general } = useGenerals();

	const {
		failure,
		sending,
		errors,
		formState,
		responseMessage,
		validateInput,
		validateSelect,
		handleSubmit,
		setFormState,
		phoneRef,
		phoneNumberFormatter,
	} = useForm(messages, "/ezforms/submit", captchaRef);

	const onChangeRecaptcha = () => {
		if (captchaRef.current?.getValue()) {
			setFormState({
				...formState,
				captcha: captchaRef.current?.getValue() as string,
			});
		}
	};

	const showAlert = (text: string) => {
		setMensaje(text);
		setShowCaptchaError(true);
		setTimeout(() => {
			setShowCaptchaError(false);
		}, 5000);
	};



	return (
		<div className={`AdmisionForm ${className}`}>
			<h2 className='AdmisionForm__text'>{titulo}</h2>
			<p className=''>{subtitulo}</p>
			<form className='AdmisionForm__form ' onSubmit={handleSubmit}>
				<div className='AdmisionForm__form-input'>
					<input
						type="text"
						onInput={validateInput}
						placeholder={nombre.label}
						id={nombre.name}
						name={nombre.name}
						value={formState.name}
					/>
				</div>
				<div className='AdmisionForm__form-input'>
					<input
						type="text"
						onInput={validateInput}
						placeholder={apellido.label}
						id={apellido.name}
						name={apellido.name}
						value={formState.last_name}
					/>
				</div>
				<div className='AdmisionForm__form-input'>
					<select
						id={carrera.name}
						title={carrera.name}
						name={carrera.name}
						onInput={validateSelect}
						value={formState.carrera}
					>
						<option value='' disabled>{carrera.label}</option>
						{especialidades.map(({ id, titulo }) => (
							<option key={id} value={titulo.replace(/\//g, "")}>
								{titulo.replace(/\//g, "")}
							</option>
						))}
					</select>
					{errors.carrera && (
						<span className="Form-error">{errors.carrera}</span>
					)}
				</div>
				<div className='AdmisionForm__form-input'>
					<input
						type="text"
						onInput={validateInput}
						placeholder={email.label}
						id={email.name}
						name={email.name}
						value={formState.email}
					/>
					{errors.email && <span className="Form-error">{errors.email}</span>}
				</div>
				<div className='AdmisionForm__form-input'>
					<input
						type="text"
						onInput={validateInput}
						placeholder={celular.label}
						id={celular.name}
						ref={phoneRef}
						onKeyDown={phoneNumberFormatter}
						name={celular.name}
						value={formState.phone}
					/>
				</div>

				<div className='AdmisionForm__form-recaptcha p-0 '>
					<ReCAPTCHA
						sitekey={captchaKey}
						onChange={onChangeRecaptcha}
						ref={captchaRef}
					/>
				</div>
				<div className='AdmisionForm__form-input'>
					<button type='submit'>
						{general.label_buttons.lbl_enviar}
					</button>
					{sending && <Loader />}
				</div>

				{responseMessage && (
					<div className='AdmisionForm__messages'>
						<span className='text-[#35B278] font-medium'>
							{messages.mail_sent_ok} ✔
						</span>
					</div>
				)}

				<Alert catchError={ShowCaptchaError} message={mensaje} />
			</form>
		</div>
	);
};

export default AdmisionForm;
