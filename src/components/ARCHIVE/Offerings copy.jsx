



export default function Offerings() {



  return (
    <div className="px-8 py-16 bg-[radial-gradient(#ffffff,#DCDECD)] md:p-16" >
      <h1 className="text-center text-4xl font-semibold tracking-wide md:text-5xl">What We Offer</h1>

      <hr className="border border-[1.5px] border-wdblue rounded-sm mx-auto my-8 w-[6%] md:w-[3%]"/>

      <div className="grid gap-x-16 gap-y-8 max-w-4xl mx-auto md:grid-cols-2">
        <div className="">
          <h2 className="text-3xl mb-4">Contracts & Direct Hires</h2>
          <p className="prose-sm">
            Remy helps you hire professionals on a temporary, contractual, or permanent basis. We offer nationwide placement solutions for direct hire, contract or contract-to-hire, full-time placements, consulting services, and more. As a Workday partner, we also encourage our clients to find Workday professionals that fit their company's requirements.
          </p>
        </div>
        <div className="">
          <h2 className="text-3xl mb-4">Payroll & Invoicing</h2>
          <p className="prose-sm">
            Remy Corporation is a one stop shop for all your staffing and consulting needs. We provide payrolling services, especially to Workday clients, for both W2 and 1099 contractors. Our prices are competitive, and experience is unparalleled.
          </p>
        </div>
        <div>
          <h2 className="text-3xl mb-4">Decades of Experience</h2>
          <p className="prose-sm">
            Remy Corporation's technology-savvy recruiters have mastered the process of finding your most optimal resource. From coast to coast, we have placed thousands of candidates and we thoroughly committed to meeting all our client's needs.
          </p>
        </div>
        <div>
          <h2 className="text-3xl mb-4">Extensive Database</h2>
          <p className="prose-sm">
            Since 1999, Remy has built its talent pool, scouting of skilled IT and Workday candidates professionals across all industries. Thus, our extensive database of more than 30,000 connections allows us to help our clients find quality talent that match their requirements.
          </p>
        </div>
      </div>

      <hr className="border border-[1px] border-wdblue rounded-sm mx-auto my-12 w-[12%]"/>

      <iframe className="mx-auto mb-8 h-36 w-64 sm:h-[315px] sm:w-[560px]" src="https://www.youtube.com/embed/Yn11n_dCBk8?si=vg8qqYx3zmwX1p1O" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
  )
}