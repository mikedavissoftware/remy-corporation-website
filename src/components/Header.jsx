import { useState, useEffect } from "react"
import { NavLink, useMatch } from "react-router-dom"


export default function Header() {

  const [isOpen, setIsOpen] = useState(false)


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

  return (
    <div id="header">
      <header className="z-10 fixed w-full border-b-2 border-slate-300 shadow-md bg-black" >
        <nav className={`navbar p-4 bg-white transition-all duration-500 ${(scrollPosition < scrollRange) ? ("h-[6rem]") : ("h-[4rem]")}`}>
          <div className="flex-1">
            <a onClick={() => setIsOpen(false)} className={`btn btn-ghost transition-all duration-500 ${(scrollPosition < scrollRange) ? ("h-[4rem]") : ("h-[3rem]")}`}><img className="h-full p-1" src="images/header/remy_logo.png" /></a>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
              <li className="mx-1"><NavLink onClick={() => setIsOpen(false)} to="/" >Home</NavLink></li>
              <li className="mx-1">
                <details open={isOpen} onToggle={(e) => setIsOpen(e.target.open)}>
                  <summary>About</summary>
                  <ul className="bg-base-100 rounded-t-none">
                    <li className="my-1"><NavLink onClick={() => setIsOpen(false)} to="/#about" className="sub-category">About Us</NavLink></li>
                    <li className="my-1"><NavLink onClick={() => setIsOpen(false)} to="/#focus" className="sub-category">Focus</NavLink></li>
                    <li className="my-1"><NavLink onClick={() => setIsOpen(false)} to="/#partnerships" className="sub-category">Partnerships</NavLink></li>
                  </ul>
                </details>
              </li>
              <li className="mx-1"><NavLink onClick={() => setIsOpen(false)} to="/services" >Services</NavLink></li>
              <li className="mx-1"><NavLink onClick={() => setIsOpen(false)} to="/blog" >Blog</NavLink></li>
              <li className="mx-1"><NavLink onClick={() => setIsOpen(false)} to="/events" >Events</NavLink></li>
              <li className="mx-1"><NavLink onClick={() => setIsOpen(false)} to="/faq" >FAQ</NavLink></li>
              <li className="mx-1"><NavLink onClick={() => setIsOpen(false)} to="/help" >Help</NavLink></li>

              <div className="ml-2 grid grid-cols-1 content-center">
                <button className="btn btn-sm btn-secondary hover:btn-info"onClick={()=>document.getElementById('contact-form-modal').showModal()}>Contact Us</button>
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