import Thumb from '@/components/atoms/Thumb';
import { Picture } from '@/interfaces';
import React from 'react';

interface Props {
	logo: Picture;
	title: string;
	text: string;
}

const ReasonsCard = ({ logo, title, text }: Props) => {
	return (
		<article className='reasonsCards'>
			<Thumb image={logo} full className='reasonsCards__thumb' />
			<section className='reasonsCards__title'>
				<h1>{title}</h1>
			</section>
		</article>
	);
};
export default ReasonsCard;
