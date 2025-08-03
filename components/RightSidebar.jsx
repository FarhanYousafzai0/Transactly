import React from 'react'

const RightSidebar = ({user, totalBanks, totalCurrentBalance}) => {
  return (
    <>
      <aside className='right-sidebar'>
        <div className='profile-banner'>
          <div className="profile">
            <div className="profile-img">
              <span className="text-5xl font-bold text-blue-500">{user.firstName[0]}</span>
            </div>

            <div className="profile-details mt-5">
              <h1 className="profile-name">{user.firstName} {user.lastName}</h1>
              <p className="profile-email">{user.email}</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}

export default RightSidebar
