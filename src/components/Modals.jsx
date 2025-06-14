

import ContactFormModal from "./modals/ContactFormModal"
import HigherEducationModal from "./modals/HigherEducationModal"


export default function Modals() {



  return (
    <div className="absolute h-full w-full" >
      <ContactFormModal />

      <HigherEducationModal />
    </div>
  )
}