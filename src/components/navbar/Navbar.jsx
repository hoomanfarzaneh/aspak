import './navbar.scss'
import React from 'react'

const Navbar = ({menuOpen, setMenuOpen}) => {
  return (
    <div className={'navbar ' + (menuOpen && 'active')} >
    <div className="navContainer">
      <div className="left">
        <img className='navLogo' alt='' src=''/>
      </div>
    <div className="right">
        <p><a href='#contact' className='link'> ارتباط با ما</a></p>
        <p><a href='#project' className='link'> پروژه ها</a></p>
        <p><a href='#service' className='link'>خدمات </a></p>
        <p><a href='#about' className='link'>درباره شرکت </a></p>
        <p><a href='#main' className='link'>صفحه اصلی</a></p>

        <div className='hamburger' onClick={()=> setMenuOpen(!menuOpen)}>
          <span className='line1'></span>
          <span className='line1'></span>
          <span className='line1'></span>
        </div>
    </div>
    </div>
</div>
  )
}

export default Navbar