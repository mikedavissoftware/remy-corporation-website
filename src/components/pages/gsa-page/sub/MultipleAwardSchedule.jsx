import TaskAltIcon from '@mui/icons-material/TaskAlt';

export default function MultipleAwardSchedule() {



  return (
    <div className="bg-darkblue/20">
      <div className="max-w-8xl mx-auto px-8 py-16 md:p-16 grid grid-cols-1 md:grid-cols-8 gap-x-12 gap-y-8 items-center text-white">
        <div className="my-auto space-y-2 md:space-y-5 md:col-span-5 text-left md:text-left">
          <h2 className="text-md md:text-2xl mb-2 md:mb-6 font-medium tracking-widest text-slate-600 uppercase">GSA Multiple Award Schedule</h2>
          <h1 className="text-2xl md:text-6xl font-bold text-darkblue">Federal Access.</h1>
          <h1 className="text-2xl md:text-6xl font-bold text-darkblue">Specialized Expertise.</h1>
          <h1 className="text-2xl md:text-6xl font-bold text-darkblue">Mission-Focused Delivery.</h1>
          <p className="text-md md:text-xl text-slate-800">
            Remy provides flexible managed operations and application support built around your systems, priorities, and budget. From implementation through ongoing optimization, our specialists help keep critical systems and daily operations running smoothly.​
          </p>
        </div>
        <div className="md:col-span-3">
          <img src="images/gsa-page/gsa-mas-final.png" className="w-full h-auto rounded-md md:rounded-lg drop-shadow-light3"/>
        </div>
      </div>
    </div>
    
  )
}