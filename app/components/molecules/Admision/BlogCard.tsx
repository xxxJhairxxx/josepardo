import Thumb from '@/components/atoms/Thumb';
import { Picture } from '@/interfaces';
import Link from 'next/link';
import React from 'react'

interface props {
  titulo: string;
  text: string;
  publishedAt: string;
  slug: string;
  image: Picture;
}

const BlogCard = ({ titulo, text, publishedAt, slug, image }: props) => {

  const fechaPublicacion = new Date(publishedAt).toLocaleDateString('es-ES', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });

  const dateTime = new Date(publishedAt).toISOString().split('T')[0];

  return (
    <article className='BlogCard'>
      <Thumb className='BlogCard__thumb' image={image} full />
      <section className='BlogCard__content'>
        <div className='BlogCard__content__date'><i className='icon-schedule' /><time className='uppercase' dateTime={dateTime}>{fechaPublicacion}</time></div>
        {titulo.includes('/') ? (
					<h3 className='BlogCard__content__title'>
						{titulo.split('/').map((splitext, index) => (
							<span key={index}>
								{splitext} <br />
							</span>
						))}
					</h3>
				) : <h3 className='BlogCard__content__title oneline'>{titulo}</h3>
				}
        <p className='BlogCard__content__text'>{text}</p>
        <hr className='border-[#8682C7]/35'/>
        <Link className='BlogCard__content__link' href='#'>MAS INFORMACION</Link>
      </section>

    </article>
  )
}

export default BlogCard
