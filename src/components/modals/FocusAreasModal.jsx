import { useContext, useState, useEffect } from "react"

import { GlobalContext } from "../../App"

import { focusAreas } from "../../../db/focus-areas"


export default function FocusAreasModal() {

  const { currentModal, setCurrentModal } = useContext(GlobalContext)

  const [industry, setIndustry] = useState("")
  const [description, setDescription] = useState("")

  useEffect(() => {
    if (currentModal) {
      const focusArea = focusAreas.find((focusArea) => {
        return focusArea.cssid == currentModal
      })
      console.log(focusArea)
      setIndustry(focusArea.industry)
      setDescription(focusArea.description)
    }
  }, [currentModal])


  return (
    <dialog id={`focus-areas-modal`} className="modal" >
      <div className="absolute h-full w-full" onClick={()=>{document.getElementById(`focus-areas-modal`).close(); setCurrentModal("")}}></div>
      <div style={{backgroundImage: `url(public/images/industries/${currentModal}.jpg)`}} className={`modal-box p-8 bg-center bg-cover bg-opacity-85 bg-blend-lighten`}>
        <h3 className="text-center font-bold text-2xl mb-4">
          {industry}
        </h3>
        <p>
          {description}
        </p>
      </div>
    </dialog>
  )
}