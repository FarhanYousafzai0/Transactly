import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import { Button } from '@/components/ui/button'
import React from 'react'

const Dashboard = () => {
  return (
  <>
  <div className='home'>
    <div className='home-content'>
      <div className='home-header'>
        <HeaderBox type='greeting' title='Welcome back' subtext='Here is your dashboard' user='John Doe' />
        <TotalBalanceBox accounts={[]} totalBanks={4} totalCurrentBalance={12345}/>
      </div>
    </div>
  </div>

  </>
  )
}

export default Dashboard