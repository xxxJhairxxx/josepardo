import Thumb from '@/components/atoms/Thumb';
import { Picture } from '@/interfaces';
import React from 'react';

interface Props {
	image: Picture;
	titulo: string;
}

const BenefitsCard = ({  titulo, image }: Props) => {
	return (
		<article className='BenefitCards'>
			<Thumb image={image} full className='BenefitCards__thumb' />
			<section className='BenefitCards__title'>
				<h1>{titulo}</h1>
			</section>
		</article>
	);
};
export default BenefitsCard;
