/** @format */

import { Picture } from "./shared";


export interface Especialidades {
	data: EspecialidadesData[];
}

export interface EspecialidadesData {
	id: number;
	titulo: string;
	descripcion: string;
	createdAt: string
	updatedAt: string
	publishedAt: string
	logo: Picture;
}
