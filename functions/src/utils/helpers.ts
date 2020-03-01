import nodemailer from 'nodemailer'
import mailerConfig from 'config/nodemailer.json'

const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/

export const validateEmail = (email) => emailRegex.test(email)

export const createNewCode = () => {
  const digit = () => Math.floor(Math.random() * 10)
  return `${digit()}${digit()}${digit()}${digit()}`
}

export const createNewUser = (email) => ({
  email,
  username: "",
  picture: "https://firebasestorage.googleapis.com/v0/b/habichat-75c78.appspot.com/o/picture-placeholder.jpg?alt=media&token=752e9043-b607-43a3-bb5d-92d5c25c78db",
  interests: [],
  communities: [],
  created: new Date().getTime()
})

export const sendVerificationEmail = (email, pin) => {
  const { user } = mailerConfig.auth
  return nodemailer.createTransport(mailerConfig).sendMail({
    from: user,
    to: email,
    subject: `Your Habichat Verification Pin`,
    replyTo: user,
    html: `Your pin is: ${pin}`
  })
}