import nodemailer from 'nodemailer'
import mailerConfig from 'config/nodemailer.json'

const sendVerificationEmail = (email, verificationCode) => {
  const { user } = mailerConfig.auth
  nodemailer.createTransport(mailerConfig).sendMail({
    from: user,
    to: email,
    subject: `Your Habichat Verification Code`,
    replyTo: user,
    html: `Your verification code is: ${verificationCode}`
  })
}

export default sendVerificationEmail
