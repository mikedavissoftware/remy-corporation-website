import { useState } from "react"
import { Link, useNavigate, useLocation } from "react-router-dom"

import HamMenu from "../../../assets/svg/ham-menu.svg"
import HamMenuClose from "../../../assets/svg/ham-menu-close.svg"
import { IoIosArrowUp } from "react-icons/io";

export default function HeaderMobile() {

  const [active, setActive] = useState(false)

  const [aboutOpen, setAboutOpen] = useState(false)
  const [partnershipsOpen, setPartnershipsOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mediaOpen, setMediaOpen] = useState(false)

  const location = useLocation()

  const listItemStyle = "py-4 text-center text-wdblue font-sans font-bold border-t-2 active:bg-slate-200"

  const resetMenu = () => {
    console.log("reset")
    setActive(false)
    setTimeout(() => {
      setAboutOpen(false)
      setPartnershipsOpen(false)
      setServicesOpen(false)
      setMediaOpen(false)
    }, 300)
  }

  const navigate = useNavigate()

  const toggleAbout = () => {
    if (aboutOpen) {
      console.log("about open")
      navigate('#about')
    }
    setAboutOpen(!aboutOpen)
    setPartnershipsOpen(false)
    setServicesOpen(false)
    setMediaOpen(false)
  }

  const togglePartnerships = () => {
    setPartnershipsOpen(!partnershipsOpen)
    setAboutOpen(false)
    setServicesOpen(false)
    setMediaOpen(false)  
  }

  const toggleServices = () => {
    setServicesOpen(!servicesOpen)
    setAboutOpen(false)
    setPartnershipsOpen(false)
    setMediaOpen(false)  
  }

  const toggleMedia = () => {
    setMediaOpen(!mediaOpen)
    setAboutOpen(false)
    setPartnershipsOpen(false)
    setServicesOpen(false)
  }

  return (
    <div id="header-mobile" className="md:hidden" >
      <header className="z-10 fixed w-full border-b-2 border-slate-300 shadow-md bg-black">
        <nav className="navbar p-4 bg-white h-[7vh]">
          <div className="flex-1">
            <a className={`btn btn-ghost transition-all duration-500`} href="/">
              <img
                className="h-full py-1 -translate-x-3"
                src={
                  (location.pathname === "/gsa-contract") ? (
                    "images/general/logo/remy_federal.png"
                  ) : (
                    "images/general/logo/remy_logo.png"
                  )
                }
              />
            </a>
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
        <div className={`h-[93vh] w-[100vw] mr-0 fixed shadow-lg transition-all duration-300 ${(active) ? ("translate-x-[0vw]") : ("translate-x-[100vw]")}`}>
          <ul className="bg-white border-t-2">

            {/* ABOUT DROPDOWN */}
            <Link onClick={() => {toggleAbout()}}><li className={`${listItemStyle} transition-all duration-200 ${(aboutOpen) ? ("bg-slate-300/80") : ("")}`}>About<IoIosArrowUp className={`ml-2 inline-block scale-[1.3] -translate-y-[1px] transition-rotate duration-300 ${(aboutOpen) ? ("") : ("rotate-180")}`}/></li></Link>
            { (aboutOpen) &&
              <>
              {/* <Link onClick={() => resetMenu()} to="/#commitment"><li className={`${listItemStyle} bg-slate-200 w-[95%] mx-auto border-white rounded-b-[10px]`}>Our Commitment</li></Link> */}
              <Link onClick={() => resetMenu()} to="/#our-story"><li className={`${listItemStyle} bg-slate-200 w-[95%] mx-auto border-white rounded-b-[10px]`}>Our Commitment</li></Link>
              <Link onClick={() => resetMenu()} to="/#focus-areas"><li className={`${listItemStyle} bg-slate-200 w-[90%] mx-auto border-white rounded-b-[10px]`}>Industries</li></Link>
              <Link onClick={() => {resetMenu(); window.open("https://www.linkedin.com/newsletters/the-remy-report-7293316723514974209/", "_blank")}}><li className={`${listItemStyle} bg-slate-200 w-[85%] mx-auto border-white rounded-b-[10px]`}>News</li></Link>
              {/* <Link onClick={() => {resetMenu(); document.getElementById('contact-form-modal').showModal()}} ><li className={`${listItemStyle} bg-secondary/75 w-[80%] mx-auto border-white rounded-b-[10px]`}>Contact Us</li></Link> */}
              <div className="block bg-white h-[5px]"></div>
              </>
            }

            {/* PARTNERSHIPS DROPDOWN */}
            <Link onClick={() => togglePartnerships()}><li className={`${listItemStyle} transition-all duration-200 ${(partnershipsOpen) ? ("bg-slate-300/80") : ("")}`}>Partnerships<IoIosArrowUp className={`ml-2 inline-block scale-[1.3] -translate-y-[1px] transition-rotate duration-300 ${(partnershipsOpen) ? ("") : ("rotate-180")}`}/></li></Link>
            { (partnershipsOpen) &&
              <>
              <Link onClick={() => resetMenu()} to="/workday-services-partner"><li className={`${listItemStyle} bg-slate-200 w-[95%] mx-auto border-white rounded-b-[10px]`}>Workday Services Partner</li></Link>
              {/* <Link onClick={() => resetMenu()} to="/oracle-gold-partner"><li className={`${listItemStyle} bg-slate-200 w-[90%] mx-auto border-white rounded-b-[10px]`}>Oracle Gold Partner</li></Link> */}
              <Link onClick={() => resetMenu()} to="/gsa-contract"><li className={`${listItemStyle} bg-slate-200 w-[90%] mx-auto border-white rounded-b-[10px]`}>GSA Contract</li></Link>
              {/* <Link onClick={() => resetMenu()} to="/service-now"><li className={`${listItemStyle} bg-slate-200 w-[80%] mx-auto border-white rounded-b-[10px]`}>ServiceNow</li></Link> */}
              <div className="block bg-white h-[5px]"></div>
              </>
            }

            <Link to="/services" onClick={() => resetMenu()}><li className={`${listItemStyle} transition-all duration-200`}>Services</li></Link>

            {/* SERVICES DROPDOWN */}
            {/* <Link onClick={() => toggleServices()}><li className={`${listItemStyle} transition-all duration-200 ${(servicesOpen) ? ("bg-slate-300/80") : ("")}`}>Services<IoIosArrowUp className={`ml-2 inline-block scale-[1.3] -translate-y-[1px] transition-rotate duration-300 ${(servicesOpen) ? ("") : ("rotate-180")}`}/></li></Link>
            { (servicesOpen) &&
              <>
              <Link onClick={() => resetMenu()} to="/workforce-solutions"><li className={`${listItemStyle} bg-slate-200 w-[95%] mx-auto border-white rounded-b-[10px]`}>Workforce Solutions</li></Link>
              <Link onClick={() => resetMenu()} to="/tech-consulting"><li className={`${listItemStyle} bg-slate-200 w-[90%] mx-auto border-white rounded-b-[10px]`}>Technology Consulting</li></Link>
              <Link onClick={() => resetMenu()} to="/managed-operations"><li className={`${listItemStyle} bg-slate-200 w-[85%] mx-auto border-white rounded-b-[10px]`}>Managed Operations</li></Link>
              <div className="block bg-white h-[5px]"></div>
              </>
            } */}

            {/* MEDIA DROPDOWN */}
            {/* <Link onClick={() => toggleMedia()}><li className={`${listItemStyle} transition-all duration-200 ${(mediaOpen) ? ("bg-slate-300/80") : ("")}`}>Media<IoIosArrowUp className={`ml-2 inline-block scale-[1.3] -translate-y-[1px] transition-rotate duration-300 ${(mediaOpen) ? ("") : ("rotate-180")}`}/></li></Link>
            { (mediaOpen) &&
              <>
              <Link onClick={() => resetMenu()} to="/events"><li className={`${listItemStyle} bg-slate-200 w-[95%] mx-auto border-white rounded-b-[10px]`}>Upcoming Events</li></Link>
              <Link onClick={() => resetMenu()} to="https://www.linkedin.com/newsletters/the-remy-report-7293316723514974209/" target="_blank"><li className={`${listItemStyle} bg-slate-200 w-[90%] mx-auto border-white rounded-b-[10px]`}>News</li></Link>
              <div className="block bg-white h-[5px]"></div>
              </>
            } */}

            <Link onClick={() => {resetMenu(); document.getElementById('contact-form-modal').showModal()}}><li className={`${listItemStyle} !text-slate-900 bg-wdorange`}>Contact Us</li></Link>
            <Link onClick={() => resetMenu()} to="https://remy-arc.com/portal/" target="_blank" rel="noopener noreferrer"><li className={`${listItemStyle} text-white bg-wdblue`}>Remy ARC</li></Link>
          </ul>
          <div className={`h-[93%] bg-slate-400 bg-opacity-20 backdrop-blur-md transition-opacity duration-500 ${(active) ? ("opacity-100") : ("opacity-0")}`} onPointerDown={() => setActive(false)}></div>
        </div>
      </header>
      <div className="bg-white h-[7vh]"></div>
    </div>
  )
}