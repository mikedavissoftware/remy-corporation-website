import { useState, useEffect } from "react"
import { NavLink, Link } from "react-router-dom"


export default function Header({ setContactOpen }) {

  const [partnershipsOpen, setPartnershipsOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

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

  const resetNav = () => {
    setPartnershipsOpen(false)
    setServicesOpen(false)
  }

  const toggleNav = (id, isOpen) => {
    
    // Only trigger state updates if the user is actually opening a menu
    

    if (id === "services-nav") {
      if (!isOpen) {
        setServicesOpen(false)
        return;
      }
      setServicesOpen(true);
      setPartnershipsOpen(false); // Closes partnerships safely
    }
    
    if (id === "partnerships-nav") {
      if (!isOpen) {
        setPartnershipsOpen(false)
        return;
      }
      setPartnershipsOpen(true);
      setServicesOpen(false); // Closes services safely
    }
  };

  const listItemStyle = "mx-1 font-bold"

  const openInNewTab = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div id="header-desktop" className="hidden md:block">
      <header className="z-10 fixed w-full border-b-2 border-slate-300 shadow-md bg-black" >
        <nav className={`navbar p-4 bg-white transition-all duration-500 ${(scrollPosition < scrollRange) ? ("h-[6rem]") : ("h-[4rem]")}`}>
          <div className="flex-1">
            <a onClick={() => resetNav()} href="/" className={`btn btn-ghost transition-all duration-500 ${(scrollPosition < scrollRange) ? ("h-[4rem]") : ("h-[3rem] -translate-x-4")}`}><img className="h-full p-1" src="images/header/remy_logo.png" /></a>
          </div>
          <div className="flex-none">
            <ul className={`transition-all duration-500 menu menu-horizontal text-wdblue ${(scrollPosition < scrollRange) ? ("px-2") : ("px-0")}`}>
              <li className={listItemStyle}><Link onClick={() => resetNav()} to="/#about" className="sub-category">About</Link></li>
              <li className={listItemStyle}><Link onClick={() => resetNav()} to="/#focus-areas" className="sub-category">Focus Areas</Link></li>
              <li className={listItemStyle}>
                <details id="services-nav" open={servicesOpen} onToggle={(e) => toggleNav(e.target.id, e.target.open)}>
                  <summary className={`transition-all duration-100 ${(servicesOpen) ? ("bg-base-100 rounded-b-none translate-y-1") : ("")}`}>Services</summary>
                  <ul className="bg-base-100 w-[210px] -translate-x-[104.7px] -translate-y-3 rounded-tr-none">
                    <li className="my-1"><Link onClick={() => resetNav()} to="/workforce-solutions" className="sub-category">Workforce Solutions</Link></li>
                    <li className="my-1"><Link onClick={() => resetNav()} to="/technology-consulting" className="sub-category">Technology Consulting</Link></li>
                    <li className="my-1"><Link onClick={() => resetNav()} to="/managed-operations" className="sub-category">Managed Operations</Link></li>
                  </ul>
                </details>
              </li>
              <li className={listItemStyle}>
                <details id="partnerships-nav" open={partnershipsOpen} onToggle={(e) => toggleNav(e.target.id, e.target.open)}>
                  <summary className={`transition-all duration-100 ${(partnershipsOpen) ? ("bg-base-100 rounded-b-none translate-y-1") : ("")}`}>Partnerships</summary>
                  <ul className="bg-base-100 w-[240px] -translate-y-3 rounded-tl-none">
                    <li className="my-1"><Link onClick={() => resetNav()} to="/workforce-solutions" className="sub-category">Workday Services Partner</Link></li>
                    <li className="my-1"><Link onClick={() => resetNav()} to="/technology-consulting" className="sub-category">Oracle Gold Partner</Link></li>
                    <li className="my-1"><Link onClick={() => resetNav()} to="/managed-operations" className="sub-category">GSA Contract</Link></li>
                  </ul>
                </details>
              </li>
              <div className="ml-3 grid grid-cols-1 content-center">
                <button className="btn btn-contact btn-secondary hover:btn-info" onClick={() => {document.getElementById('contact-form-modal').showModal(); resetNav()}}>Contact Us</button>
              </div>
              <div className="ml-4 grid grid-cols-1 content-center">
                <button className="btn btn-contact btn-primary hover:btn-secondary" onClick={() => {openInNewTab("https://remy-arc.com/portal/"); resetNav()}}>Remy ARC</button>
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