import { useEffect } from "react"

import EventsHero from "./sub/EventsHero"



export default function EventsPage() {

  // Scroll to the top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="" >
      <EventsHero/>
      <div className="h-96 border-4 border-black"><p>Events</p></div>
    </div>
  )
}