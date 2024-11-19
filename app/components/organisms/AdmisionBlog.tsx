import React, { useState } from 'react'
import { Container } from '../globals';
import { Title } from '../atoms';
import { BlogData } from '@/interfaces';
import BlogCard from '../molecules/Admision/BlogCard';
interface props {
    titulo: string;
    subtitulo: string;
    blogpost: BlogData[];
}

const AdmisionBlog = ({ titulo, subtitulo, blogpost }: props) => {


    const BlogDestacados = blogpost.filter(item => item.destacado)

    return (
        <section className='admisionBlog '>
            <Container className='admisionBlog__container'>
                <div className='admisionBlog__container__text'>
                    <Title title={titulo} subtitle={subtitulo} />

                    <div className='admisionBlog__container__cards'>
                        {BlogDestacados.slice(0,3).map(({ titulo, slug, publishedAt, text, id, image }) => (
                            <BlogCard key={id} titulo={titulo} slug={slug} publishedAt={publishedAt} image={image} text={text} />
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default AdmisionBlog;

