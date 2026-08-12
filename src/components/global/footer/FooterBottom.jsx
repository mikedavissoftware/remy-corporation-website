import { NavLink } from "react-router-dom"
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


export default function FooterBottom() {

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bottom-footer" >
      <ul className="flex md:justify-end space-x-6 px-8 md:px-20 py-3 bg-slate-800 text-slate-400 text-xs font-bold">
        <li className="transition-all duration-400 hover:text-slate-300"><NavLink to="/privacy-policy">Privacy Policy</NavLink></li>
        <li className="transition-all duration-400 hover:text-slate-300"><NavLink to="/terms-and-conditions">Teams and Conditions</NavLink></li>
      </ul>
      <div className="flex justify-between px-8 md:px-20 py-4 bg-black text-white text-xs">
        {/* <div></div> */}
        <div><span>© {currentYear} Remy Corporation</span></div>
        <div className="flex space-x-6">
          <a href="https://www.facebook.com/remycorp4u" target="_blank">
            <FaFacebookF className="h-4 transition-all duration-150 hover:scale-125 hover:opacity-80" />
          </a>
          <a href="https://x.com/RemyCorp" target="_blank">
            <FaXTwitter className="h-4 scale-[150%] transition-all duration-150 hover:scale-[185%] hover:opacity-80" />
          </a>
        </div>
      </div>
    </footer>
  )
}