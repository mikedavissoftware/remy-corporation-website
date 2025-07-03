import { useState } from "react"



export default function ContactFormModal({}) {

  const newForm = {
    name: "",
    email: "",
    type: "",
    content: ""
  }
  const [formData, setFormData] = useState(newForm)

  function handleChange(e) {
    setFormData({...formData, [e.target.name]: e.target.value})
    console.log(formData)
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log(formData)
    fetch(`${api}/contact_forms`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((r) => {
      if (r.ok) {
        r.json().then((res) => {
          console.log(res)
          setErrors([])
          setSuccess(res.success)
        });
        setFormData(newForm)
        console.log(success)
        console.log("contact successful")
      } else {
        (r.status === 500) ? (
          setErrors(["Database unreachable."])
        ) : (
          r.json().then((res) => {
            setSuccess([])
            setErrors(res.errors)
          })
        )
        console.log(errors)
        console.log("contact unsuccessful")
      }
    });
  }

  var x = document.getElementById("contact-select");

  return (
    <dialog id="contact-form-modal" className="modal">
      <div className="absolute h-full w-full" onClick={()=>document.getElementById('contact-form-modal').close()}></div>
      
      <div className="modal-box p-8">

        <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-xs btn-circle btn-ghost absolute right-2 top-2">✕</button>
        </form>

        <h3 className="font-bold text-2xl mb-4">Contact Us</h3>


        <form method="dialog" onSubmit={handleSubmit}>

          <fieldset className="fieldset">
            <legend className="fieldset-legend my-2">Name:</legend>
            <input id="name" name="name" type="text" placeholder="Type name here..." value={formData.name} onChange={handleChange} className="input input-bordered w-full mb-2 max-w-xs border-2 border-wdblue border-opacity-60 focus:border-wdorange" />

            <legend className="fieldset-legend my-2">Email:</legend>
            <input id="email" name="email" type="text" placeholder="Type email here..." value={formData.email} onChange={handleChange} className="input input-bordered input-wdblue w-full mb-2 max-w-xs border-2 border-wdblue border-opacity-60 focus:border-wdorange" />

            <legend className="fieldset-legend my-2">What service can we provide?</legend>
            <select defaultValue="Choose an area of expertise..." id="contact-select" className="select mb-2 border-2 border-wdblue border-opacity-60 text-gray-500 focus:border-wdorange focus:text-black">
              <option disabled={true} className="text-gray-400">Choose an area of expertise...</option>
              <option className="text-black">Workday Transformation</option>
              <option className="text-black">PeopleSoft Excellence</option>
              <option className="text-black">Oracle Innovation</option>
              <option className="text-black">IT Consulting & Development</option>
            </select>

            <legend className="fieldset-legend my-2">How can we help you?</legend>
            <textarea id="content" name="content" className="textarea textarea-bordered text-md h-48 w-full border-2 border-wdblue border-opacity-60 focus:border-wdorange" placeholder="Type message here..." value={formData.content} onChange={handleChange} ></textarea>
          </fieldset>

          <div className="modal-action">
            <button type="submit" className="btn btn-secondary" >Submit</button>
          </div>
          
        </form>

      </div>
    </dialog>
  )
}