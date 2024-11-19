
import Link from 'next/link'
import { FC, useEffect, useState } from 'react'
import { useGenerals } from '../../context/generals.context'
import Thumb from './Thumb'

interface LogoProps {
  className?: string
  type?: number
}

export const Logo: FC<LogoProps> = ({ className, type }) => {
  const { general: { informacion: { logo } } } = useGenerals()

  const [isMobileScreen, setIsMobileScreen] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobileScreen(width < 1200);
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (


    <div className={`logoCont ${className}`}>
      {logo && type
        ?
        <Thumb full className='logoCont__thumb' image={logo[type]} />
        :
        <Thumb full className='logoCont__thumb' image={isMobileScreen ? logo[0] : logo[1]} />}




    </div>
  )
}
