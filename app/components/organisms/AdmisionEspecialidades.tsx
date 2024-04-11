/** @format */

import React from 'react';
import { Title } from '../atoms';
import { Container } from '../globals';

interface props {
	titulo: string;
	subtitulo: string;
	texto: string;
}

const AdmisionEspecialidades = ({ titulo, subtitulo, texto }: props) => {
	return (
		<section className='admisionEspecialidades'>
			<Container>
				<Title title={titulo} subtitle={subtitulo} />
				<p >{texto}</p>
			</Container>
		</section>
	);
};

export default AdmisionEspecialidades;
