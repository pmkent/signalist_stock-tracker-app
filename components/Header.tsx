'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import NavItems from './NavItems'
import UserDropdown from './UserDropdown'
import { useRouter } from 'next/navigation'

const Header = () => {
  return (
    <header className='sticky top-0 header'>
      <div className='container header-wrapper'>
        <Link href='/'>
          <h1 className='text-3xl font-bold'>
            <Image
              src='/assets/icons/logo.svg'
              alt='Signalist Logo'
              width={140}
              height={32}
              priority={true}
              aria-label='Go to dashboard'
              className='h-8 w-auto cursor-pointer'
            />
          </h1>
        </Link>
        <nav className='hidden sm:block'>
          <NavItems />
        </nav>
        <UserDropdown />
      </div>
    </header>
  )
}

export default Header
