/** @format */

import { Message } from 'react-hook-form';
import { InputForm, MetaSEO, Picture } from '.';

export interface Admision {
	data: AdmisionData;
}

export interface AdmisionData {
	id: number;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
	AdmisionBanner: AdmisionBanner;
	AdmisionForm: AdmisionForm;
	AdmisionEspecialidades: AdmisionEspecialidades;
	AdmisionEstudiaconnostros: AdmisionEstudiaconnostros;
	AdmimisionDestacados: AdmimisionDestacados;
	AdmisionGaleria: AdmisionGaleria;
	AdmisionConvenios: AdmisionConvenios;
	AdmisionTestimonios: AdmisioTestimonios;
	AdmisionBlog: AdmisionBlog;
}

interface AdmisionBanner {
	id: number;
	titulo: string;
	subtitulo: string;
	texto: string;
}
export interface AdmisionForm {
	id: number;
	nombre: InputForm;
	apellido: InputForm;
	carrera: InputForm;
	celular: InputForm;
	messages:Message;
}

interface AdmisionEspecialidades {
	id: number;
	titulo: string;
	subtitulo: string;
	texto: string;
}
interface AdmisionEstudiaconnostros {
	id: number;
	titulo: string;
	subtitulo: string;
	texto: string;
	image: Picture | null;
	Razones: Razones[];
}

interface Razones {
	titulo: string;
	descripcion: string;
	logo: Picture | null;
}
interface AdmimisionDestacados {
	CardDestacado: CardDestacado[];
}

interface CardDestacado {
	id: number;
	numero: string;
	titulo: string;
	logo: Picture | null;
}

interface AdmisionGaleria {
	id: number;
	titulo: string;
	subtitulo: string;
}
interface AdmisionConvenios {
	id: number;
	titulo: string;
}
interface AdmisioTestimonios {
	id: number;
	titulo: string;
	subtitulo: string;
	Cardtestimonios: Cardtestimonios[];
}

interface Cardtestimonios {
	id: 1;
	comentario: string;
	nombre: string;
	ocupacion: string;
	imagen: Picture | null;
}

interface AdmisionBlog {
	id: number;
	titulo: string;
	subtitulo: string;
}
