import nodemailer from 'nodemailer'
import { WELCOME_EMAIL_TEMPLATE } from './templates'

type WelcomeEmailData = {
  email: string
  name: string
  intro: string
}

export const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.NODEMAILER_EMAIL,
    pass: process.env.NODEMAILER_PASSWORD,
  },
})

export const sendWelcomeEmail = async ({
  email,
  name,
  intro,
}: WelcomeEmailData) => {
  const htmlTemplate = WELCOME_EMAIL_TEMPLATE.replace('{{name}}', name).replace(
    '{{intro}}',
    intro
  )
  const mailOptions = {
    from: `"Signalist" <philmkieti@hotmail.com>`, // process.env.NODEMAILER_EMAIL,
    to: email,
    subject: 'Welcome to Signalist. Your stock market toolkit',
    text: 'Thanks for joining Signalist!',
    html: htmlTemplate, // WELCOME_EMAIL_TEMPLATE,
  }
  await transporter.sendMail(mailOptions)
}
