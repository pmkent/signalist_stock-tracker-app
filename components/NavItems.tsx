'use client'

import { NAV_ITEMS } from '@/lib/constants'
import { usePathname } from 'next/navigation'
import React from 'react'

const NavItems = () => {
  const pathname = usePathname()
  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(path)
  }
  return (
    <ul className='flex flex-col sm:flex-row p-2 gap-3 sm:gap-10 font-medium'>
      {NAV_ITEMS.map((item, index) => (
        <li key={index}>
          <a
            href={item.href}
            className={`hover:text-yellow-500 transition-colors ${
              isActive(item.href) ? 'text-yellow-500' : ''
            }`}
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  )
}

export default NavItems
