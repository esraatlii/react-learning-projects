import React from 'react'
import './css/Header.css'

function Header({img}) {
  return (
    <div className='header'>
      <div className='nba-logo'>
        <img src={img} width={24} height={24} />
      </div>
    </div>
  )
}

export default Header