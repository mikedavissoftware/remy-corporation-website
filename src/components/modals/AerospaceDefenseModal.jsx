



export default function AerospaceDefenseModal() {

  const modalID = "aerospace-defense"

  return (
    <dialog id={`${modalID}-modal`} className="modal" >
      <div className="absolute h-full w-full" onClick={()=>document.getElementById(`${modalID}-modal`).close()}></div>
      <div className={`modal-box p-8 bg-[url(images/industries/${modalID}.jpg)] bg-opacity-85 bg-blend-lighten`}>
        <h3 className="text-center font-bold text-2xl mb-4">
          Aerospace & Defense
        </h3>
        <p>
          Precision engineering, rigorous safety standards, and complex supply chains define your world—and Remy delivers consultants who thrive in that environment. We curate engineers and system architects with proven experience in MIL-STD testing, FAA certification processes, and avionics software development. By forging a deep understanding of your program lifecycle—from concept validation through field support—we help you accelerate prototyping, streamline change management, and integrate digital-twin simulations that reduce risk. Our placed experts become seamless members of your engineering teams, applying lean-manufacturing principles and secure DevOps practices to keep your projects on time and on budget.
        </p>
      </div>
    </dialog>
  )
}