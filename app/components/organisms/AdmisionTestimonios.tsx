
import { Container } from '../globals';
import { Title } from '../atoms';
import bg from '@/public/images/bg-testimonios.jpg'
import Image from 'next/image';
import { Cardtestimonios } from '@/interfaces/admision';
import TestimonioCard from '../molecules/Admision/TestimonioCard';
import { Autoplay, Navigation, SwiperOptions } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect, useState } from 'react';

interface props {
    titulo: string;
    subtitulo: string;
    testimonios: Cardtestimonios[]
}

const swiperOptions: SwiperOptions = {
    navigation: {
        prevEl: ".admisionTestimonios__container__cards-prev",
        nextEl: ".admisionTestimonios__container__cards-next",
    },
    speed: 900,
    slidesPerView: "auto",
    breakpoints: {
        300: {
            slidesPerView: 1,
            spaceBetween: 10,
            slidesPerGroup: 1,
        },
        768: {
            slidesPerView: 1,
            spaceBetween: 60,
            slidesPerGroup: 1,
        },
        1024: {
            slidesPerView: 1,
            spaceBetween: 60,
            slidesPerGroup: 1,
        },
        1200: {
            slidesPerView: 1,
            spaceBetween: 60,
            slidesPerGroup: 1,
        },
    },
    pagination: {
        // el: ".homeBanner-pagination",
        clickable: true,
        type: "bullets",
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    modules: [Autoplay, Navigation],
};

const AdmisionTestimonios = ({ titulo, subtitulo, testimonios }: props) => {


    const [itemsLoop, setItemsLoop] = useState<boolean>(false);
    useEffect(() => {
        setItemsLoop(true);
    }, []);


    return (
        <section className='admisionTestimonios '>
            <Image className='admisionTestimonios__bg' src={bg} width={1000} height={1000} alt='fondo jose pardo casos de exito' />
            <Container className='admisionTestimonios__container'>

                <Title title={titulo} subtitle={subtitulo} className='admisionTestimonios__container__text' />

                <div className='admisionTestimonios__container__cards'>
                    <div className="admisionTestimonios__container__cards-prev ">
                        <svg className='rotate-180' width="13" height="23" viewBox="0 0 13 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.92932 20.7251L11.1025 11.5166L1.92932 2.30813" stroke="white" strokeWidth="3.06949" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>

                    </div>

                    <Swiper {...swiperOptions} loop={itemsLoop} className="mySwiper">
                        {testimonios.map(({ id, imagen, comentario, nombre, ocupacion }) =>
                            <SwiperSlide key={id} className="SwiperSlide">
                                <TestimonioCard
                                    key={id}
                                    imagen={imagen}
                                    comentario={comentario}
                                    nombre={nombre}
                                    ocupacion={ocupacion} />
                            </SwiperSlide>)
                        }
                    </Swiper>

                    <div className="admisionTestimonios__container__cards-next">
                        <svg width="13" height="23" viewBox="0 0 13 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.92932 20.7251L11.1025 11.5166L1.92932 2.30813" stroke="white" strokeWidth="3.06949" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>

                    </div>
                </div>

            </Container>
        </section>
    );
};

export default AdmisionTestimonios;

