import { useState, useEffect } from "react"
import { NavLink, useMatch } from "react-router-dom"


export default function Header() {

  const [isOpen, setIsOpen] = useState(false)

  function closeDetails() {
    setIsOpen(false)
    console.log(isOpen)
  }

  const [scrollPosition, setScrollPosition] = useState(0)

  const scrollRange = 300

  const handleScroll = () => {
    const position = window.scrollY;
    console.log(position)
    setScrollPosition((position)); // the "- XXX" is for setting the start position of the header appearance further down
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="block fixed w-full border-b-2 border-slate-300 shadow-md" >
      <nav className={`navbar p-4 bg-white transition-all duration-500 ${(scrollPosition < 40) ? ("h-[6rem]") : ("h-[4rem]")}`}>
        <div className="flex-1">
          <a onClick={closeDetails} className={`btn btn-ghost transition-all duration-500 ${(scrollPosition < 40) ? ("h-[4rem]") : ("h-[3rem]")}`}><img className="h-full p-1" src="images/header/remy_logo.png" /></a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li className="nav-reg mx-1"><NavLink to="/" >Home</NavLink></li>
            <li className="mx-1">
              <details open={isOpen}>
                <summary>About</summary>
                <ul className="bg-base-100 rounded-t-none p-2">
                  <li className="my-1"><NavLink onClick={closeDetails} to="/#about" className="sub-category">About Us</NavLink></li>
                  <li className="my-1"><NavLink onClick={closeDetails} to="/#focus" className="sub-category">Focus</NavLink></li>
                  <li className="my-1"><NavLink onClick={closeDetails} to="/#partnerships" className="sub-category">Partnerships</NavLink></li>
                </ul>
              </details>
            </li>
            <li className="nav-reg mx-1"><NavLink onClick={closeDetails} to="/services" >Services</NavLink></li>
            <li className="nav-reg mx-1"><NavLink onClick={closeDetails} to="/blog" >Blog</NavLink></li>
            <li className="nav-reg mx-1"><NavLink onClick={closeDetails} to="/events" >Events</NavLink></li>
            <li className="nav-reg mx-1"><NavLink onClick={closeDetails} to="/faq" >FAQ</NavLink></li>
            <li className="nav-reg mx-1"><NavLink onClick={closeDetails} to="/help" >Help</NavLink></li>

            <div className="grid grid-cols-1 content-center">
              <button className="btn btn-sm btn-primary"onClick={()=>document.getElementById('contact-form-modal').showModal()}>Contact Us</button>
            </div>
            
          </ul>
        </div>
      </nav>
    </header>
  )
}