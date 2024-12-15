import { useState } from "react"
import { NavLink, useMatch } from "react-router-dom"


export default function Header() {

  const [isOpen, setIsOpen] = useState(false)

  function closeDetails() {
    setIsOpen(false)
    console.log(isOpen)
  }

  return (
    <header className="block border-b-2 border-slate-300 shadow-md" >
      <nav className="navbar bg-white">
        <div className="flex-1">
          <a onClick={closeDetails} className="btn btn-ghost text-xl"><img className="h-full" src="images/header/remy_logo.png" /></a>
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
            <li className="nav-reg mx-1"><NavLink onClick={closeDetails} to="/contact" >Contact</NavLink></li>
            <li className="nav-reg mx-1"><NavLink onClick={closeDetails} to="/faq" >FAQ</NavLink></li>
            <li className="nav-reg mx-1"><NavLink onClick={closeDetails} to="/help" >Help</NavLink></li>
          </ul>
        </div>
      </nav>
    </header>
  )
}