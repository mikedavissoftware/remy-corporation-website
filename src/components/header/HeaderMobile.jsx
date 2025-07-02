import { useState } from "react"

import HamMenu from "../../assets/svg/ham-menu.svg"
import HamMenuClose from "../../assets/svg/ham-menu-close.svg"

export default function HeaderMobile() {

  const [active, setActive] = useState(false)

  return (
    <div id="header-mobile" className="md:hidden" >
      <header className="z-10 fixed h-20 w-full border-b-2 border-slate-300 shadow-md bg-black">
        <nav className={`navbar p-4 bg-white`}>
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
      </header>
      <div className="bg-white h-20"></div>
      <div className={`${(active) ? ("") : ("")}`}>
        <div></div>
      </div>
    </div>
  )
}