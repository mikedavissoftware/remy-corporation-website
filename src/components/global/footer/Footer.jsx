



export default function Footer() {



  return (
    <footer className="footer grid grid-cols-1 gap-y-8 gap-x-8 md:grid-cols-2 md:gap-y-6 md:mx-auto lg:grid-cols-3 bg-slate-300 border-t-2 border-slate-300 text-base-content pt-10 px-10 pb-10 drop-shadow-[0_-2px_10px_rgba(0,0,0,.15)]">
      <div>
        <img className="w-auto h-[70px] md:h-[100px] md:p-2" src="images/header/remy_logo.png" />
      </div>
      <div>
        <h6 className="footer-title">Main Headquarters</h6>
        <p>
          1610 15th Street 2nd Floor <br/>
          Denver, CO. 80202 <br/>
          <a className="link link-primary" href="tel:3035750058">303.573.0058</a>
        </p>
      </div>
      <div>
        <h6 className="footer-title">Regional Offices</h6>
        <p>Philadelphia, PA</p>
        <p>Boston, MA</p>
        <p>Tampa, FL</p>
        <p>Kansas City, MO</p>
        <p>Dallas, TX</p>
      </div>
    </footer>
  )
}