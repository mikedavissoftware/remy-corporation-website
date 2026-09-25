
import Event from "./Event"

import { events } from "../../../../../db/events/events"

export default function EventsList() {

  const eventComponents = events.map((event) => {
    return <Event key={event.id} event={event} />
  })

  return (
    <div className="h-96 p-4">
      {eventComponents}
    </div>
  )
}