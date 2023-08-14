// /Users/admin/Desktop/fence-final/pages/api/emailcontact.js
import { sendContactEmail } from "../../../utils/sendContactEmail"

async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(400).send({ message: `${req.method} not supported` })
  }

  const { email, phone, firstName, lastName, message } = req.body

  if (!email || !phone || !firstName || !message) {
    res.status(422).json({
      message: "Missing required fields",
    })
    return
  }

  await sendContactEmail(
    email,
    "Citadel Fencing - Contact Request",
    `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Contact Request</title>
      <style>
        /* Reset styles */
        body {
          margin: 0;
          padding: 0;
          font-family: Arial, sans-serif;
          line-height: 1.6;
          background-color: #FFFFFF;
        }

        h1,
        h3,
        p {
          margin-top: 0;
          margin-bottom: 1rem;
        }

        h1 {
          font-size: 2rem;
          line-height: 1.2;
          font-weight: bold;
        }

        h3 {
          font-size: 1.5rem;
          line-height: 1.2;
          font-weight: bold;
          color: #2c3e50;
        }

        p {
          font-size: 1rem;
          line-height: 1.5;
          color: #333;
        }

    
        .container {
          background-color: #FFFFFF;
          padding: 20px;
          border-radius: 5px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          max-width: 552px;
          margin: 0 auto;
          text-align: center;
        }

  
        .logo {
          display: inline-block;
          vertical-align: middle;
          margin-top: 3px;
          max-width: 70px !important; 
        }

        .logo img {
          width: 100%;
          
        }

        .button {
          display: inline-block;
          background-color: #3498db;
          color: white !important;
          padding: 10px 20px;
          font-size: 1rem;
          border-radius: 5px;
          text-decoration: none;
          margin-top: 20px;
          padding-left: 50px;
          padding-right: 50px;
          
        }

        .button a {
          color: white !important;
        }

        /* Footer styles */
        .footer {
          margin-top: 3rem;
          font-size: 0.8rem;
          color: #888;
        }

        .footer a {
          color: #888;
          text-decoration: none;
        }

        .footer a:hover {
          text-decoration: underline;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="flex justify-center mb-8 gap-8">
          <div class="logo">
            <a href="https://citadel-fence.vercel.app/">
              <img src="https://i.ibb.co/BrJS5mF/logo.jpg" alt="needs image" class=" max-width: 70px !important" />
            </a>
          </div>
          <h1 class="text-black mt-4">Thank you for contacting us!</h1>
        </div>

        <h3>Your message has been received!</h3>
        <p>Hello ${firstName},</p>
        <p>Thank you for reaching out. Your inquiry has been successfully received by the Citadel team. 
        Once a specialist has read your message, they will reach out to you as soon as possible via the contact information you provided.
        It may take 1 to 3 business days to reply. Hold tight, we will be with you shortly.</p>
  
        <p>Thanks,</p>
        <p>Citadel Fencing</p>
       
       
      </div>
    </body>
  </html>
    `
  )

  await sendContactEmail(
    process.env.NEXT_PUBLIC_GMAIL_EMAIL,
    "New Contact Request",

    `<p>Name: ${firstName + " " + lastName}</p>
    <p>Email: ${email}</p>
    <p>OrderId: ${phone}</p>
    <p>Message: ${message}</p>
  `
  )

  res.send({
    message: "Email sent ",
  })
}

export default handler

//    process.env.NEXT_PUBLIC_YANDEX_CONTACT_EMAIL,
// <html>
//   <head>
//     <style>
//       h3 {
//         font-size: 24px;
//         font-weight: bold;
//         color: #333;
//       }

//       p {
//         font-size: 16px;
//         color: #555;
//         margin-bottom: 10px;
//       }

//       .message {
//         font-size: 14px;
//         color: #777;
//         margin-top: 20px;
//         padding: 10px;
//         background-color: #f9f9f9;
//         border: 1px solid #ddd;
//         border-radius: 5px;
//       }
//     </style>
//   </head>
//   <body>
//     <h3>Someone hit up your Contact Form on the website</h3>
//     <p>Their First Name: ${firstName}</p>
//     <p>Their Last Name: ${lastName}</p>
//     <p>Their Email: ${email}</p>
//     <p>Their Phone: ${phone}</p>
//     <div class="message">
//       <p>They said:</p>
//       <p>${message}</p>
//     </div>
//   </body>
// </html>
// -----------------------------------------------------------------------
