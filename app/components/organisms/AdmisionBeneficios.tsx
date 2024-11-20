import React from 'react'
import { Title } from '../atoms'
import { CardBenefits } from '@/interfaces/admision'
import BenefitsCard from '../molecules/Admision/BenefitsCard';


interface props {
    titulo: string,
    subtitulo: string;
    CardBenefits: CardBenefits[];
}

const AdmisionBeneficios = ({ CardBenefits, titulo, subtitulo }: props) => {
    return (
        <section className='admisionBeneficios' data-section="/middle">

            <div className="admisionBeneficios__containerTitle">
                <Title
                    className="admisionBeneficios__containerTitle-title"
                    title={titulo}
                    subtitle={subtitulo}
                />
            </div>

            <div className="admisionBeneficios__containerThumb">
                {CardBenefits.map(({ id, titulo, image }) => (
                    <BenefitsCard key={id} titulo={titulo} image={image} />
                ))}
            </div>
        </section>
    )
}

export default AdmisionBeneficios
