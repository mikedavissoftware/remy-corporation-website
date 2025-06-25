



export default function RetailHospitalityModal() {

  const modalID = "retail-hospitality"

  return (
    <dialog id={`${modalID}-modal`} className="modal" >
      <div className="absolute h-full w-full" onClick={()=>document.getElementById(`${modalID}-modal`).close()}></div>
      <div className={`modal-box p-8 bg-[url(images/industries/${modalID}.jpg)] bg-opacity-85 bg-blend-lighten`}>
        <h3 className="text-center font-bold text-2xl mb-4">
          Retail & Hospitality
        </h3>
        <p>
          In environments where customer expectations shift by the hour, Remy's consultants bring both operational savvy and digital acumen. From optimizing inventory planning algorithms for peak-season surges to crafting responsive e-commerce sites integrated with loyalty-program APIs, we adapt our consultants' skill sets to your brand's pace and culture. We begin every partnership by mapping your guest journey from booking to check-out identifying friction points and deploying solutions that elevate satisfaction and repeat business. Whether it's deploying advanced analytics to predict demand at each venue or creating mobile-friendly interfaces that let guests personalize their stay, our specialists ensure that technology enhances your service promise rather than distracts from it.
        </p>
      </div>
    </dialog>
  )
}