


export default function Event({ event }) {

  const { name, description, startDate, startTime, endDate, endTime, timeZone, calendarLink, livestreamLink, livestreamText, link, linkText, imageURL } = event

  return (
    <div className="my-4" >
      <hr className="mb-2 border-black" />
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  )
}