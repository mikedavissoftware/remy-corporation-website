import { useState } from "react"
import { Link } from "react-router-dom"

import HamMenu from "../../assets/svg/ham-menu.svg"
import HamMenuClose from "../../assets/svg/ham-menu-close.svg"

export default function HeaderMobile() {

  const [active, setActive] = useState(false)

  const listItemStyle = "m-4 p-2 text-center text-wdblue font-sans font-bold rounded-md active:bg-slate-200"

  function handleClick() {
    set
  }

  return (
    <div id="header-mobile" className="md:hidden " >
      <header className="z-10 fixed w-full border-b-2 border-slate-300 shadow-md bg-black">
        <nav className={`navbar p-4 bg-white h-20`}>
          <div className="flex-1">
            <a className={`btn btn-ghost transition-all duration-500`} href="/"><img className="h-full p-1" src="images/header/remy_logo.png" /></a>
          </div>
          <div className="relative">
            <img
              src={HamMenu}
              alt="hamburger menu"
              className={`absolute transition-all duration-300 ${(active) ? ("opacity-0") : ("")}`}
              onClick={() => {setActive(!active)}}
            />
            <img
              src={HamMenuClose}
              alt="hamburger menu close"
              className={`transition-all duration-300 ${(active) ? ("") : ("opacity-0")}`}
              onClick={() => {setActive(!active)}}
            />
          </div>
        </nav>
        <div className={`h-fit w-full fixed bg-white/90 transition-all duration-300 ${(active) ? ("") : ("translate-x-[100vw]")}`}>
          <ul>
            <Link onClick={() => setActive(false)} to="/#offerings"><li className={listItemStyle}>Offerings</li></Link>
            <Link onClick={() => setActive(false)} to="/#focus-areas"><li className={listItemStyle}>Focus Areas</li></Link>
            <Link onClick={() => setActive(false)} to="/#about"><li className={listItemStyle}>Offerings</li></Link>
            <Link onClick={() => setActive(false)} to="/#partnerships"><li className={listItemStyle}>Offerings</li></Link>
            <Link onClick={() => setActive(false)} to="https://remy-arc.com/portal/" target="_blank" rel="noopener noreferrer"><li className={listItemStyle}>Remy Portal</li></Link>
            <Link onClick={() => {setActive(false); document.getElementById('contact-form-modal').showModal()}}><li className={listItemStyle}>Contact Us</li></Link>
          </ul>
        </div>
      </header>
      <div className="bg-white h-20"></div>
      
    </div>
  )
}