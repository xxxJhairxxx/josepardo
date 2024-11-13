import Thumb from '@/components/atoms/Thumb';
import { Picture } from '@/interfaces';
import React from 'react';

interface Props {
	logo: Picture;
	title: string;
	text: string;
}

const ModalidadCards = ({ logo, title, text }: Props) => {
	return (
		<article className='modalidadCards'>
			<Thumb image={logo} full className='modalidadCards__thumb' />
			<section className='modalidadCards__description'>
				<h1>{title}</h1>
				<p>{text}</p>
			</section>
		</article>
	);
};
export default ModalidadCards;
