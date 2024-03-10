import Image from 'next/image'
import Link from 'next/link'
import { FC, useEffect, useState } from 'react'
import { useGenerals } from '../../context/generals.context'
import Thumb from './Thumb'

interface LogoProps {
  className?: string
  alt?: boolean
}

export const Logo: FC<LogoProps> = ({ alt = false, className }) => {
  const { general:{informacion:{logo}} } = useGenerals()

  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
  const [isMobileScreen, setIsMobileScreen] = useState<boolean>(window.innerWidth < 1200);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setWindowWidth(width);
      setIsMobileScreen(width < 1200);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Link href={'/'} className={`logoCont ${className}`} legacyBehavior>
        {logo && (
          <Thumb full className='logoCont__thumb' image={isMobileScreen ? logo[0] : logo[1]} />
        )}
    </Link>
  )
}
