import { useEffect } from "react"

import HelpHero from "./sub/HelpHero"

export default function HelpPage() {

  // Scroll to the top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="" >
      <HelpHero/>
      <div className="h-96 border-4 border-black"><p>Help</p></div>
    </div>
  )
}