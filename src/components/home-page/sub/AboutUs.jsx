



export default function AboutUs() {



  return (
    <div className="p-16 pl-0">
      <div>
        <h1 className="text-center text-5xl font-semibold tracking-wide">About Us</h1>
        
      </div>
      <hr className="border border-secondary rounded-sm border-black mx-auto my-8 w-16"></hr>
      <div className="grid grid-cols-5 space-x-8" >
        <div className="col-start-1 col-span-2 overflow-visible place-items-end">
          <img src="images/home/home-about-image.png" className="max-h-[500px]"/>
        </div>
        <div className="col-start-3 col-span-3 prose">
          <p>
            Remy Corporation is a privately held staffing and consulting agency, providing top talent to leading organizations nationwide. Founded in 1999, Remy has grown to become one of the most competitive IT staffing firms in the United States by focusing on three key principles: Value, Execution and Utilization.
          </p>
          <p>
            The Remy Corporation specializes in recruiting Information Technology Professionals across all industries and all positions. Certified partnerships with Oracle and Workday, Remy supports startups to large enterprises in emerging technologies, Oracle and Workday resources, as well as executive search, consulting, project financing, and payrolling services.</p>
        </div>
      </div>
    </div>
  )
}