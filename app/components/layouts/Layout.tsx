/** @format */

import { Jost } from 'next/font/google';
import { FC, PropsWithChildren } from 'react';

const primary = Jost({
	subsets: ['latin'],
	weight: ['100', '300', '400', '500', '600', '700', '900'],
	variable: '--font-primary',
});

export const Layout: FC<PropsWithChildren> = ({ menu, children }: any) => {
	return (
		<main className={`${primary.variable}`}>
		
			{children}
			
		</main>
	);
};
