import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { useGenerals } from '../../context/generals.context'

interface LogoProps {
  className?: string
  alt?: boolean
}

export const Logo: FC<LogoProps> = ({ alt = false, className }) => {
  const { general } = useGenerals()

  return (
    <Link href={'/'} legacyBehavior>
      <picture className={`logoCont ${className}`}>
        {general.logo && (
          <Image
            priority
            src={alt ? general.logo[1].url : general.logo[0].url}
            width={alt ? general.logo[1].width : general.logo[0].width}
            height={alt ? general.logo[1].height : general.logo[0].height}
            alt={'Debt Solution'}
          ></Image>
        )}
      </picture>
    </Link>
  )
}
