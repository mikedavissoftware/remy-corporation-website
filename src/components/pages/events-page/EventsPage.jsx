import { useEffect } from "react"

import WhereIdeas from "./sub/WhereIdeas"
import EventsHero from "./sub/EventsHero"

export default function EventsPage() {

  // Scroll to the top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="" >
      <EventsHero />
      <WhereIdeas />

    </div>
  )
}