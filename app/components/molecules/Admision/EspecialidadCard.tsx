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
			<div className='relative '>
				<Thumb image={logo} full className='especialidadCard__logo' />
				<svg xmlns="http://www.w3.org/2000/svg" className='mx-auto !w-[85%] left-0 right-0 bottom-[-1rem] absolute z-[100]' width="250" height="55" viewBox="0 0 227 55" fill="none">
					<g filter="url(#filter0_f_211_48)">
						<ellipse cx="113.455" cy="27.5853" rx="101.915" ry="15.805" fill="#1E40AF" fill-opacity="0.77" />
					</g>
					<defs>
						<filter id="filter0_f_211_48" x="0.240039" y="0.480273" width="226.43" height="54.2099" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
							<feFlood flood-opacity="0" result="BackgroundImageFix" />
							<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
							<feGaussianBlur stdDeviation="5.65" result="effect1_foregroundBlur_211_48" />
						</filter>
					</defs>
				</svg>
				<svg xmlns="http://www.w3.org/2000/svg" width="215" height="190" fill="none" viewBox="0 0 420 372" className="especialidadCard__logo-arosvg">
					<g filter="url(#school-banner-blue-c)" opacity="0.7" style={{ mixBlendMode: 'plus-lighter' }}><path fill="#0E8FF5" fill-rule="evenodd" d="M210.351 343.162c78.098 0 141.408-7.935 141.408-17.723 0-9.789-63.31-17.724-141.408-17.724-78.097 0-141.407 7.935-141.407 17.724 0 9.788 63.31 17.723 141.407 17.723Zm0-7.456c71.263 0 129.033-5.923 129.033-13.229 0-7.307-57.77-13.23-129.033-13.23-71.262 0-129.032 5.923-129.032 13.23 0 7.306 57.77 13.229 129.032 13.229Z" clip-rule="evenodd"></path></g></svg>
			</div>


			<span className='especialidadCard__subtitle'>Especialidad</span>
			<section className='especialidadCard__title'>
				{title.includes('/') ? (
					<h1>
						{title.split('/').map((splitext, index) => (
							<span key={index}>
								{splitext} <br />
							</span>
						))}
					</h1>
				) : <h1 className='oneline'>{title}</h1>
				}
				<p>{text}</p>
			</section>
		</article>
	);
};

export default EspecialidadCard;
