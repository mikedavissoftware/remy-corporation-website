
import GSABanner from './sub/GSABanner'
import MultipleAwardSchedule from './sub/MultipleAwardSchedule'
import WhatGSAMeans from './sub/WhatGSAMeans'
import BuildOnDecades from './sub/BuildOnDecades'
import ContractInfo from './sub/ContractInfo'

// import NavAnchor from "../../global/NavAnchor"

export default function GSAPage() {



  return (
    <div className="overflow-hidden" >
      {/* <NavAnchor height={10} id={"top"}/> */}

      <GSABanner />
      <MultipleAwardSchedule />
      <WhatGSAMeans />
      <BuildOnDecades />
      <ContractInfo />      
    </div>
  )
}