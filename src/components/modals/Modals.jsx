

import ContactFormModal from "./ContactFormModal"

import FocusAreasModal from "./FocusAreasModal"

import AerospaceDefenseModal from "./obsolete/AerospaceDefenseModal"
import CyberITModal from "./obsolete/CyberITModal"
import FinancialServicesModal from "./obsolete/FinancialServicesModal"
import HealthcareModal from "./obsolete/HealthcareModal"
import HigherEducationModal from "./obsolete/HigherEducationModal"
import PublicSectorModal from "./obsolete/PublicSectorModal"
import RetailHospitalityModal from "./obsolete/RetailHospitalityModal"


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