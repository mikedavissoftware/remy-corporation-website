
import parse from "html-react-parser"

export default function CaseStudyNEW({ fileName, htmlText }) {



  return (
    <div className="grid grid-cols-1 gap-16 items-center max-w-6xl mx-auto sm:grid-cols-2 md:-auto lg:grid-cols-3 sm:h-96 p-8 pb-16 sm:px-0">
      <div className="col-span-1">
        <img src={`images/general/partners/${fileName}`} className="drop-shadow-lg" />
      </div>
      <div className="col-span-2">
        <p>{parse(htmlText)}</p>
      </div>
    </div>
    // <div className={`partnership-container hero h-[90vh] bg-opacity-55 bg-center`}>
    //   <div className="hero-overlay bg-opacity-40"></div>
    //   <div className="hero-content text-white py-24">
    //     <div className="my-auto mx-4 max-w-4xl space-y-5">
    //       <h1 className="text-6xl font-bold drop-shadow-medium2 animate slide-left delay-1">{offering.main}</h1>
    //       <p className="drop-shadow-dark2 font-semibold text-lg animate fade delay-4">
    //         {offering.sub}
    //       </p>
    //       <button className="btn btn-primary text-xl" onClick={()=>document.getElementById('contact-form-modal').showModal()}>{offering.button}</button>
    //     </div>
    //   </div>
    // </div>
  )
}