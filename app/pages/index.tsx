/** @format */

import AdmisionHeader from '@/components/organisms/AdmisionHeader';
import Sseccionsa from '@/components/organisms/SSeccion';
import { Especialidades, EspecialidadesData } from '@/interfaces';
import { Admision, AdmisionData } from '@/interfaces/admision';
import { baseApi } from '@/lib/baseApi';
import { getGenerals } from '@/lib/getGenerals';
import type { GetStaticProps } from 'next';

interface AdminionProps {
	admision: AdmisionData;
	especialidades:EspecialidadesData[]
}

export default function Index({ admision ,especialidades}: AdminionProps) {

	return (
		<>
			<AdmisionHeader
				titulo={admision.AdmisionBanner.titulo}
				subtitulo={admision.AdmisionBanner.subtitulo}
				texto={admision.AdmisionBanner.texto}
				admisionForm={admision.AdmisionForm}
				especialidades={especialidades}
			/>
			<Sseccionsa></Sseccionsa>
		</>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	const generals = await getGenerals();

	const [{ data: admision },{data:carreras}] = await Promise.all([
		baseApi.get<Admision>(`/admision?populate=deep`),baseApi.get<Especialidades>(`/especialidades?fields=titulo`)
	]);

	return {
		props: {
			admision: admision.data,
			especialidades:carreras.data,
			generals,
		},
		revalidate: 1,
	};
};
