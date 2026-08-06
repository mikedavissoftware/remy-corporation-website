import { useState, useEffect } from "react"
import { NavLink, Link } from "react-router-dom"


export default function Header({ setContactOpen }) {

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
  //

  const handleClick = () => {
    console.log("activated")
    setAboutIsOpen(false)
    setRemyPortalIsOpen(false)
    window.scrollTo(0, 0)
  }

  const listItemStyle = "mx-1 font-bold"

  const openInNewTab = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div id="header-desktop" className="hidden md:block">
      <header className="z-10 fixed w-full border-b-2 border-slate-300 shadow-md bg-black" >
        <nav className={`navbar p-4 bg-white transition-all duration-500 ${(scrollPosition < scrollRange) ? ("h-[6rem]") : ("h-[4rem]")}`}>
          <div className="flex-1">
            <a onClick={handleClick} className={`btn btn-ghost transition-all duration-500 ${(scrollPosition < scrollRange) ? ("h-[4rem]") : ("h-[3rem]")}`}><img className="h-full p-1" src="images/header/remy_logo.png" /></a>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1 text-wdblue">
              <li className={listItemStyle}><Link onClick={() => handleClick()} to="/#services" className="sub-category">Services</Link></li>
              <li className={listItemStyle}><Link onClick={() => handleClick()} to="/#focus-areas" className="sub-category">Focus Areas</Link></li>
              <li className={listItemStyle}><Link onClick={() => handleClick()} to="/#about" className="sub-category">About</Link></li>
              <li className={listItemStyle}><Link onClick={() => handleClick()} to="/#partnerships" className="sub-category">Partnerships</Link></li>
              <div className="ml-2 grid grid-cols-1 content-center">
                <button className="btn btn-contact btn-secondary hover:btn-info" onClick={()=>document.getElementById('contact-form-modal').showModal()}>Contact Us</button>
              </div>
              <div className="ml-2 grid grid-cols-1 content-center">
                <button className="btn btn-contact btn-primary hover:btn-secondary" onClick={() => openInNewTab("https://remy-arc.com/portal/")}>Remy ARC</button>
              </div>              
            </ul>
          </div>
        </nav>
      </header>

      {/* The following div is to ensure that none of the page content slides underneath the header when the user is at the top of the page, since the header element is 'fixed' and is therefore removed from the normal flow of content. This div has the same exact relevant CSS classes so that it shrinks/grows at the same rate as the header on top of it. */}

      <div className={`transition-all duration-500 ${(scrollPosition < scrollRange) ? ("h-[6rem]") : ("h-[4rem]")}`} />
    </div>
    
  )
}