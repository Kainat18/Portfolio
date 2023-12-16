import React from 'react'
import { useForm, ValidationError } from '@formspree/react';

function Contact() {
const [state, handleSubmit] = useForm("mbjvndrk");
  if (state.succeeded) {
    return <div className="submission-div">
      <p className="submission-message">Thanks for joining!</p>;
      </div>
  }
  return (
    <div id="Contact-section">
      <div className="contact-wrapper">
      <h1 className="contact-header">Interested in Collaboration? Lets Get in Touch!</h1>
      <form onSubmit={handleSubmit} className="contact-form">
      <label htmlFor="email">
        Email Address
      </label>
      <input
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <label>Message:</label>
      <textarea
        id="message"
        name="message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting} className="submit-button">
        Submit
      </button>
    </form>
    </div>
    </div>
  )
}

export default Contact


