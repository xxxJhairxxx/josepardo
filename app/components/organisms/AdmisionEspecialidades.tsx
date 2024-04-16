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
		<section className='admisionEspecialidades'>
			<Container>
				<div>
					<Title title={titulo} subtitle={subtitulo} />
					<p>{texto}</p>
				</div>
				<div>
					<EspecialidadCard title={especialidades[0].titulo} logo={especialidades[0].logo} text={especialidades[0].descripcion} >

					</EspecialidadCard>
				</div>
			</Container>
		</section>
	);
};

export default AdmisionEspecialidades;
