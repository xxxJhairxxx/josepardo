/** @format */

import Thumb from '@/components/atoms/Thumb';
import { Picture } from '@/interfaces';
import React from 'react';

interface Props {
	logo: Picture;
	title: string;
	text: string;
}

const EspecialidadCard = ({ logo, title, text }: Props) => {
	return (
		<article className='especialidadCard'>
			<Thumb image={logo} className='especialidadCard__logo' />
			<section className='especialidadCard__title'>
				<h1 >{title}</h1>
				<p>{text}</p>
			</section>

        <button className='especialidadCard__button'>
            Leer mas
        </button>
		</article>
	);
};

export default EspecialidadCard;
