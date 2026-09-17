import { useEffect } from "react"

import ServicesBanner from "./sub/ServicesBanner"
import FloatingList from "./sub/FloatingList"
import WhyRemy from "./sub/WhyRemy"
import KPIVideoDisplay from "./sub/KPIVideoDisplay"
import TechConsulting from "./sub/TechConsulting"

export default function ServicesPage() {

  // Scroll to the top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="" >
      <ServicesBanner />
      <FloatingList />
      <WhyRemy />
      <KPIVideoDisplay />
      <TechConsulting />
    </div>
  )
}