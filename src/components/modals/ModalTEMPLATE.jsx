



export default function TEMPLATEModal() {

  const modalID = ""

  return (
    <dialog id={`${modalID}-modal`} className="modal" >
      <div className="absolute h-full w-full" onClick={()=>document.getElementById(`${modalID}-modal`).close()}></div>
      <div className={`modal-box p-8 bg-[url(images/industries/${modalID}.jpg)] bg-opacity-75 bg-blend-lighten`}>
        <h3 className="text-center font-bold text-2xl mb-4">
          Some Title
        </h3>
        <p>
          some text
        </p>
      </div>
    </dialog>
  )
}