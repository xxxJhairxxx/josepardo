
import { Container } from '../globals';
import { Title } from '../atoms';
import bg from '@/public/images/bg-testimonios.jpg'
import Image from 'next/image';
import { Cardtestimonios } from '@/interfaces/admision';
import TestimonioCard from '../molecules/Admision/TestimonioCard';
import { Autoplay, Pagination, SwiperOptions } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

interface props {
    titulo: string;
    subtitulo: string;
    testimonios: Cardtestimonios[]
}

const AdmisionTestimonios = ({ titulo, subtitulo, testimonios }: props) => {

    const SwiperOptions: SwiperOptions = {
        speed: 700,
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
        modules: [Autoplay, Pagination],
    };


    return (
        <section className='admisionTestimonios '>
            <Image className='admisionTestimonios__bg' src={bg} width={1000} height={1000} alt='fondo jose pardo casos de exito' />
            <Container className='admisionTestimonios__container'>

                <Title title={titulo} subtitle={subtitulo} className='admisionTestimonios__container__text' />

                <div className='admisionTestimonios__container__cards'>

                    <Swiper {...SwiperOptions} className="mySwiper">
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
                </div>
            </Container>
        </section>
    );
};

export default AdmisionTestimonios;

