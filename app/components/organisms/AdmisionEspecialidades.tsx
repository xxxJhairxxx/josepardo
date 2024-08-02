/** @format */

import React from 'react';
import { Title } from '../atoms';
import { Container } from '../globals';
import EspecialidadCard from '../molecules/Admision/EspecialidadCard';
import { EspecialidadesData } from '@/interfaces';

interface props {
	titulo: string;
	subtitulo: string;
	texto: string;
	especialidades: EspecialidadesData[];
}

const AdmisionEspecialidades = ({ titulo, subtitulo, texto ,especialidades}: props) => {
	return (
		<section className='admisionEspecialidades '>
			<Container className='admisionEspecialidades__container'>
				<div className='admisionEspecialidades__container__text'>
					<Title title={titulo} subtitle={subtitulo} />
					<p>{texto}</p>
				</div>
				<div className='admisionEspecialidades__container__cards'>
					{especialidades.slice(0,3).map(({id,titulo,logo,descripcion})=>(
						<EspecialidadCard key={id} title={titulo} logo={logo} text={descripcion} />			
					))}
				</div>
			</Container>
		</section>
	);
};

export default AdmisionEspecialidades;
