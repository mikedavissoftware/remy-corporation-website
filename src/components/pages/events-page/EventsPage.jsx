import { useEffect } from "react"

import WhereIdeas from "./sub/WhereIdeas"
import EventsList from "./sub/EventsList"

export default function EventsPage() {

  const now = new Date()
  console.log(now)

  // Scroll to the top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="" >
      <WhereIdeas />
      <EventsList />

    </div>
  )
}