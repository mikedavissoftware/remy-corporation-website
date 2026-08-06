import { useEffect } from "react"

import FAQHero from "./sub/FAQHero"



export default function FAQPage() {

  // Scroll to the top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="" >
      <FAQHero/>
      <div className="h-96 border-4 border-black"><p>FAQ</p></div>
    </div>
  )
}