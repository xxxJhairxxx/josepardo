
import { Picture } from '@/interfaces';
import { Container } from '../globals';
import Thumb from '../atoms/Thumb';
interface props {
    titulo: string;
    logo: Picture[];
}

const AdmisionConvenios = ({ titulo, logo }: props) => {



    return (
        <section className='admisionConvenios'>
            <Container className='admisionConvenios__container '>

                <h2 className='admisionConvenios__container__title'>{titulo}</h2>
                <div className='admisionConvenios__container__logoCards'>

                    {logo.map((item) => (

                        <Thumb className='admisionConvenios__container__logoCards__thumb' key={item.id} image={item} />
                    ))}
                </div>

            </Container>
        </section>
    );
};

export default AdmisionConvenios;

