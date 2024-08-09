/** @format */

import AdmisionBanner from '@/components/organisms/AdmisionBanner';
import AdmisionEspecialidades from '@/components/organisms/AdmisionEspecialidades';
import AdmisionFormMobile from '@/components/organisms/AdmisionFormMobile';
import AdmisionStudyUs from '@/components/organisms/AdmisionStudyUs';
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
				image={admision.AdmisionBanner.image}
				admisionForm={admision.AdmisionForm}
				especialidades={especialidades}
			/>
			<AdmisionFormMobile
				admisionForm={admision.AdmisionForm}
				especialidades={especialidades}
			/>
			<AdmisionEspecialidades
				titulo={admision.AdmisionEspecialidades.titulo}
				subtitulo={admision.AdmisionEspecialidades.subtitulo}
				texto={admision.AdmisionEspecialidades.texto}
				especialidades={especialidades}
			/>
			<AdmisionStudyUs
				titulo={admision.AdmisionEstudiaconnostros.titulo}
				subtitulo={admision.AdmisionEstudiaconnostros.subtitulo}
				texto={admision.AdmisionEstudiaconnostros.texto}
				imagen={admision.AdmisionEstudiaconnostros.image}
				razones={admision.AdmisionEstudiaconnostros.Razones}
			/>
		</>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	const generals = await getGenerals();

	const [{ data: admision }, { data: carreras }] = await Promise.all([
		baseApi.get<Admision>(`/admision?populate=deep`),
		baseApi.get<Especialidades>(`/especialidades?populate=deep`),
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
