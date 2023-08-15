import React, { useRef, useState } from "react"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

export default function ContactForm() {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)

  const firstNameRef = useRef()
  const lastNameRef = useRef()
  const emailRef = useRef()
  const phoneRef = useRef()
  const messageRef = useRef()

  firstNameRef.current = firstName
  lastNameRef.current = lastName
  emailRef.current = email
  phoneRef.current = phone
  messageRef.current = message

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    // Validation check
    if (!firstName || !email || !phone || !message) {
      let errorMessage = "Please fill in all the required fields: "
      if (!firstName) errorMessage += "First Name, "
      if (!email) errorMessage += "Email, "
      if (!phone) errorMessage += "Phone, "
      if (!message) errorMessage += "Message, "
      errorMessage = errorMessage.slice(0, -2) + "."
      toast.error(errorMessage)
      setLoading(false)
      return
    }

    const response = await fetch("/api/emailcontact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: firstNameRef.current,
        lastName: lastNameRef.current,
        email: emailRef.current,
        phone: phoneRef.current,
        message: messageRef.current,
      }),
    })

    if (response.ok) {
      toast.success("Message sent successfully")
      setFirstName("")
      setLastName("")
      setEmail("")
      setPhone("")
      setMessage("")
    } else {
      toast.error("Failed to send email receipt")
    }
    setLoading(false)
  }

  return (
    <div>
      <div id="contact" className="max-w-[1140px] m-auto w-full p-4">
        {/* <h2 className="text-center">Send us a message</h2>
        <p className="text-center py-2">We&apos;re standing by!</p> */}
        <h3 className="text-2xl lg:text-3xl text-center">
          Contact us directly
        </h3>
        <hr className="border-blue-700/80 mx-auto w-1/4" />
        <h1 className="py-4 text-lg lg:text-xl text-center">
          Get a quote, ask a question or just say hello :)
        </h1>

        <div className="grid md:grid-cols-2 text-black">
          <img
            src="/gallery/img5.jpg"
            alt="Contact Image"
            className="w-full md:h-full object-cover p-2 max-h-[500px] h-[200px]"
          />
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2">
              <input
                className="border m-2 p-2"
                type="text"
                placeholder="First Name*"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                className="border m-2 p-2"
                type="text"
                placeholder="Last Name*"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              <input
                className="border m-2 p-2"
                type="email"
                placeholder="Email*"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className="border m-2 p-2"
                type="tel"
                placeholder="Phone*"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <textarea
                className="border col-span-2 m-2 p-2"
                cols="30"
                rows="10"
                placeholder="Your Message*"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <button
                className="col-span-2 m-2 rounded-md bg-green-500 p-1 max-w-[720px] md:max-w-[550px] text-white hover:text-black"
                type="submit"
                disabled={loading} // Disable the button based on the loading state
              >
                {loading ? "Sending..." : "Submit"}{" "}
                {/* Conditional rendering based on the loading state */}
              </button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer position="bottom-center" limit={1} />
    </div>
  )
}
