import { useState } from "react"
import { Link } from "react-router-dom"

import HamMenu from "../../assets/svg/ham-menu.svg"
import HamMenuClose from "../../assets/svg/ham-menu-close.svg"
import { IoIosArrowUp } from "react-icons/io";

export default function HeaderMobile() {

  const [active, setActive] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  const listItemStyle = "py-4 text-center text-wdblue font-sans font-bold border-t-2 active:bg-slate-200"

  const resetMenu = () => {
    setActive(!active)
    setTimeout(() => {
      setServicesOpen(false)
    }, 300)
  }

  return (
    <div id="header-mobile" className="md:hidden" >
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
              onClick={() => resetMenu()}
            />
            <img
              src={HamMenuClose}
              alt="hamburger menu close"
              className={`transition-all duration-300 ${(active) ? ("") : ("opacity-0")}`}
              onClick={() => setActive(true)}
            />
          </div>
        </nav>
        <div className={`h-fit w-full fixed bg-white shadow-lg transition-all duration-300 ${(active) ? ("") : ("translate-x-[100vw]")}`}>
          <ul>
            <Link onClick={() => resetMenu} to="/#focus-areas"><li className={listItemStyle}>Focus Areas</li></Link>
            <Link onClick={() => resetMenu} to="/#about"><li className={listItemStyle}>About</li></Link>
            <Link onClick={() => resetMenu} to="/#partnerships"><li className={listItemStyle}>Partnerships</li></Link>
            <Link onClick={() => setServicesOpen(!servicesOpen)} to="/#services"><li className={`${listItemStyle} transition-all duration-200 ${(servicesOpen) ? ("bg-slate-300") : ("")}`}>Services<IoIosArrowUp className={`ml-2 inline-block scale-[1.3] -translate-y-[1px] transition-rotate duration-300 ${(servicesOpen) ? ("rotate-180") : ("")}`}/></li></Link>
            { (servicesOpen) &&
              <>
              <Link onClick={() => resetMenu} to="/#focus-areas"><li className={`${listItemStyle} bg-slate-200 w-[95%] mx-auto border-white rounded-b-[10px]`}>Focus Areas</li></Link>
              <Link onClick={() => resetMenu} to="/#about"><li className={`${listItemStyle} bg-slate-200 w-[90%] mx-auto border-white rounded-b-[10px]`}>About</li></Link>
              <Link onClick={() => resetMenu} to="/#partnerships"><li className={`${listItemStyle} bg-slate-200 w-[85%] mx-auto border-white rounded-b-[10px]`}>Partnerships</li></Link>
              </>
            }
            <Link onClick={() => {resetMenu; document.getElementById('contact-form-modal').showModal()}}><li className={`${listItemStyle} text-slate-900 bg-wdorange`}>Contact Us</li></Link>
            <Link onClick={() => resetMenu} to="https://remy-arc.com/portal/" target="_blank" rel="noopener noreferrer"><li className={`${listItemStyle} text-white bg-wdblue`}>Remy ARC</li></Link>
          </ul>
        </div>
      </header>
      <div className="bg-white h-20"></div>
      
    </div>
  )
}