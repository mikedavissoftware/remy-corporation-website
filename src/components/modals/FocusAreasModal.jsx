import { useContext } from "react"

import { GlobalContext } from "../../App"

import { focusAreas } from "../../../db/focus-areas"


export default function FocusAreasModal() {

  const { currentModal, setCurrentModal } = useContext(GlobalContext)

  console.log(currentModal)

  console.log(focusAreas)

  let data = {
    cssid: "",
    industry: "",
    description: ""
  }

  data = () => {
    (currentModal) ? (
      focusAreas.find((focusArea) => {
        focusArea.cssid == currentModal
      })
    ) : (
      data
    )
  }

  console.log(data)

  return (
    <dialog id={`focus-areas-modal`} className="modal" >
      <div className="absolute h-full w-full" onClick={()=>{document.getElementById(`${data.cssid}-modal`).close(); setCurrentModal("")}}></div>
      <div className={`modal-box p-8 bg-[url(public/images/industries/${data.cssid}.jpg)] bg-opacity-85 bg-blend-lighten`}>
        <h3 className="text-center font-bold text-2xl mb-4">
          {data.industry}
        </h3>
        <p>
          {data.description}
        </p>
      </div>
    </dialog>
  )
}