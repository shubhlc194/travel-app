import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { NAV_LINKS } from '@/constants'
import Button from './button'

const Navbar = () => {
  return (
    <nav  className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="/hilink-logo.svg" alt="Hilink" width={74} height={29} />
      </Link>
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link href={link.href} key={link.key} className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
            {link.label}
          </Link>
        ))}
      </ul>
<div className="hidden lg:flex items-center">
    <Button
    type='button'
    title='login'
    icon='/user.svg'
    varient="btn_dark_green"
    />
      </div>
      <Image className='lg:hidden cursor-pointer inline block'
      src="/menu.svg"
        alt="menu"
        width={32}
        height={32}
      />
    </nav>
  )
}

export default Navbar
