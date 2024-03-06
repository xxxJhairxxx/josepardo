/** @format */

import React from 'react';
import { Container } from '../globals';
interface props {
	titulo: string;
	subtitulo: string;
	texto: string;
}

const AdmisionHeader = ({titulo,subtitulo,texto}:props) => {
	return (
		<header className='AdmisionHeader'>
			<Container className='AdmisionHeader__container'>
				<section className='AdmisionHeader__container__text'>
					<ul className='AdmisionHeader__container__text-socials'></ul>
					<div className='AdmisionHeader__container__text-title'>
						<h2>{subtitulo}</h2>
						<h1>{titulo}</h1>
						<p>{texto}</p>
					</div>
				</section>
			</Container>
		</header>
	);
};

export default AdmisionHeader;
