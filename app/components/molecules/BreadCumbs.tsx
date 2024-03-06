import Link from 'next/link'
import { Container } from '../globals'
import { useRouter } from 'next/router';
interface BreadCumbsProp {
   breadCumbMenu: { label: string; url?: string }[]
   contact?: boolean
}


export const BreadCumbs = ({ breadCumbMenu, contact }: BreadCumbsProp) => {
   const router = useRouter();
   const isPrefixed = router.pathname.startsWith('/en');
   return (
      <div className={`breadCumbs ${contact && 'contact'}`}>
         <Container>
            <ul className={`breadCumbs-list`}>
                <li className={'breadCumbs-item'}>
                  <Link href={'/'}> {isPrefixed ? 'Home' : 'Inicio'}</Link>
                </li>
               {breadCumbMenu.map(({ label, url }) => (
                  <li className={'breadCumbs-item'} key={url || label}>
                    {url ? <Link href={url}>{label}</Link> : <span>{label}</span>}
                  </li>
               ))}
            </ul>
         </Container>
      </div>
   )
}