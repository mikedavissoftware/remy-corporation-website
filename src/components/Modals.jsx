

import ContactFormModal from "./modals/ContactFormModal"

import FocusAreasModal from "./modals/FocusAreasModal"

import AerospaceDefenseModal from "./modals/AerospaceDefenseModal"
import CyberITModal from "./modals/CyberITModal"
import FinancialServicesModal from "./modals/FinancialServicesModal"
import HealthcareModal from "./modals/HealthcareModal"
import HigherEducationModal from "./modals/HigherEducationModal"
import PublicSectorModal from "./modals/PublicSectorModal"
import RetailHospitalityModal from "./modals/RetailHospitalityModal"


export default function Modals() {



  return (
    <div className="absolute h-full w-full" >
      <ContactFormModal />

      {/* <FocusAreasModal /> */}

      <AerospaceDefenseModal />
      <CyberITModal />
      <FinancialServicesModal />
      <HealthcareModal />
      <HigherEducationModal />
      <PublicSectorModal />
      <RetailHospitalityModal />
    </div>
  )
}