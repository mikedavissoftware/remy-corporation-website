

import HamMenu from "../assets/svg/ham-menu.svg"
import HamMenuClose from "../assets/svg/ham-menu-close.svg"

export default function HeaderMobile() {



  return (
    <div id="header-mobile" className="block md:hidden" >
      <header className="z-10 fixed w-full border-b-2 border-slate-300 shadow-md bg-black">
        <nav className="navbar p-4 bg-white">
          <div>
            <img src={HamMenu} />
          </div>
        </nav>
      </header>
    </div>
  )
}