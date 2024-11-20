/** @format */

import AdmisionNavbar from '../ui/AdmisionNavbar';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { Container } from '@tsparticles/engine';
import { loadSlim } from '@tsparticles/slim';
import React, { useEffect, useMemo, useState } from 'react';
import { AdmisionFormp } from '@/interfaces/admision';
import AdmisionForm from '../molecules/AdmisionForm';
import { EspecialidadesData, Picture } from '@/interfaces';
import { Container as Containerp } from '../globals';
import { useGenerals } from '@/context/generals.context';
import Thumb from '../atoms/Thumb';
interface props {
	titulo: string;
	subtitulo: string;
	texto: string;
	image: Picture;
	admisionForm: AdmisionFormp;
	especialidades: EspecialidadesData[];
}

const AdmisionHeader = ({
	titulo,
	subtitulo,
	texto,
	image,
	admisionForm,
	especialidades,
}: props) => {
	const [init, setInit] = useState(false);

	const { general } = useGenerals();

	useEffect(() => {
		initParticlesEngine(async (engine) => {
			await loadSlim(engine);
		}).then(() => {
			setInit(true);
		});
	}, []);

	const particlesLoaded = (container?: Container) => {
		return new Promise<void>((resolve) => {
			resolve();
		});
	};

	const options: any = useMemo(
		() => ({
			background: {
				color: {
					value: '#060922',
				},
			},
			fpsLimit: 160,
			interactivity: {
				events: {
					onClick: {
						enable: false,
						mode: 'push',
					},
					onHover: {
						enable: false,
						mode: 'repulse',
					},
				},
				modes: {
					push: {
						quantity: 4,
					},
					repulse: {
						distance: 200,
						duration: 0.4,
					},
				},
			},
			particles: {
				color: {
					value: '#09aff4',
				},
				links: {
					color: '#ffffff',
					distance: 150,
					enable: false,
					opacity: 0.5,
					width: 1,
				},
				move: {
					direction: 'none',
					enable: true,
					outModes: {
						default: 'bounce',
					},
					random: false,
					speed: 2,
					straight: false,
				},
				number: {
					density: {
						enable: true,
					},
					value: 90,
				},
				opacity: {
					value: 0.5,
				},
				shape: {
					type: 'circle',
				},
				size: {
					value: { min: 1, max: 5 },
				},
			},
			detectRetina: true,
		}),
		[]
	);

	const textSplit = (text: string, Tag: keyof JSX.IntrinsicElements = 'h1') => {
		if (text.includes('/')) {
			return (
				<Tag>
					{text.split('/').map((splitext, index) => (
						<span key={index}>
							{splitext} <br />
						</span>
					))}
				</Tag>
			);
		}
		return <Tag>{text}</Tag>;
	};

	if (init) {
		return (
			<header className='AdmisionHeader relative'>
				<AdmisionNavbar />
				{/* <Particles
					id='tsparticles'
					particlesLoaded={particlesLoaded}
					options={options}
					className=' w-full h-[40rem] absolute top-0 left-0'
				/> */}

				<Containerp className='AdmisionHeader__container'>
					<section className='AdmisionHeader__container__text'>
						<div className='AdmisionHeader__container__text-socials'>
							{general.informacion.redes_sociales.map(({id,tipo,url}) => (
								<a key={id} href={url} title={!url ? "muy pronto": tipo} className={`icon-${tipo}`} />
							))}
						</div>
						<div className='AdmisionHeader__container__text-title'>
							<h2>{subtitulo}</h2>
							{textSplit(titulo, 'h1')}
							<p>{texto}</p>
						</div>
					</section>
					
					<section className='AdmisionHeader__container__formcontent '>
						<AdmisionForm
							admisionForm={admisionForm}
							especialidades={especialidades}
						/>
					</section>
				</Containerp>
				
				<Thumb image={image} full className='AdmisionHeader__image'/>
				
			</header>
		);
	}
	return <></>;
};

export default AdmisionHeader;
