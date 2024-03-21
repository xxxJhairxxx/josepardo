/** @format */

import ReCAPTCHA, { ReCAPTCHA as ReCAPTCHAType } from 'react-google-recaptcha';
import { useGenerals } from '@/context/generals.context';
import { AdmisionFormp } from '@/interfaces/admision';
import axios from 'axios';
import React, { useRef, useState } from 'react';
import { Loader } from '../atoms/Loader';
import { EspecialidadesData } from '@/interfaces';
import Alert from '../atoms/Alert';

interface props {
	admisionForm: AdmisionFormp;
	especialidades: EspecialidadesData[];
}

const AdmisionForm = ({
	admisionForm: {
		nombre,
		apellido,
		carrera,
		celular,
		messages,
		titulo,
		subtitulo,
	},
	especialidades,
}: props) => {
	const [loading, setLoading] = useState(false);
	const [successForm, setSuccessForm] = useState<boolean>(false);
	const [captchaResponse, setCaptchaResponse] = useState('');
	const [ShowCaptchaError, setShowCaptchaError] = useState(false);
	const captchaRef = useRef<ReCAPTCHAType>(null);
	const captchaKey = process.env.NEXT_PUBLIC_RECAPTCHA as string;

	const [nombreValue, setNombreValue] = useState<string>('');
	const [apellidoValue, setApellidoValue] = useState<string>('');
	const [celularValue, setCelularValue] = useState<string>('');
	const [carreraValue, setCarreraValue] = useState<string>('');
	const [mensaje, setMensaje] = useState<string>('');

	const { general } = useGenerals();

	const onChangeRecaptcha = (response: any) => {

		setCaptchaResponse(response);
	};

	const showAlert = (text: string) => {
		setMensaje(text);
		setShowCaptchaError(true);
		setTimeout(() => {
			setShowCaptchaError(false);
		}, 5000);
	};

	
	const onSubmit = async (data: any) => {
		try {
			if (!captchaResponse) {
				console.log('Por favor, completa el reCAPTCHA.');
				showAlert(messages.invalid_recaptcha);
				return;
			}
			if (carreraValue === '') {
				showAlert(messages.invalid_required);
				return;
			}
			if (celularValue.length < 9 || !/^[0-9]*$/.test(celularValue)) {
				showAlert(messages.invalid_number);
				return;
			}
			if (celularValue.trim() === '') {
				showAlert(messages.invalid_tel);
				return;
			}



			axios
				.post(
					`${process.env.NEXT_PUBLIC_STRAPI_URL}/users-register?populate=deep`,
					{
						data: {
							nombres: nombreValue,
							apellidos: apellidoValue,
							carrera_interes: carreraValue,
							celular: celularValue,
						},
					}
				)
				.then((response) => {
					console.log(response);
					if (response.status === 200) {
						setSuccessForm(true);
						if (captchaRef.current) {
							captchaRef.current.reset();
						}
						setCarreraValue('');
						setCelularValue('');
						setApellidoValue('');
						setNombreValue('');
						setTimeout(() => setSuccessForm(false), 5000);
					}
				});
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className='AdmisionForm'>
			<h2 className='AdmisionForm__text'>{titulo}</h2>
			<p className=''>{subtitulo}</p>
			<form className='AdmisionForm__form '>
				<div className='AdmisionForm__form-input'>
					<input
						className={`contactForm-form-input-input}`}
						placeholder={nombre.label}
						value={nombreValue}
						name='name'
						onChange={(e: any) => setNombreValue(e.target.value)}
					/>
				</div>
				<div className='AdmisionForm__form-input'>
					<input
						className={`contactForm-form-input-input text-black `}
						placeholder={apellido.label}
						name='lastname'
						value={apellidoValue}
						onChange={(e: any) => setApellidoValue(e.target.value)}
					/>
				</div>
				<div className='AdmisionForm__form-input'>
					<select
						name='carrera'
						value={carreraValue}
						onChange={(e: any) => setCarreraValue(e.target.value)}
					>
						<option value=''>{carrera.label}</option>
						{especialidades.map(({ id, titulo }) => (
							<option key={id} value={titulo}>
								{titulo}
							</option>
						))}
					</select>
				</div>
				<div className='AdmisionForm__form-input'>
					<input
						value={celularValue}
						name='phone'
						onChange={(e: any) => {
							if (e.target.value.length <= 9 && /^[0-9]*$/.test(e.target.value))
								setCelularValue(e.target.value);
						}}
						placeholder={celular.label}
						required
						maxLength={9}
					/>
				</div>

				<div className='AdmisionForm__form-recaptcha p-0 '>
					<ReCAPTCHA
						sitekey={captchaKey}
						onChange={onChangeRecaptcha}
						ref={captchaRef}
						className='  mx-0  ml-[-2rem] scale-[.85] '
					/>
				</div>
				<div className='AdmisionForm__form-input'>
					<button onClick={onSubmit} type='button'>
						{general.label_buttons.lbl_enviar}
					</button>
					{loading && <Loader />}
				</div>

				{successForm && (
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
