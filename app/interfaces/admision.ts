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
	AdmisionModalidades: AdmisionModalidades;
	AdmimisionBeneficios: AdmimisionBeneficios;
	AdmisionGaleria: AdmisionGaleria;
	AdmisionConvenios: AdmisionConvenios;
	AdmisionTestimonios: AdmisioTestimonios;
	AdmisionBlog: AdmisionBlog;
	seo: MetaSEO;
}

interface AdmisionBanner {
	id: number;
	titulo: string;
	subtitulo: string;
	texto: string;
	image:Picture;
}
export interface AdmisionFormp {
	id: number;
	nombre: InputForm;
	apellido: InputForm;
	carrera: InputForm;
	celular: InputForm;
	messages: Messages;
	email:InputForm
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
interface AdmisionModalidades {
	id: number;
	titulo: string;
	subtitulo:string;
	texto: string;
	image: Picture;
	Modalidad: Modalidades[];
}

export interface Modalidades {
	id:number;
	titulo: string;
	descripcion: string;
	logo: Picture;
}
interface AdmimisionBeneficios {
	id: number;
	titulo: string;
	subtitulo:string;
	CardBenefits: CardBenefits[];
}

export interface CardBenefits {
	id: number;
	titulo: string;
	image: Picture ;
}

interface AdmisionGaleria {
	id: number;
	titulo: string;
	subtitulo: string;
}
interface AdmisionConvenios {
	id: number;
	titulo: string;
	logo: Picture[]
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
