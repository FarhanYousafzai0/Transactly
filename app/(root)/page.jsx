import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import { Button } from '@/components/ui/button'
import React from 'react'

const Dashboard = () => {
  const isLoggedIn = {firstName: 'John', lastName: 'Doe',email: 'john@doe.com'}
  return (
  <>
  <div className='home'>
    <div className='home-content'>
      <div className='home-header'>
        <HeaderBox type='greeting' title='Welcome back' subtext='Here is your dashboard' user='John Doe' />
        <TotalBalanceBox accounts={[]} totalBanks={4} totalCurrentBalance={12345}/>
      </div>
    </div>
    <RightSidebar user={isLoggedIn} banks={[{},{}]} totalCurrentBalance={12345} />
  </div>

  </>
  )
}

export default Dashboard