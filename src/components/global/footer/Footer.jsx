import { useLocation } from "react-router-dom"

import LogoDivider from "../dividers/LogoDivider"
import LogoDividerMobile from "../dividers/LogoDividerMobile"

export default function Footer() {

  const location = useLocation()

  return (
    <>
    <footer className="footer bg-slate-300 border-t-2 border-slate-300 text-base-content p-12 md:p-10 drop-shadow-[0_-2px_10px_rgba(0,0,0,.15)]">

      <div className="w-full max-w-8xl grid grid-cols-1 gap-8 md:gap-y-12 md:grid-cols-2 md:grid-flow-row md:mx-auto lg:grid-cols-4">
        <div className="col-span-1">
          <img
            className="w-auto h-[70px] md:h-[100px] md:p-2"
            src={
              (location.pathname === "/gsa-contract") ? (
                "images/general/logo/remy_federal.png"
              ) : (
                "images/general/logo/remy_logo.png"
              )
            }
          />
        </div>

        <div className="col-span-1">
          <h6 className="footer-title tracking-widest">Main Headquarters</h6>
          <p className="pl-2 md:pl-0 text-slate-800">
            1610 15th Street 2nd Floor <br/>
            Denver, CO. 80202 <br/>
            <a className="link link-primary" href="tel:3035750058">303.573.0058</a>
          </p>
        </div>

        <div className="col-span-1">
          <h6 className="footer-title tracking-widest">US Offices</h6>
          <div className="pl-2 md:pl-0 space-y-1 text-slate-800">
            <p>Philadelphia, PA</p>
            <p>Boston, MA</p>
            <p>Tampa, FL</p>
            <p>Kansas City, MO</p>
            <p>Dallas, TX</p>
          </div>
        </div>

        <div className="col-span-1">
          <h6 className="footer-title tracking-widest">Interantional Offices</h6>
          <div className="pl-2 md:pl-0 space-y-1 text-slate-800">
            <p>London, UK</p>
            <p>Hornsby, AS</p>
            <p>Prague, CZ</p>
            <p>Vancouver, BC</p>
          </div>
        </div>
      </div>

    </footer>
    </>
  )
}