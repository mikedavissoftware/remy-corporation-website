
import GSABanner from './sub/GSABanner'
import MultipleAwardSchedule from './sub/MultipleAwardSchedule'
import WhatGSAMeans from './sub/WhatGSAMeans'
import BuildOnDecades from './sub/BuildOnDecades'
import ContractInfo from './sub/ContractInfo'

export default function GSAPage() {



  return (
    <div className="overflow-hidden" >
      <GSABanner />
      <MultipleAwardSchedule />
      <WhatGSAMeans />
      <BuildOnDecades />
      <ContractInfo />      
    </div>
  )
}