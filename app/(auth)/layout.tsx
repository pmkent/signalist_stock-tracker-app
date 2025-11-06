import { auth } from '@/lib/better-auth/auth'
import { headers } from 'next/headers'
import Image from 'next/image'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import React from 'react'

const AuthLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await auth.api.getSession({ headers: await headers() })
  if (session?.user) redirect('/')
  return (
    <main className='auth-layout'>
      <section className='auth-left-section scrollbar-hide-default'>
        <Link href='/' className='auth-logo'>
          <Image
            src='/assets/icons/logo.svg'
            alt='Signalist Logo'
            width={140}
            height={32}
            priority={true}
            className='h-8 w-auto cursor-pointer'
          />
        </Link>
        <div className='pb-6 lg:pb-8 flex-1'>{children}</div>
      </section>

      <section className='auth-right-side'>
        <div className='z-10 relative lg:mt-4 lg:mb-16'>
          <blockquote className='auth-blockquote'>
            Signalist turned my watchlist into a winning list. The alerts are
            spot-on and I feel more confident making moves in the market.
            {/* “The best way to predict the future is to create it.” */}
          </blockquote>
          <div className='flex items-center justify-between'>
            <div>
              <cite className='auth-testimonial-author'>Phil M Kieti</cite>
              <p className='max-md:text-xs text-gray-500'>Retail Investor</p>
            </div>
            <div className='flex items-center gap-0.5'>
              {[1, 2, 3, 4, 5].map((star) => (
                // <div key={i} className='w-2 h-2 rounded-full bg-gray-600'></div>
                <Image
                  key={star}
                  src='/assets/icons/star.svg'
                  alt='Star'
                  width={20}
                  height={20}
                  priority={true}
                  className='w-5 h-5'
                />
              ))}
            </div>
          </div>
        </div>
        <div className='flex-1 relative'>
          <Image
            src='/assets/images/dashboard.png'
            alt='Dashboard preview'
            width={1440}
            height={1150}
            className='auth-dashboard-preview absolute top-0'
          />
        </div>
      </section>
    </main>
  )
}

export default AuthLayout
