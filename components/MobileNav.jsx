'use client'

import React from 'react'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import Image from 'next/image'
import Link from 'next/link'
import { sidebarLinks } from '@/constants'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const MobileNav = () => {
  const pathname = usePathname()

  return (
    <section className="w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger>
          <Image
            src="/icons/hamburger.svg"
            width={30}
            height={30}
            alt="menu"
            className="cursor-pointer"
          />
        </SheetTrigger>

        <SheetContent
  side="left"
  className="border-none bg-white transition-all duration-300 ease-in-out data-[state=closed]:-translate-x-full data-[state=open]:translate-x-0"
>
          <Link href="/" className="cursor-pointer flex items-center gap-1 px-4 p-4">
            <Image
              src="/icons/logo.svg"
              width={34}
              height={34}
              alt="Transactly logo"
              className='cursor-pointer'
            />
            <h1 className="text-26  cursor-pointer font-bold ">Transactly</h1>
          </Link>

          <div className="mobilenav-sheet p-4">
            <SheetClose asChild>
              <nav className="flex h-full flex-col gap-6 pt-16 text-white">
                {sidebarLinks.map((item) => {
                  if (!item?.route) return null;

                  const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`);

                  return (
                    <SheetClose asChild key={item.route}>
                      <Link
                        href={item.route}
                        className={cn(
                          'mobilenav-sheet_close w-full',
                          { 'bg-bank-gradient': isActive }
                        )}
                      >
                        <Image
                          src={item.imgURL}
                          alt={item.label}
                          width={20}
                          height={20}
                          className={cn({ 'brightness-[3] invert-0': isActive })}
                        />
                        <p className={cn(
                          "text-16 font-semibold text-black-2",
                          { "text-white": isActive }
                        )}>
                          {item.label}
                        </p>
                      </Link>
                    </SheetClose>
                  )
                })}
              </nav>
            </SheetClose>

            <div className='flex items-center border'></div>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  )
}

export default MobileNav
