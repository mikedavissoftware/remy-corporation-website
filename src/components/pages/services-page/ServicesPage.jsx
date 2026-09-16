import { useEffect } from "react"

import ServicesHero from "./sub/ServicesHero"
import ServicesBanner from "./sub/ServicesBanner"
import FloatingList from "./sub/FloatingList"

export default function ServicesPage() {

  // Scroll to the top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="" >
      <ServicesBanner />
      <FloatingList />
      <div className="h-96 border-4 border-black"><p>Services</p></div>
    </div>
  )
}