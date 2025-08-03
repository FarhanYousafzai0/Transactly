import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import BankCard from './BankCard'

const RightSidebar = ({ user, banks, totalCurrentBalance }) => {
  return (
    <aside className=" no-scrollbar  h-screen max-h-screen flex-col border-l border-gray-200 xl:flex w-[355px] xl:overflow-y-scroll hidden md:flex  max-w-[350px] bg-white rounded-2xl shadow-md p-4">
      
      {/* Profile Section */}
      <section className="flex flex-col items-center bg-gradient-to-tr from-blue-200 via-purple-200 to-pink-200 rounded-2xl p-6">
        <div className="flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-md">
          <span className="text-3xl font-bold text-blue-500">
            {user?.firstName?.[0]}
          </span>
        </div>

        <div className="mt-6 text-center">
          <h1 className="text-xl font-semibold text-gray-900">
            {user?.firstName} {user?.lastName}
          </h1>
          <p className="text-sm text-gray-600">{user?.email}</p>
        </div>
      </section>

      {/* My Banks Section */}
      <section className="mt-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-base font-semibold text-gray-800">My Banks</h2>
          <Link href="/banks" className="text-sm  flex items-center hover:text-blue-600 font-medium  hover:underline">
          <Image  src="/icons/plus.svg" alt='add-bank' width={24} height={24} />
            Add bank
          </Link>
        </div>

        {banks?.length > 0 && (
          <div className="relative flex flex-1 flex-col items-center justify-center gap-5">
            <div className='relative bg-blue-500 w-full z-10'>
            <BankCard
                  key={banks[0].$id}
                  account={banks[0]}
                  userName={`${user.firstName} ${user.lastName}`}
                  showBalance={false}
                />
            </div>
            {banks[1] && (
              <div className="absolute right-0 bg-red-600 top-8 z-0 w-[90%]">
              <BankCard
                  key={banks[1].$id}
                  account={banks[1]}
                  userName={`${user.firstName} ${user.lastName}`}
                  showBalance={false}
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
