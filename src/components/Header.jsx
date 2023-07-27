import React from 'react'
import Navbar from './Navbar'

function Header() {
  return (
    <>
      <div className="justify-items-center py-3">
        <a href="https://youtu.be/k6jqx9kZgPM" target="_blank" className="font-mont text-3xl text-neon-magenta">TALK THAT TALK</a>
          <a href="https://twice.lnk.to/BETWEEN1and2" target="_blank">
            <p className="font-monologue text-5xl text-neon-magenta">BetW9eN 1&2</p>
          </a>
      </div>
      <Navbar />
    </>   
  )
}

export default Header