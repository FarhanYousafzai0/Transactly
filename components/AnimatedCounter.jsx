'use client'
import React from 'react'
import CountUp from 'react-countup'

const AnimatedCounter = ({amount}) => {
  return (
    <>
    <div className='w-full'>
        <CountUp end={amount} duration={2.7} separator=","  decimals={2} />

    </div>
      
    </>
  )
}

export default AnimatedCounter
