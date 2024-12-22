import { useEffect } from "react"



export default function ServicesPage() {

  // Scroll to the top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="" >
      <div className="h-96 border-4 border-black"><p>Services</p></div>
    </div>
  )
}