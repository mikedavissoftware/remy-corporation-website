



export default function PartnershipImage({ fileName }) {

  const path = `public/images/general/partners/${fileName}`

  return (
    <div className="" >
      <img src={path} />
    </div>
  )
}