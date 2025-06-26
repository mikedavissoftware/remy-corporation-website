



export default function CyberITModal() {

  const modalID = "cybersecurity-it"

  return (
    <dialog id={`${modalID}-modal`} className="modal" >
      <div className="absolute h-full w-full" onClick={()=>document.getElementById(`${modalID}-modal`).close()}></div>
      <div className={`modal-box p-8 bg-[url(images/industries/${modalID}.jpg)] bg-opacity-85 bg-blend-lighten`}>
        <h3 className="text-center font-bold text-2xl mb-4">
          Cybersecurity & IT
        </h3>
        <p>
          Protecting critical data and ensuring uninterrupted operations calls for a security-first mindset. Remy’s cybersecurity consultants—ranging from SOC managers and penetration testers to cloud-security architects—partner with your IT leadership to assess vulnerabilities, design micro-segmented networks, and implement continuous monitoring platforms. We tailor our methodology to your regulatory landscape—whether HIPAA, SOX, or CMMC—and source professionals certified in the technologies you run, from AWS to Azure to on-premise SIEM tools. By embedding alongside your teams, we accelerate incident response maturity, formalize threat-hunting playbooks, and foster security-aware cultures that turn every employee into a line of defense.
        </p>
      </div>
    </dialog>
  )
}