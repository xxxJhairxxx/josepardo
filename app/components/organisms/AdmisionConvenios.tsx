
import { Picture } from '@/interfaces';
import { Container } from '../globals';
import Thumb from '../atoms/Thumb';
import { Autoplay, Pagination, SwiperOptions } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
interface props {
    titulo: string;
    logo: Picture[];
}

const AdmisionConvenios = ({ titulo, logo }: props) => {

    const swiperOptions: SwiperOptions = {
        speed: 700,
        slidesPerView: "auto",
        breakpoints: {
            300: {
                slidesPerView: 2,
                spaceBetween: 10,
                slidesPerGroup: 1,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 60,
                slidesPerGroup: 1,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 60,
                slidesPerGroup: 1,
            },
            1200: {
                slidesPerView: 3,
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
        <section className='admisionConvenios'>
            <Container className='admisionConvenios__container '>

                <h2 className='admisionConvenios__container__title'>{titulo}</h2>
                <div className='admisionConvenios__container__logoCards'>
                    <Swiper {...swiperOptions} className="mySwiper">
                        {logo.map((item) => (
                            <SwiperSlide key={item.id} className="SwiperSlide bg-red-500">
                                <Thumb className='admisionConvenios__container__logoCards__thumb' key={item.id} image={item} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

            </Container>
        </section>
    );
};

export default AdmisionConvenios;

