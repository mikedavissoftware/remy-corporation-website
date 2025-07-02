import { useState } from "react"



export default function ContactFormModalOld({}) {

  const newForm = {
    name: "",
    email: "",
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

  return (
    <dialog id="contact-form-modal-old" className="modal">
      <div className="absolute h-full w-full" onClick={()=>document.getElementById('contact-form-modal').close()}></div>
      <div className="modal-box p-8">
        <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-xs btn-circle btn-ghost absolute right-2 top-2">✕</button>
        </form>
        <h3 className="font-bold text-lg">Contact Us</h3>
        <p className="py-4">Get in touch using the form below!</p>

        <form method="dialog" onSubmit={handleSubmit}>

          <div className="form-control max-w-2xl mx-auto">
            <label className="label">
              <span className="label-text">What is your name?</span>
            </label>
            <input id="name" name="name" type="text" placeholder="Type name here..." value={formData.name} onChange={handleChange} className="input input-bordered w-full max-w-xs text-white" />
          </div>

          <div className="form-control max-w-2xl mx-auto">
            <label className="label">
              <span className="label-text">What is your email?</span>
            </label>
            <input id="email" name="email" type="text" placeholder="Type email here..." value={formData.email} onChange={handleChange} className="input input-bordered w-full max-w-xs text-white" />
          </div>

          <div className="form-control max-w-2xl mx-auto">
            <label className="label">
              <span className="label-text">What do you need help with?</span>
            </label>
            <select defaultValue="Pick a color" className="select">
              <option disabled={true}>Pick a color</option>
              <option>Crimson</option>
              <option>Amber</option>
              <option>Velvet</option>
            </select>
          </div>

          <div className="form-control max-w-2xl mx-auto">
            <label className="label">
              <span className="label-text">How can we help you?</span>
            </label>
            <textarea id="content" name="content" className="textarea textarea-bordered h-48 text-white" placeholder="Type message here..." value={formData.content} onChange={handleChange} ></textarea>
          </div>

          <div className="modal-action">
            <button type="submit" className="btn btn-secondary" >Submit</button>
          </div>
          
        </form>

      </div>
    </dialog>
  )
}