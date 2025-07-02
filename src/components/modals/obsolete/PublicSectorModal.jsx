



export default function PublicSectorModal() {

  const modalID = "public-sector"

  return (
    <dialog id={`${modalID}-modal`} className="modal" >
      <div className="absolute h-full w-full" onClick={()=>document.getElementById(`${modalID}-modal`).close()}></div>
      <div className={`modal-box p-8 bg-[url(images/industries/${modalID}.jpg)] bg-opacity-85 bg-blend-lighten`}>
        <h3 className="text-center font-bold text-2xl mb-4">
          Public Sector
        </h3>
        <p>
          Delivering citizen-focused digital services requires a partner versed in procurement cycles, grant funding mechanisms, and data security mandates. Remy places cross-functional teams architects, developers, project managers—who have successfully delivered municipal portals, case-management upgrades, and interagency data sharing platforms. We guide you through RFP complexities, recommend scalable open-source or commercial solutions, and lead user-experience workshops that ensure your portals are accessible to all constituents. Our consultants have cleared backgrounds that let them work on sensitive initiatives, and they're adept at embedding with policy teams to align technical roadmaps with your evolving legislative priorities.
        </p>
      </div>
    </dialog>
  )
}