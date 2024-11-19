import React from 'react'
import { Logo } from '../atoms/Logo'
import { Container } from '../globals'
import { useGenerals } from '@/context/generals.context'

const Footer = () => {

	const { general: { informacion: { redes_sociales }, Footer: { text, copyright } } } = useGenerals()

	return (
		<footer className='Footer'>
			<Container className='Footer__content'>
				<div className='Footer__content__description'>
					<Logo type={1} className="Footer__content__description__logo" />
					<p className='Footer__content__description__text'>{text}</p>
				</div>

				<div className='Footer__content__info'>
					<section className='Footer__content__info__socials'>
						{redes_sociales.map(({ id, tipo, url }) => (
							<a key={id} href={url} title={!url ? "muy pronto" : tipo} className={`icon-${tipo}`} />
						))}
					</section>

					<p className='Footer__content__info__copyright'>{copyright}</p>
				</div>


			</Container>

		</footer>
	)
}

export default Footer
