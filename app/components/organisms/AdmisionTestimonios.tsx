
import { Container } from '../globals';
import { Title } from '../atoms';
import bg from '@/public/images/bg-testimonios.jpg'
import Image from 'next/image';

interface props {
    titulo: string;
    subtitulo: string;
}

const AdmisionTestimonios = ({ titulo, subtitulo }: props) => {


    return (
        <section className='admisionTestimonios '>
                        <Image className='admisionTestimonios__bg' src={bg} width={1000} height={1000} alt='fondo jose pardo casos de exito' />
            <Container className='admisionTestimonios__container'>
                <div className='admisionTestimonios__container__text'>
                    <Title title={titulo} subtitle={subtitulo} />
                    
                </div>
            </Container>
        </section>
    );
};

export default AdmisionTestimonios;

