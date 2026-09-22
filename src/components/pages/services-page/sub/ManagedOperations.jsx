import TaskAltIcon from '@mui/icons-material/TaskAlt';

export default function ManagedOperations() {



  return (
    <div className="bg-[#eeedec]">
      <div className="max-w-8xl mx-auto px-8 md:px-16 pt-24 pb-12 grid grid-cols-1 md:grid-cols-8 gap-x-12 items-center text-white">
        <div className="my-auto space-y-3 md:space-y-5 md:col-span-5 text-center md:text-left">
          <h2 className="text-lg md:text-2xl mb-6 font-medium tracking-widest text-slate-600 uppercase">Managed Operations</h2>
          <h1 className="text-3xl md:text-6xl font-bold text-wdbluepastel">Optimize Systems.</h1>
          <h1 className="text-3xl md:text-6xl font-bold text-wdorange">Strengthen Operations.</h1>
          <p className="text-lg md:text-xl font-medium text-slate-800">
            Remy provides flexible managed operations and application support built around your systems, priorities, and budget. From implementation through ongoing optimization, our specialists help keep critical systems and daily operations running smoothly.​
          </p>
          <div className="pl-4 md:pl-0 pt-4 pb-12 grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-4 font-bold text-lg md:text-2xl text-darkblue text-left">
            <h4 className="col-span-1"><TaskAltIcon className="md:-translate-y-1 md:scale-110 mr-2 md:mr-4"/>Application Management</h4>
            <h4 className="col-span-1"><TaskAltIcon className="md:-translate-y-1 md:scale-110 mr-2 md:mr-4"/>Payroll Systems Support</h4>
            <h4 className="col-span-1"><TaskAltIcon className="md:-translate-y-1 md:scale-110 mr-2 md:mr-4"/>Implementation & Stabilization</h4>
            <h4 className="col-span-1"><TaskAltIcon className="md:-translate-y-1 md:scale-110 mr-2 md:mr-4"/>Project & Operational Support</h4>
            <h4 className="col-span-1"><TaskAltIcon className="md:-translate-y-1 md:scale-110 mr-2 md:mr-4"/>Continuous Optimization</h4>
            <h4 className="col-span-1"><TaskAltIcon className="md:-translate-y-1 md:scale-110 mr-2 md:mr-4"/>Flexible Service Agreements</h4>
          </div>
        </div>
        <div className="md:col-span-3 mb-12">
          <img src="images/services-page/infinity-reduced.jpg" className="w-full h-auto"/>
        </div>
      </div>
    </div>
    
  )
}