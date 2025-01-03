import Link from 'next/link'
import React, { PropsWithChildren } from 'react'

interface ButtonProps extends PropsWithChildren {
  url?: string
  className?: string
}

export const Button: React.FC<ButtonProps> = ({ children, url, className }) => {
  return url ? (
    <Link className={`button ${className}`} href={url}>
      {children}
    </Link>
  ) : (
    <button className={`button ${className}`}>{children}</button>
  )
}

export default Button
