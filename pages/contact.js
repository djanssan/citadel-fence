// /Users/admin/Desktop/fence-final/pages/contact.js
import React from "react"
import ContactForm from "../components/ContactForm.jsx"
import TopBar from "../components/TopBar.jsx"

const Contact = () => {
  return (
    <TopBar>
      <div className="container mx-auto md:px-4">
        <ContactForm />
      </div>
    </TopBar>
  )
}

export default Contact
