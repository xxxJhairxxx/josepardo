/** @format */

import Image from 'next/image';
import AdmisionNavbar from '../ui/AdmisionNavbar';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { Container } from '@tsparticles/engine';
import { loadSlim } from '@tsparticles/slim';
import { useEffect, useMemo, useState } from 'react';
import { AdmisionFormp } from '@/interfaces/admision';
import AdmisionForm from '../molecules/AdmisionForm';
import { EspecialidadesData } from '@/interfaces';
interface props {
	titulo: string;
	subtitulo: string;
	texto: string;
	admisionForm: AdmisionFormp;
	especialidades: EspecialidadesData[];
}

const AdmisionHeader = ({
	titulo,
	subtitulo,
	texto,
	admisionForm,
	especialidades,
}: props) => {
	const [init, setInit] = useState(false);

	// this should be run only once per application lifetime
	useEffect(() => {
		initParticlesEngine(async (engine) => {
			await loadSlim(engine);
			//await loadBasic(engine);
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
					value: '#000',
				},
			},
			fpsLimit: 160,
			interactivity: {
				events: {
					onClick: {
						enable: true,
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
					value: '#ffffff',
				},
				links: {
					color: '#ffffff',
					distance: 150,
					enable: true,
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

	if (init) {
		return (
			<header className='AdmisionHeader'>
				<Particles
					id='tsparticles'
					particlesLoaded={particlesLoaded}
					options={options}
					className='!bg-transparent'
				/>
				<AdmisionNavbar />

				<div className='container-general AdmisionHeader__container'>
					<section className='AdmisionHeader__container__text'>
						<ul className='AdmisionHeader__container__text-socials'>
							<li className='icon-facebook'></li>
							<li className='icon-instagram'></li>
							<li className='icon-youtube'></li>
							<li className='icon-twitter'></li>
						</ul>
						<div className='AdmisionHeader__container__text-title'>
							<h2>{subtitulo}</h2>
							<h1>{titulo}</h1>
							<p>{texto}</p>
						</div>
					</section>
					<section className='AdmisionHeader__container__formcontent'>
						<AdmisionForm
							admisionForm={admisionForm}
							especialidades={especialidades}
						/>
					</section>
				</div>
			</header>
		);
	}
	return <></>;
};

export default AdmisionHeader;
