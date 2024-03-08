/** @format */

import React, { useEffect, useState } from 'react';
import { Logo } from '../atoms/Logo';
import { Container } from '../globals';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useGenerals } from '@/context/generals.context';

const AdmisionNavbar = () => {
	const {
		general: { informacion },
	} = useGenerals();
	

	return (
		<nav className='AdminNavbar'>
			
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
