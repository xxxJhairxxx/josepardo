
import { Container } from '../globals';
import { Title } from '../atoms';
import bg from '@/public/images/bg-testimonios.jpg'
import Image from 'next/image';
import { Cardtestimonios } from '@/interfaces/admision';
import TestimonioCard from '../molecules/Admision/TestimonioCard';

interface props {
    titulo: string;
    subtitulo: string;
    testimonios: Cardtestimonios[]
}

const AdmisionTestimonios = ({ titulo, subtitulo, testimonios }: props) => {


    return (
        <section className='admisionTestimonios '>
            <Image className='admisionTestimonios__bg' src={bg} width={1000} height={1000} alt='fondo jose pardo casos de exito' />
            <Container className='admisionTestimonios__container'>

                <Title title={titulo} subtitle={subtitulo} className='admisionTestimonios__container__text' />

                <div className='admisionTestimonios__container__cards'>
                    {testimonios.slice(0,1).map(({ id, imagen, comentario, nombre, ocupacion }) =>
                        <TestimonioCard
                            key={id}
                            imagen={imagen}
                            comentario={comentario}
                            nombre={nombre}
                            ocupacion={ocupacion} />)}
                </div>
            </Container>
        </section>
    );
};

export default AdmisionTestimonios;

