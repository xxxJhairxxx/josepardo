/** @format */

import { Picture } from './shared';

export interface General {
	data: GeneralData;
}

export interface GeneralData {
	id: number;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
	label_buttons: LabelsButtons;
	informacion: Informacion;
	Footer:Footer;
}
export interface Logo {
	id: number;
	name: string;
	alternativeText: string;
	caption: string;
	width: number;
	height: number;
	formats: null;
	hash: string;
	ext: string;
	mime: string;
	size: number;
	url: string;
	previewUrl: null;
	provider: string;
	provider_metadata: null;
	createdAt: string;
	updatedAt: string;
}
export interface LabelsButtons {
	id: 1;
	lbl_enviar: string;
	lbl_leer_mas: string;
}

export interface Informacion {
	telefono: string;
	direccion: string;
	correo: string;
	horario: string;
	redes_sociales: SocialNetworks[];
	logo: Picture[];
}


export interface SocialNetworks {
	id: number;
	tipo: string;
	url: string;
}

export interface Footer{
	text:string;
	copyright:string;
}