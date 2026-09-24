
import "add-to-calendar-button"



export default function Event({ event }) {

  const { name, description, startDate, startTime, endDate, endTime, timeZone, calendarLink, livestreamLink, livestreamText, link, linkText, imageURL } = event

  console.log(name)

  return (
    <div className="my-4" >
      <hr className="mb-2 border-black" />
      <h3>{name}</h3>
      <p>{description}</p>
      <add-to-calendar-button
        name={name}
        description="Discussing quarterly goals and milestones."
        startDate="2026-10-15"
        endDate="2026-10-15"
        startTime="10:00"
        endTime="11:30"
        timeZone="America/New_York"
        location="Zoom Video Call"
        options={['Apple', 'Google', 'Outlook.com', 'Yahoo', 'iCal']}
        hideIconButton
        lightMode="system"
      />
    </div>
  )
}