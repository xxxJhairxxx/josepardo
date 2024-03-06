/** @format */

import AdmisionHeader from '@/components/organisms/AdmisionHeader';
import { Admision, AdmisionData } from '@/interfaces/admision';
import { baseApi } from '@/lib/baseApi';
import { getGenerals } from '@/lib/getGenerals';
import type { GetStaticProps } from 'next';

interface AdminionProps {
	admision: AdmisionData;
}

export default function Index({ admision }: AdminionProps) {
	return (
		<>
			<AdmisionHeader
				titulo={admision.AdmisionBanner.titulo}
				subtitulo={admision.AdmisionBanner.subtitulo}
        texto={admision.AdmisionBanner.texto}
			/>
		</>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	const generals = await getGenerals();

	const [{ data: admision }] = await Promise.all([
		baseApi.get<Admision>(`/admision?populate=deep`),
	]);

	return {
		props: {
			admision: admision.data,
			generals,
		},
		revalidate: 1,
	};
};
