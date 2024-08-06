/** @format */

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
	AdmisionForm: AdmisionFormp;
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
export interface AdmisionFormp {
	id: number;
	nombre: InputForm;
	apellido: InputForm;
	carrera: InputForm;
	celular: InputForm;
	messages: Messages;
	titulo:string;
	subtitulo:string;
}

export interface Messages {
	invalid_tel: string;
	invalid_name: string;
	invalid_lastname: string;
	mail_sent_ok: string;
	invalid_email: string;
	invalid_number: string;
	invalid_required: string;
	validation_error: string;
	invalid_recaptcha: string;
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
	image: Picture;
	Razones: Razones[];
}

export interface Razones {
	id:number;
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
