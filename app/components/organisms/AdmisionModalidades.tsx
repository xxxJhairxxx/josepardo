/** @format */

import { Picture } from '@/interfaces';
import React from 'react';
import { Title } from '../atoms';
import { Container } from '../globals';
import { Modalidades } from '@/interfaces/admision';
import ModalidadCard from '@/components/molecules/Admision/ModalidadCard'
import Thumb from '../atoms/Thumb';
import ReactMarkdown from 'react-markdown';

interface props {
	titulo: string;
	subtitulo: string;
	texto: string;
	imagen: Picture;
	modalidades: Modalidades[];
}

const admisionModalidades = ({ titulo, subtitulo, texto, imagen, modalidades }: props) => {
	return (
		<section className='admisionModalities'>
			<Container className='admisionModalities__container'>

				<div className='admisionModalities__container__text'>
					<Title title={titulo} subtitle={subtitulo} />
					<ReactMarkdown>{texto}</ReactMarkdown>

					<div className='admisionModalities__container__text__cards'>
                    {modalidades.map(({id,titulo,descripcion,logo}) => (
                        <ModalidadCard key={id} title={titulo} text={descripcion} logo={logo} />
                    ))}  
                </div> 
				</div>
				<Thumb image={imagen} className='admisionModalities__container__img' />

				<div className='admisionModalities__container__cards'>
                    {modalidades.map(({id,titulo,descripcion,logo}) => (
                        <ModalidadCard key={id} title={titulo} text={descripcion} logo={logo} />
                    ))}  
                </div> 

			</Container>
			
		</section>
	);
};

export default admisionModalidades;
