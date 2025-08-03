import AuthPage from '@/components/AuthPage'
import React from 'react'

const SignIn = () => {
  return (
    <section className='flex-center size-full max-sm:px-6'>
      <AuthPage type={'sign-in'}/>
    </section>
  )
}

export default SignIn
