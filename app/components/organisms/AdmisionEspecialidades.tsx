/** @format */

import React, { useEffect, useState } from 'react';
import { Title } from '../atoms';
import { Container } from '../globals';
import EspecialidadCard from '../molecules/Admision/EspecialidadCard';
import { EspecialidadesData } from '@/interfaces';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { SwiperOptions } from 'swiper/types';
import { Navigation, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

interface props {
	titulo: string;
	subtitulo: string;
	texto: string;
	especialidades: EspecialidadesData[];
}

const swiperOptions: SwiperOptions = {
	navigation: {
		prevEl: ".admisionEspecialidades__navigation-prev",
		nextEl: ".admisionEspecialidades__navigation-next",
	},
	slidesPerView: "auto",
	autoplay: {
		delay: 10000,
		disableOnInteraction: false,
	},
	breakpoints: {
		300: {
			slidesPerView: 1,
			spaceBetween: 10,
		},
		750:{
			slidesPerView: 2,
			spaceBetween: 10,
		},
		960: {
			slidesPerView: 3,
			spaceBetween: 15,
		},
		1200: {
			slidesPerView: 3,
			spaceBetween: 30,
		},
	},
	modules: [Navigation, Autoplay],
};

const AdmisionEspecialidades = ({ titulo, subtitulo, texto, especialidades }: props) => {

	const [itemsLoop, setItemsLoop] = useState<boolean>(false);
	useEffect(() => {
		setItemsLoop(true);
	}, []);
	return (
		<section className='admisionEspecialidades '>
			<Container className='admisionEspecialidades__container'>
				<div className='admisionEspecialidades__container__text'>
					<Title title={titulo} subtitle={subtitulo}  />
					<p>{texto}</p>
				</div>
				<div className='admisionEspecialidades__container__cards'>
					{/* {especialidades.slice(0,3).map(({id,titulo,logo,descripcion})=>(
						<EspecialidadCard key={id} title={titulo} logo={logo} text={descripcion} />			
					))} */}

				</div>
				<div className="admisionEspecialidades-slider">
					<Swiper {...swiperOptions} loop={itemsLoop}>
						{especialidades.map(({ id, titulo, logo, descripcion }) => (
							<SwiperSlide
								className="admisionEspecialidades-slider_item "
								key={id}
							>

								<EspecialidadCard key={id} title={titulo} logo={logo} text={descripcion} />
							</SwiperSlide>
						))}
					</Swiper>
				</div>

				<div className="admisionEspecialidades__navigation">
					<div className="admisionEspecialidades__navigation-prev ">
						<svg className='rotate-180' width="13" height="23" viewBox="0 0 13 23" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M1.92932 20.7251L11.1025 11.5166L1.92932 2.30813" stroke="white" strokeWidth="3.06949" strokeLinecap="round" strokeLinejoin="round" />
						</svg>
						
					</div>
					<div className="admisionEspecialidades__navigation-next">
						<svg width="13" height="23" viewBox="0 0 13 23" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M1.92932 20.7251L11.1025 11.5166L1.92932 2.30813" stroke="white" strokeWidth="3.06949" strokeLinecap="round" strokeLinejoin="round" />
						</svg>
						
					</div>
				</div>
			</Container>
		</section>
	);
};

export default AdmisionEspecialidades;
