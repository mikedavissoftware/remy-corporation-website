import { useState } from "react"
import { Link } from "react-router-dom"

import HamMenu from "../../assets/svg/ham-menu.svg"
import HamMenuClose from "../../assets/svg/ham-menu-close.svg"

export default function HeaderMobile() {

  const [active, setActive] = useState(false)

  const listItemStyle = "m-4 p-2 text-right font-sans font-bold rounded-md active:bg-slate-200"

  function handleClick() {
    set
  }

  return (
    <div id="header-mobile" className="md:hidden" >
      <header className="z-10 fixed w-full border-b-2 border-slate-300 shadow-md bg-black">
        <nav className={`navbar p-4 bg-white h-20 z-2`}>
          <div className="flex-1">
            <a className={`btn btn-ghost transition-all duration-500`}><img className="h-full p-1" src="images/header/remy_logo.png" /></a>
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
        <div className={`h-fit w-full fixed bg-white/85 transition-all duration-300 ${(active) ? ("") : ("translate-x-[100vw]")}`}>
          <ul>
            <li className={listItemStyle}><Link onClick={() => handleClick()} to="/" >Home</Link></li>
            <li className={listItemStyle}><Link onClick={() => handleClick()} to="/#about">About Us</Link></li>
            <li className={listItemStyle}><Link onClick={() => handleClick()} to="/#offerings">Offerings</Link></li>
            <li className={listItemStyle}><Link onClick={() => handleClick()} to="/#focus-areas">Focus Areas</Link></li>
            <li className={listItemStyle}><Link onClick={() => handleClick()} to="/#partnerships">Partnerships</Link></li>
            <li className={listItemStyle}><Link onClick={() => setRemyPortalIsOpen(false)} to="https://remy-arc.com/portal/" target="_blank" rel="noopener noreferrer">Remy Portal</Link></li>
          </ul>
        </div>
      </header>
      <div className="bg-white h-20"></div>
      
    </div>
  )
}