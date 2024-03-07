/** @format */

import React, { useEffect, useState } from 'react';
import { Logo } from '../atoms/Logo';
import { Container } from '../globals';
import { useGenerals } from '@/context/generals.context';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from "@tsparticles/slim";

const AdmisionNavbar = () => {
	const {
		general: { informacion },
	} = useGenerals();
	const [init, setInit] = useState<boolean>(false);

	useEffect(() => {
		initParticlesEngine(async (engine) => {
			// you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
			// this loads the tsparticles package bundle, it's the easiest method for getting everything ready
			// starting from v2 you can add only the features you need reducing the bundle size
			//await loadAll(engine);
			//await loadFull(engine);
			await loadSlim(engine);
			//await loadBasic(engine);
		}).then(() => {
			setInit(true);
		});
	}, []);

	const particlesLoaded = (container : Promise<void>) => {
		
	};

	return (
		<nav className='AdminNavbar'>
			 { init && <Particles id="tsparticles" url="http://foo.bar/particles.json" particlesLoaded={particlesLoaded}/>
}
			<Container className='AdminNavbar__container'>
				<Logo />

				<ul className='AdminNavbar__container__info'>
					<li>
						<i className='icon-location' />
						{informacion.direccion}
					</li>
					<li>
						<i className='icon-email' />
						{informacion.correo}
					</li>
					<li>
						<i className='icon-phone' />
						{informacion.telefono}
					</li>
					<li>
						<i className='icon-schedule' />
						{informacion.horario}
					</li>
				</ul>
			</Container>
		</nav>
	);
};

export default AdmisionNavbar;
