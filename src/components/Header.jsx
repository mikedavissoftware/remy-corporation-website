import { useState } from "react"
import { NavLink, useMatch } from "react-router-dom"


export default function Header() {

  return (
    <header className="block border-b-2 border-slate-300 shadow-md" >
      <nav className="navbar bg-white">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li className="nav-reg mx-1"><NavLink to="/" >Home</NavLink></li>
            <li className="mx-1">
              <details>
                <summary>About</summary>
                <ul className="bg-base-100 rounded-t-none p-2">
                  <li className="my-1"><NavLink to="/#about">About Us</NavLink></li>
                  <li className="my-1"><NavLink to="/#focus">Focus</NavLink></li>
                  <li className="my-1"><NavLink to="/#partnerships">Partnerships</NavLink></li>
                </ul>
              </details>
            </li>
            <li className="nav-reg mx-1"><NavLink to="/services" >Services</NavLink></li>
            <li className="nav-reg mx-1"><NavLink to="/blog" >Blog</NavLink></li>
            <li className="nav-reg mx-1"><NavLink to="/events" >Events</NavLink></li>
            <li className="nav-reg mx-1"><NavLink to="/contact" >Contact</NavLink></li>
            <li className="nav-reg mx-1"><NavLink to="/faq" >FAQ</NavLink></li>
            <li className="nav-reg mx-1"><NavLink to="/help" >Help</NavLink></li>
          </ul>
        </div>
      </nav>
    </header>
  )
}