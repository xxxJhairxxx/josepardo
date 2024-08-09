/** @format */

import { Picture } from '@/interfaces';
import React from 'react';
import { Title } from '../atoms';
import { Container } from '../globals';
import { Razones } from '@/interfaces/admision';
import Thumb from '../atoms/Thumb';
import ReasonsCard from '../molecules/Admision/ReasonsCard';
import ReactMarkdown from 'react-markdown';

interface props {
	titulo: string;
	subtitulo: string;
	texto: string;
	imagen: Picture;
	razones: Razones[];
}

const admisionStudyUsCtn = ({ titulo, subtitulo, texto, imagen, razones }: props) => {
	return (
		<section className='admisionStudyUs '>
			<Container className='admisionStudyUs__container'>

				<div className='admisionStudyUs__container__text'>
					<Title title={titulo} subtitle={subtitulo} />
					<ReactMarkdown>{texto}</ReactMarkdown>
				</div>
				<Thumb image={imagen} className='admisionStudyUs__container__img' />

				{/* <div className='admisionStudyUsCtn__cards'>
                    {razones.map(({id,titulo,descripcion,logo}) => (
                        <ReasonsCard key={id} title={titulo} text={descripcion} logo={logo} />
                    ))}  
                </div> */}

			</Container>
			<div className='admisionStudyUsCtn' data-section="/middle">
					<div className="admisionStudyUsCtn__containerTitle">
						<Title
							className="admisionStudyUsCtn__containerTitle-title"
							title={"Beneficios Academicos"}
							subtitle='CONOCE SOBRE NUESTROS'
						/>
					</div>

					<div className="admisionStudyUsCtn__containerThumb">
						{razones.map(({ id, titulo, descripcion, logo }) => (
							<ReasonsCard key={id} title={titulo} logo={logo} text={descripcion} />
						))}
					</div>
			</div>
		</section>
	);
};

export default admisionStudyUsCtn;
