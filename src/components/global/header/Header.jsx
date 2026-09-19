import { useState, useEffect } from "react"
import { Link, useNavigate, useLocation } from "react-router-dom"


export default function Header() {

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

  const navigate = useNavigate()

  const [aboutOpen, setAboutOpen] = useState(false)
  const [partnershipsOpen, setPartnershipsOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mediaOpen, setMediaOpen] = useState(false)

  const listItemStyle = "mx-1 font-bold"

  const openInNewTab = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const location = useLocation()

  return (
    <div id="header-desktop" className="hidden md:block">
      <header className="z-10 fixed w-full border-b-2 border-slate-300 shadow-md bg-black" >
        <nav className={`navbar p-4 bg-white transition-all duration-500 ${(scrollPosition < scrollRange) ? ("h-[10vh]") : ("h-[7vh]")}`}>
          <div className="flex-1">
            <Link to="/#services" className={`btn btn-ghost hover:translate-x-1 transition-all duration-500 ${(scrollPosition < scrollRange) ? ("h-[4rem]") : ("h-[3rem] -translate-x-4")}`}>
              <img 
                className="h-full p-1"
                src={
                  (location.pathname === "/gsa-contract") ? (
                    "images/general/logo/remy_federal.png"
                  ) : (
                    "images/general/logo/remy_logo.png"
                  )
                }
              />
            </Link>
          </div>
          <div className="flex-none">
            <ul className={`items-center transition-all duration-500 menu menu-horizontal text-wdblue ${(scrollPosition < scrollRange) ? ("px-2") : ("px-0")}`}>

              {/* ABOUT DROPDOWN */}
              <li className={listItemStyle}>
                <details id="about-nav" className={`transition-transform duration-100 ${(aboutOpen) ? ("translate-y-1") : ("")}`} open={aboutOpen} onMouseEnter={() => setAboutOpen(true)} onMouseLeave={() => setAboutOpen(false)}>
                  <summary className={`transition-transform duration-100 rounded-bl-none ${(aboutOpen) ? ("bg-base-100") : ("")}`} onClick={() => navigate("./#about")} >About</summary>

                  <ul className="bg-base-100 w-[130px] -translate-y-4 rounded-tl-none">
                    {/* <li className="m-1"><Link to="/#commitment" className="sub-category">Our Commitment</Link></li> */}
                    <li className="m-1"><Link to="/#industries" className="sub-category">Industries</Link></li>
                    <li className="m-1"><Link to="https://www.linkedin.com/newsletters/the-remy-report-7293316723514974209/" target="_blank" className="sub-category">News</Link></li>
                    <li className="m-1 text-black bg-wdorange/75 rounded-lg drop-shadow-sm"><Link onClick={(e) => {e.preventDefault(); document.getElementById('contact-form-modal').showModal()}} className="sub-category">Contact Us</Link></li>
                  </ul>
                </details>
              </li>

              {/* PARTNERSHIPS DROPDOWN */}
              <li className={listItemStyle}>
                <details id="partnerships-nav" className={`transition-transform duration-100 ${(partnershipsOpen) ? ("translate-y-1") : ("")}`} open={partnershipsOpen} onMouseEnter={() => setPartnershipsOpen(true)} onMouseLeave={() => setPartnershipsOpen(false)}>
                  <summary className={`transition-colors duration-100 rounded-bl-none ${(partnershipsOpen) ? ("bg-base-100") : ("")}`} onClick={() => navigate("./#partnerships")}>Partnerships</summary>

                  <ul className="bg-base-100 w-[232px] -translate-y-4 rounded-tl-none">
                    <li className="m-1"><Link to="/workday-services-partner" className="sub-category">Workday Services Partner</Link></li>
                    {/* <li className="m-1"><Link to="/oracle-gold-partner" className="sub-category">Oracle Gold Partner</Link></li> */}
                    <li className="m-1"><Link to="/gsa-contract" className="sub-category">GSA Contract</Link></li>
                    {/* <li className="m-1"><Link to="/service-now" className="sub-category">ServiceNow</Link></li> */}
                  </ul>
                </details>
              </li>

              {/* SERVICES DROPDOWN */}
              <li className={listItemStyle}><Link onClick={() => handleClick()} to="/services" className="sub-category">Services</Link></li>
              {/* <li className={listItemStyle}>
                <details id="services-nav" className={`transition-transform duration-100 ${(servicesOpen) ? ("translate-y-1") : ("")}`} open={servicesOpen} onMouseLeave={() => setServicesOpen(false)}>
                  <summary className={`transition-transform transition-colors duration-100 rounded-bl-none ${(servicesOpen) ? ("bg-base-100") : ("")}`} onClick={() => navigate("#services")} onMouseEnter={() => setServicesOpen(true)}>Services</summary>

                  <ul className="bg-base-100 w-[207px] -translate-y-4 rounded-tl-none">
                    <li className="m-1"><Link to="/workforce-solutions" className="sub-category">Workforce Solutions</Link></li>
                    <li className="m-1"><Link to="/technology-consulting" className="sub-category">Technology Consulting</Link></li>
                    <li className="m-1"><Link to="/managed-operations" className="sub-category">Managed Operations</Link></li>
                  </ul>
                </details>
              </li> */}

              {/* MEDIA DROPDOWN */}
              {/* <li className={listItemStyle}>
                <details id="partnerships-nav" className={`transition-transform duration-100 ${(mediaOpen) ? ("translate-y-1") : ("")}`} open={mediaOpen} onMouseLeave={() => setMediaOpen(false)}>
                  <summary className={`transition-colors duration-100 rounded-bl-none ${(mediaOpen) ? ("bg-base-100") : ("")}`} onClick={() => navigate("./#media")} onMouseEnter={() => setMediaOpen(true)}>Media</summary>

                  <ul className="bg-base-100 w-[175px] -translate-y-4 rounded-tl-none">
                    <li className="m-1"><Link to="/events" className="sub-category">Upcoming Events</Link></li>
                    <li className="m-1"><Link to="https://www.linkedin.com/newsletters/the-remy-report-7293316723514974209/" target="_blank" className="sub-category">News</Link></li>
                  </ul>
                </details>
              </li> */}

              <div className="ml-3 grid grid-cols-1">
                <button className="btn btn-sm btn-secondary !text-black hover:btn-primary hover:!text-white" onClick={() => {document.getElementById('contact-form-modal').showModal(); resetNav()}}>Contact Us</button>
              </div>
              <div className="ml-4 grid grid-cols-1">
                <button className="btn btn-sm btn-primary text-white hover:btn-secondary" onClick={() => {openInNewTab("https://remy-arc.com/portal/"); resetNav()}}>Remy ARC</button>
              </div>              
            </ul>
          </div>
        </nav>
      </header>

      {/* The following div is to ensure that none of the page content slides underneath the header when the user is at the top of the page, since the header element is 'fixed' and is therefore removed from the normal flow of content. This div has the same exact relevant CSS classes so that it shrinks/grows at the same rate as the header on top of it. */}

      <div className={`transition-all duration-500 ${(scrollPosition < scrollRange) ? ("h-[10vh]") : ("h-[7vh]")}`} />
    </div>
    
  )
}