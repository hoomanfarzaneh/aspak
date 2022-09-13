import React from 'react'
import { useState } from 'react'
import About from '../src/components/about/About'
import Contact from '../src/components/contact/Contact';
import Main from '../src/components/main/Main';
import Menu from '../src/components/menu/Menu';
import Navbar from '../src/components/navbar/Navbar'
import Project from '../src/components/project/Project';
import Service from '../src/components/service/Service';
const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <div className='app'>
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <div className="section">
          <Main />
          <About />
          <Service />
          <Project />
          <Contact />
        </div>
      </div>
    </>
  )
}

export default App