



export default function HigherEducationModal() {

  const modalID = "higher-education"

  return (
    <dialog id={`${modalID}-modal`} className="modal" >
      <div className="absolute h-full w-full" onClick={()=>document.getElementById(`${modalID}-modal`).close()}></div>
      <div className={`modal-box p-8 bg-[url(images/industries/${modalID}.jpg)] bg-opacity-85 bg-blend-lighten`}>
        <h3 className="text-center font-bold text-2xl mb-4">
          Higher Education
        </h3>
        <p>
          At Remy, we partner with colleges and universities to transform student services and administrative operations into seamless, data-driven experiences. Our consultants immerse themselves in your academic culture and working alongside registrars, bursars, and IT governance councils to identify pain points in enrollment processing, financial aid disbursements, and alumni engagement. We don't simply configure software; we develop bespoke integrations that connect PeopleSoft or Workday with your learning management systems, ensuring that course rosters update in real time and that advisors have up-to-the-minute student progress data. By embedding experts who've led successful campus implementations, we help you achieve faster go-lives, higher end-user satisfaction, and measurable improvements in retention and graduation rates.
        </p>
      </div>
    </dialog>
  )
}