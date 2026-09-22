import { useEffect } from "react"

import ServicesBanner from "./sub/ServicesBanner"
import FloatingList from "./sub/FloatingList"
import WhyRemy from "./sub/WhyRemy"
import KPIVideoDisplay from "./sub/KPIVideoDisplay"
import TechConsulting from "./sub/TechConsulting"
import ManagedOperations from "./sub/ManagedOperations"
import MoveBizForward from "./sub/MoveBizForward"

import NavAnchor from "../../global/NavAnchor"
import LogoDivider from "../../global/dividers/LogoDivider"
import LogoDividerMobile from "../../global/dividers/LogoDividerMobile"

export default function ServicesPage() {

  // Scroll to the top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="overflow-hidden" >
      <NavAnchor height={10} id={"top"}/>
      
      <ServicesBanner />
      <FloatingList />
      <WhyRemy />
      <KPIVideoDisplay />
      <TechConsulting />

      <LogoDivider topColor={"e2e8f0"} bottomColor={"eeedec"} />
      <LogoDividerMobile topColor={"e2e8f0"} bottomColor={"eeedec"} />

      <ManagedOperations />
      <MoveBizForward />
    </div>
  )
}