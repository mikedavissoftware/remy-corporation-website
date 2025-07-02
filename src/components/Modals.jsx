

import ContactFormModal from "./modals/ContactFormModal"

import FocusAreasModal from "./modals/FocusAreasModal"

import AerospaceDefenseModal from "./modals/obsolete/AerospaceDefenseModal"
import CyberITModal from "./modals/obsolete/CyberITModal"
import FinancialServicesModal from "./modals/obsolete/FinancialServicesModal"
import HealthcareModal from "./modals/obsolete/HealthcareModal"
import HigherEducationModal from "./modals/obsolete/HigherEducationModal"
import PublicSectorModal from "./modals/obsolete/PublicSectorModal"
import RetailHospitalityModal from "./modals/obsolete/RetailHospitalityModal"


export default function Modals() {



  return (
    <div className="absolute h-full w-full" >
      <ContactFormModal />

      <FocusAreasModal />

      {/* <AerospaceDefenseModal />
      <CyberITModal />
      <FinancialServicesModal />
      <HealthcareModal />
      <HigherEducationModal />
      <PublicSectorModal />
      <RetailHospitalityModal /> */}
    </div>
  )
}