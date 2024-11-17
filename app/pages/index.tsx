/** @format */

import { SeoEngine } from '@/components/globals';
import AdmisionBanner from '@/components/organisms/AdmisionBanner';
import AdmisionBeneficios from '@/components/organisms/AdmisionBeneficios';
import AdmisionEspecialidades from '@/components/organisms/AdmisionEspecialidades';
import AdmisionFormMobile from '@/components/organisms/AdmisionFormMobile';
import AdmisionModalidades from '@/components/organisms/AdmisionModalidades';
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
			<AdmisionModalidades
				titulo={admision.AdmisionModalidades.titulo}
				subtitulo={admision.AdmisionModalidades.subtitulo}
				texto={admision.AdmisionModalidades.texto}
				imagen={admision.AdmisionModalidades.image}
				modalidades={admision.AdmisionModalidades.Modalidad}
			/>

			<AdmisionBeneficios
				titulo={admision.AdmimisionBeneficios.titulo}
				subtitulo={admision.AdmimisionBeneficios.subtitulo}
				CardBenefits={admision.AdmimisionBeneficios.CardBenefits}
			/>
			<SeoEngine seo={admision.seo} />
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
