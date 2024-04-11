/** @format */

import AdmisionBanner from '@/components/organisms/AdmisionBanner';
import AdmisionEspecialidades from '@/components/organisms/AdmisionEspecialidades';
import { Especialidades, EspecialidadesData } from '@/interfaces';
import { Admision, AdmisionData } from '@/interfaces/admision';
import { baseApi } from '@/lib/baseApi';
import { getGenerals } from '@/lib/getGenerals';
import type { GetStaticProps } from 'next';

interface AdminionProps {
	admision: AdmisionData;
	especialidades: EspecialidadesData[];
}

export default function Index({ admision, especialidades }: AdminionProps) {
	return (
		<>
			<AdmisionBanner
				titulo={admision.AdmisionBanner.titulo}
				subtitulo={admision.AdmisionBanner.subtitulo}
				texto={admision.AdmisionBanner.texto}
				admisionForm={admision.AdmisionForm}
				especialidades={especialidades}
			/>
			<AdmisionEspecialidades 
				titulo={admision.AdmisionEspecialidades.titulo}
				subtitulo={admision.AdmisionEspecialidades.subtitulo}
				texto={admision.AdmisionEspecialidades.texto}
			/>
		</>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	const generals = await getGenerals();

	const [{ data: admision }, { data: carreras }] = await Promise.all([
		baseApi.get<Admision>(`/admision?populate=deep`),
		baseApi.get<Especialidades>(`/especialidades?fields=titulo`),
	]);

	return {
		props: {
			admision: admision.data,
			especialidades: carreras.data,
			generals,
		},
		revalidate: 1,
	};
};
