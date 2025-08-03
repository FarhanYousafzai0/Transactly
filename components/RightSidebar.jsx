'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import BankCard from './BankCard'

const RightSidebar = ({ user, banks, totalCurrentBalance }) => {
  return (
    <aside className="no-scrollbar h-screen max-h-screen flex-col border-l border-gray-200 xl:flex w-[355px] xl:overflow-y-scroll hidden md:flex max-w-[350px] bg-white rounded-2xl shadow-md">

      {/* Profile Section */}
      <section className="flex flex-col items-center bg-gradient-to-tr from-blue-200 via-purple-200 to-pink-200 rounded-2xl p-6">
        <div className="flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-lg border-2 border-blue-300">
          <span className="text-3xl font-extrabold text-blue-500">
            {user?.firstName?.[0]}
          </span>
        </div>

        <div className="mt-6 text-center">
          <h1 className="text-xl font-semibold text-white drop-shadow">
            {user?.firstName} {user?.lastName}
          </h1>
          <p className="text-sm text-white/80">{user?.email}</p>
        </div>
      </section>

      {/* My Banks Section */}
      <section className="mt-6 px-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-base font-semibold text-gray-800">My Banks</h2>
          <Link
            href="/banks"
            className="flex items-center gap-2 text-sm font-medium text-blue-600 hover:underline"
          >
            <div className="p-1.5 rounded-full bg-blue-100 hover:bg-blue-200 transition">
              <Image src="/icons/plus.svg" alt="add-bank" width={16} height={16} />
            </div>
            Add bank
          </Link>
        </div>

        {banks?.length > 0 && (
          <div className="relative flex flex-1 flex-col items-center justify-center gap-6">
            <div className="relative z-10 w-full scale-[1] hover:scale-[1.02] transition-all duration-300">
              <BankCard
                key={banks[0].$id}
                account={banks[0]}
                userName={`${user.firstName} ${user.lastName}`}
                showBalance={false}
                className="rounded-xl shadow-[0_6px_20px_rgba(0,0,0,0.1)] border border-gray-200"
              />
            </div>

            {banks[1] && (
              <div className="absolute right-0 top-8 z-0 w-[90%] scale-[0.95] blur-[0.2px] opacity-90">
                <BankCard
                  key={banks[1].$id}
                  account={banks[1]}
                  userName={`${user.firstName} ${user.lastName}`}
                  showBalance={false}
                  className="rounded-xl shadow-[0_4px_14px_rgba(0,0,0,0.05)] border border-gray-100"
                />
              </div>
            )}
          </div>
        )}
      </section>
    </aside>
  )
}

export default RightSidebar
