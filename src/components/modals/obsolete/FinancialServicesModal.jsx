



export default function FinancialServicesModal() {

  const modalID = "financial-services"

  return (
    <dialog id={`${modalID}-modal`} className="modal" >
      <div className="absolute h-full w-full" onClick={()=>document.getElementById(`${modalID}-modal`).close()}></div>
      <div className={`modal-box p-8 bg-[url(images/industries/${modalID}.jpg)] bg-opacity-85 bg-blend-lighten`}>
        <h3 className="text-center font-bold text-2xl mb-4">
          Financial Services
        </h3>
        <p>
          When regulatory scrutiny, market volatility, and operational efficiency collide, you need more than generic IT support you need seasoned finance technologists. Remy embeds consultants who have worked within banks, insurance firms, and investment houses to fine-tune general ledger integrations, build real-time close accelerators, and deploy BI dashboards that surface risk exposures before they crystallize. Our experts speak the language of treasury, controls, and audit; they collaborate directly with your finance leaders to define control objectives, map data lineage, and optimize reconciliations. The result is a tighter close process, enhanced transparency for regulators, and liberated finance teams who can spend more time on analysis and strategy.
        </p>
      </div>
    </dialog>
  )
}