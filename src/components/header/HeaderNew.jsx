import { useState, useEffect } from "react"
import { NavLink } from "react-router-dom"


export default function HeaderNew({ setContactOpen }) {

  const [aboutIsOpen, setAboutIsOpen] = useState(false)
  const [remyPortalIsOpen, setRemyPortalIsOpen] = useState(false)

  // SCROLL-BASED HEIGHT CHANGE //
  const [scrollPosition, setScrollPosition] = useState(0)
  const scrollRange = 40

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition((position));
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = () => {
    console.log("activated")
    setAboutIsOpen(false)
    setRemyPortalIsOpen(false)
    window.scrollTo(0, 0)
  }

  return (
    <div id="header-desktop" className="hidden md:block">
      <header className="z-10 fixed w-full border-b-2 border-slate-300 shadow-md bg-black" >
        <nav className={`navbar p-4 bg-white transition-all duration-500 ${(scrollPosition < scrollRange) ? ("h-[6rem]") : ("h-[4rem]")}`}>
          <div className="flex-1">
            <a onClick={handleClick} className={`btn btn-ghost transition-all duration-500 ${(scrollPosition < scrollRange) ? ("h-[4rem]") : ("h-[3rem]")}`}><img className="h-full p-1" src="images/header/remy_logo.png" /></a>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
              <li className="mx-1"><NavLink onClick={() => handleClick()} to="/" >Home</NavLink></li>
              <li className="mx-1">
                <details open={aboutIsOpen} onToggle={(e) => {setAboutIsOpen(e.target.open)}} onClick={() => {setRemyPortalIsOpen(false)}}>
                  <summary>About</summary>
                  <ul className="bg-base-100 rounded-t-none">
                    <li className="my-1"><NavLink onClick={() => setAboutIsOpen(false)} to="/#about" className="sub-category">About Us</NavLink></li>
                    <li className="my-1"><NavLink onClick={() => setAboutIsOpen(false)} to="/#offerings" className="sub-category">Offerings</NavLink></li>
                    <li className="my-1"><NavLink onClick={() => setAboutIsOpen(false)} to="/#focus-areas" className="sub-category">Focus Areas</NavLink></li>
                    <li className="my-1"><NavLink onClick={() => setAboutIsOpen(false)} to="/#partnerships" className="sub-category">Partnerships</NavLink></li>
                  </ul>
                </details>
              </li>
              <li className="mx-1"><NavLink onClick={() => handleClick()} to="/services" >Services</NavLink></li>
              <li className="mx-1"><NavLink onClick={() => handleClick()} to="/blog" >Blog</NavLink></li>
              <li className="mx-1"><NavLink onClick={() => handleClick()} to="/events" >Events</NavLink></li>
              <li className="mx-1">
                <details open={remyPortalIsOpen} onToggle={(e) => {setRemyPortalIsOpen(e.target.open)}} onClick={() => {setAboutIsOpen(false)}}>
                  <summary>Remy Portal</summary>
                  <ul className="bg-base-100 rounded-t-none">
                    <li className="my-1"><NavLink onClick={() => setRemyPortalIsOpen(false)} to="/faq" >FAQ</NavLink></li>
                    <li className="my-1"><NavLink onClick={() => setRemyPortalIsOpen(false)} to="/help" >Help</NavLink></li>
                    <li className="my-1"><NavLink onClick={() => setRemyPortalIsOpen(false)} to="/login" className="sub-category">Login</NavLink></li>
                  </ul>
                </details>
              </li>

              <div className="ml-2 grid grid-cols-1 content-center">
                <button className="btn btn-contact btn-secondary hover:btn-info" onClick={()=>document.getElementById('contact-form-modal').showModal()}>Contact Us</button>
              </div>
              
            </ul>
          </div>
        </nav>
        <div className={`bg-white transition-all duration-300 ${(remyPortalIsOpen || aboutIsOpen) ? ("h-[10rem]") : ("h-[0rem]")}`}></div>
      </header>

      {/* The following div is to ensure that none of the page content slides underneath the header when the user is at the top of the page, since the header element is 'fixed' and is therefore removed from the normal flow of content. This div has the same exact relevant CSS classes so that it shrinks/grows at the same rate as the header on top of it. */}

      <div className={`transition-all duration-500 ${(scrollPosition < scrollRange) ? ("h-[6rem]") : ("h-[4rem]")}`} />
    </div>
    
  )
}