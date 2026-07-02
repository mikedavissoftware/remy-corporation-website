import { useState, useRef } from "react"

import emailjs from '@emailjs/browser';
import ReCAPTCHA from "react-google-recaptcha";


export default function ContactFormModal({}) {

  
  // // FORM CODE // //
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
  // VALIDATION
  const [emailError, setEmailError] = useState(false)
  const [fieldsError, setFieldsError] = useState(false)
  const asterisk = <span className="text-red-400">*</span>
  // FORM RESET
  function resetContactForm() {
    setEmailError(false)
    setFieldsError(false)
    setRecaptchaError(false)
    setFormData(newForm)
    setAllowSubmit(false)
  }

  // // CAPTCHA REF // //
  const [recaptchaError, setRecaptchaError] = useState(false)
  const recaptchaRef = useRef()

  // // SUBMISSION FUNCTION // //
  async function handleSubmit(e) {
    e.preventDefault()

    let token
    let error = false

    if (!formData.email.includes("@")) { setEmailError(true); error = true } else { setEmailError(false) }
    if (formData.name.length == 0 || formData.email.length == 0 || formData.content.length == 0) { setFieldsError(true); error = true } else { setFieldsError(false) }

    try {
      console.log("try")
      token = await recaptchaRef.current.execute()
      // console.log(token)
    } catch {
      setRecaptchaError(true)
    }

    console.log(token)

    if (!error && token) {
      emailjs.send("remycorp_emailjs", "contact_form", {...formData, "g-recaptcha-response": token}, import.meta.env.VITE_CONTACT_FORM_KEY)
      .then(function(response) {
        document.getElementById('contact-form-modal').close()
        console.log('SUCCESS!', response.status, response.text);
        setFormData(newForm)
      }, function(error) {
        console.log('FAILED...', error);
      });
    }
  }

  // var x = document.getElementById("contact-select");

  return (
    <dialog id="contact-form-modal" className="modal">
      <div className="absolute h-full w-full" onClick={()=>document.getElementById('contact-form-modal').close()}></div>
      
      <div className="modal-box p-8">

        <form method="dialog" className="sm:hidden">
        {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-xs btn-circle btn-ghost absolute right-2 top-2">✕</button>
        </form>

        <h3 className="font-bold text-2xl mb-4">Contact Us</h3>


        <form method="dialog" onSubmit={handleSubmit}>

          <fieldset className="fieldset">
            <legend className="fieldset-legend my-2">Name: {(fieldsError) ? (asterisk) : (null)}</legend>
            <input id="name" name="name" type="text" placeholder="Type name here..." value={formData.name} onChange={handleChange} className="input input-bordered w-full mb-2 max-w-xs border-2 border-wdblue border-opacity-60 focus:border-wdorange" />

            <legend className="fieldset-legend my-2">Email: {(fieldsError) ? (asterisk) : (null)}</legend>
            <input id="email" name="email" type="text" placeholder="Type email here..." value={formData.email} onChange={handleChange} className="input input-bordered input-wdblue w-full mb-2 max-w-xs border-2 border-wdblue border-opacity-60 focus:border-wdorange" />

            <legend className="fieldset-legend my-2">What service can we provide?</legend>
            <select defaultValue="Choose an area of expertise..." name="type" id="contact-select"  onChange={handleChange} className="select mb-2 border-2 border-wdblue border-opacity-60 text-gray-500 focus:border-wdorange focus:text-black">
              <option disabled={true} className="text-gray-400">Choose an area of expertise...</option>
              <option className="text-black">Workday Transformation</option>
              <option className="text-black">PeopleSoft Excellence</option>
              <option className="text-black">Oracle Innovation</option>
              <option className="text-black">IT Consulting & Development</option>
            </select>

            <legend className="fieldset-legend my-2">How can we help you? {(fieldsError) ? (asterisk) : (null)}</legend>
            <textarea id="content" name="content" className="textarea textarea-bordered text-md h-48 w-full border-2 border-wdblue border-opacity-60 focus:border-wdorange" placeholder="Type message here..." value={formData.content} onChange={handleChange} ></textarea>
          </fieldset>

          {(fieldsError) ? (
            <p className="text-red-400 text-right font-bold">Please fill out all required fields.</p>
          ) : (null)}
          {(emailError) ? (
            <p className="text-red-400 text-right font-bold">Invalid email format. Please try again.</p>
          ) : (null)}
          {(recaptchaError) ? (
            <p className="text-red-400 text-right font-bold">Please check "I am not a robot".</p>
          ) : (null)}

          <div className="modal-action">
            <button type="submit" className="btn btn-secondary" >Submit</button>
          </div>

          <div className="float-right mt-4 hidden">
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey="6LfBUSsqAAAAABjuZaqTnIvJGXFZF9dnTMHuZ26c"
              size="invisible"
              // onChange={() => console.log("change")}
            />
          </div>
          
          
        </form>

      </div>
    </dialog>
  )
}