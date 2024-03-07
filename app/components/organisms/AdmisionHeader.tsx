/** @format */

import React from 'react';
import { Container } from '../globals';
import Image from 'next/image';
import AdmisionNavbar from '../ui/AdmisionNavbar';
interface props {
	titulo: string;
	subtitulo: string;
	texto: string;
}

const AdmisionHeader = ({ titulo, subtitulo, texto }: props) => {
	return (
		<header className='AdmisionHeader'>
			<AdmisionNavbar />
			<Container className='AdmisionHeader__container'>
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
				<section className='AdmisionHeader__container__form'>
					<Image
						src='/images/form.png'
						height='1000'
						width='1000'
						alt='sa'
					></Image>
				</section>
			</Container>
		</header>
	);
};

export default AdmisionHeader;
