import Link from 'next/link';
import { Logo } from '../atoms/Logo';
import { Container } from '../globals';
import { useGenerals } from '@/context/generals.context';

const AdmisionNavbar = () => {
	const {
		general: { informacion },
	} = useGenerals();
	

	return (
		<header className='AdminNavbar'>
			
			<Container className='AdminNavbar__container'>
				<Logo />

				<nav className='AdminNavbar__container__info'>
					<Link href='https://maps.app.goo.gl/CTQGbct4D4Zjcaue9' target='_blank' >
						<i className='icon-location' />
						{informacion.direccion}
					</Link>
					<Link href={`mailto:${informacion.correo}`} rel="noreferrer">
						<i className='icon-email' />
						{informacion.correo}
					</Link>
					<Link href={`tel:${informacion.telefono}`} rel="noreferrer">
						<i className='icon-phone' />
						{informacion.telefono}
					</Link>
					<p>
						<i className='icon-schedule' />
						{informacion.horario}
					</p>
				</nav>
			</Container>
		</header>
	);
};

export default AdmisionNavbar;
