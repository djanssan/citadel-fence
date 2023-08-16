import nodemailer from "nodemailer"

export const sendContactEmail = async (email, subject, htmlContent) => {
  const mail = nodemailer.createTransport({
    service: "yandex",
    host: "smtp.yandex.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.NEXT_PUBLIC_YANDEX_CONTACT_EMAIL,
      pass: process.env.NEXT_PUBLIC_YANDEX_CONTACT_PASS,
    },
  })

  await new Promise((resolve, reject) => {
    mail.verify(function (error, success) {
      if (error) {
        // console.log(error)
        reject(error)
      } else {
        // console.log("Server is ready to take our messages")
        resolve(success)
        // console.log("email host is " + process.env.EMAIL_HOST)
      }
    })
  })

  const mailOptions = {
    from: process.env.NEXT_PUBLIC_YANDEX_CONTACT_EMAIL,
    to: email,
    subject: subject,
    html: htmlContent,
  }
  let sent = 0
  await new Promise((resolve, reject) => {
    mail.sendMail(mailOptions, (error, info) => {
      if (error) {
        // console.error(error)
        sent = 1
        reject(error)
      } else {
        // console.log(info)
        sent = 0
        resolve(info)
      }
    })
  })

  return sent
}
