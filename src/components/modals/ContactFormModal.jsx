import { useState } from "react"

import emailjs from '@emailjs/browser';
import ReCAPTCHA from "react-google-recaptcha";


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

  const [emailError, setEmailError] = useState(false)
  const [fieldsError, setFieldsError] = useState(false)
  
  function resetContactForm() {
    setEmailError(false)
    setFieldsError(false)
    setFormData(newForm)
  }

  const asterisk = <span className="text-red-400">*</span>

  // const [captchaToken, setCaptchaToken] = useState(null);

  // const handleCaptchaChange = (token) => {
  //   // Token received from Google
  //   setCaptchaToken(token);
  // };

  function handleSubmit(e) {
    console.log("submission")
    e.preventDefault()

    let error = false

    if (!formData.email.includes("@")) { setEmailError(true); error = true } else { setEmailError(false) }
    if (formData.name.length == 0 || formData.email.length == 0 || formData.content.length == 0) { setFieldsError(true); error = true } else { setFieldsError(false) }

    if (!error) {
      emailjs.send("remycorp_emailjs", "contact_form", formData, import.meta.env.VITE_CONTACT_FORM_KEY)
      .then(function(response) {
        document.getElementById('contact-form-modal').close()
        console.log('SUCCESS!', response.status, response.text);
        setFormData(newForm)
      }, function(error) {
        console.log('FAILED...', error);
        setErrors({...errors, emailjs: true})
      });
    }
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

          <div className="modal-action">
            {/* <ReCAPTCHA
              sitekey="6LdNTSsqAAAAANUZ1XiFQehS50ANIjRtrGpVBGUR"
              onChange={handleCaptchaChange}
            /> */}
            <button type="submit" className="btn btn-secondary" >Submit</button>
          </div>
          
        </form>

      </div>
    </dialog>
  )
}