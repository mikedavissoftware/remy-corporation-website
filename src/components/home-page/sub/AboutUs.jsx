



export default function AboutUs() {



  return (
    <div className="bg-[url(images/general/bg-logo.jpg)] bg-cover bg-center bg-no-repeat">
      
      <div className="p-16 pl-0 bg-white bg-opacity-65">
        <div>
          <h1 className="text-center text-5xl font-semibold tracking-wide">About Us</h1>
        </div>
        <hr className="border border-[1.5px] border-wdorange rounded-sm mx-auto my-8 w-[3%]"/>
        <div className="grid grid-cols-5 gap-x-16 max-w-5xl mx-auto" >
          <div className="col-start-1 col-span-2 overflow-visible place-items-end ml-[-40px]">
            <img src="images/home/home-about-image.png" className=""/>
          </div>
          <div className="col-start-3 col-span-3 prose-sm">
            <p>
              Remy Corporation is a privately held staffing and consulting agency, providing top talent to leading organizations nationwide. Founded in 1999, Remy has grown to become one of the most competitive IT staffing firms in the United States by focusing on three key principles: Value, Execution and Utilization.
            </p>
            <p>
              The Remy Corporation specializes in recruiting Information Technology Professionals across all industries and all positions. Certified partnerships with Oracle and Workday, Remy supports startups to large enterprises in emerging technologies, Oracle and Workday resources, as well as executive search, consulting, project financing, and payrolling services.
            </p>
            <h4><a href="" className="link text-slate-500 hover:text-orred transition-all duration-200">Oracle Certified Partner</a> | <a href="" className="link text-wdblue hover:text-wdorange transition-all duration-200">Workday Certified Partner</a></h4>
            <img src="images/general/partners/workday-services-partner.png" className="mt-6 max-h-20"/>
          </div>
        </div>
      </div>
      
    </div>
  )
}