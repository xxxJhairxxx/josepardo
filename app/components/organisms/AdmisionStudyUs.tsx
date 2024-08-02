/** @format */

import { Picture } from '@/interfaces';
import React from 'react';
import { Title } from '../atoms';
import { Container } from '../globals';
import { Razones } from '@/interfaces/admision';
import Thumb from '../atoms/Thumb';
import ReasonsCard from '../molecules/Admision/ReasonsCard';

interface props {
	titulo: string;
	subtitulo: string;
	texto: string;
	imagen: Picture;
	razones: Razones[];
}

const AdmisionStudyUs = ({ titulo, subtitulo, texto, imagen, razones }: props) => {
	return (
		<section className='admisionStudyUs'>
			<Container>
                <Thumb image={imagen} ></Thumb>
				<div className='admisionStudyUs__text'>
					<Title title={titulo} subtitle={subtitulo} />
					<p>{texto}</p>
				</div>

				<div className='admisionStudyUs__cards'>
                    {razones.map(({id,titulo,descripcion,logo}) => (
                        <ReasonsCard key={id} title={titulo} text={descripcion} logo={logo} />
                    ))}
                </div>
			</Container>
		</section>
	);
};

export default AdmisionStudyUs;
