import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { useGenerals } from '../../context/generals.context'
import Thumb from './Thumb'

interface LogoProps {
  className?: string
  alt?: boolean
}

export const Logo: FC<LogoProps> = ({ alt = false, className }) => {
  const { general:{informacion:{logo}} } = useGenerals()

  return (
    <Link href={'/'} className={`logoCont ${className}`} legacyBehavior>
        {logo && (
          <Thumb full className='logoCont__thumb' image={alt ? logo[1] : logo[0]} />
        )}
    </Link>
  )
}
