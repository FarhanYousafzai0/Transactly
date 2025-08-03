import React from 'react'

const Footer = ({user}) => {
  return (
   <footer className='footer'>
    <div className='footer-name'>
      <span className='footer-name-icon'>{user.firstName[0]}</span>
      <span className='footer-name-text'>{user.firstName} {user.lastName}</span>
    </div>
   </footer>
  )
}

export default Footer
