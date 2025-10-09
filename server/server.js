import express from 'express'
import nodemailer from 'nodemailer'
import cors from 'cors'
import path from 'path'

const app = express()
app.use(cors())
app.use(express.json())

// Variables d'environnement
const RECAPTCHA_SECRET = process.env.RECAPTCHA_SECRET
const SMTP_USER = process.env.SMTP_USER
const SMTP_PASS = process.env.SMTP_PASS

// Route API contact
app.post('/api/contact', async (req, res) => {
  const { email, message, recaptchaToken } = req.body

  if (!recaptchaToken)
    return res.status(400).json({ success: false, error: 'Missing reCAPTCHA token' })

  try {
    // Vérification reCAPTCHA
    const recaptchaResponse = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${RECAPTCHA_SECRET}&response=${recaptchaToken}`,
      { method: 'POST' }
    )
    const data = await recaptchaResponse.json()

    if (!data.success || data.score < 0.5 || data.action !== 'submit') {
      return res.status(400).json({ success: false, error: 'Échec de reCAPTCHA' })
    }

    // Envoi de l'email
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: { user: SMTP_USER, pass: SMTP_PASS }
    })

    await transporter.sendMail({
      from: SMTP_USER,
      replyTo: email, // Email de l'expéditeur pour réponse
      to: 'yguenot@polepo.fr', // Email de réception
      subject: 'Nouveau message depuis le site',
      text: message
    })

    res.json({ success: true, message: 'Message envoyé !' })
  } catch (err) {
    console.error(err)
    res.status(500).json({ success: false, error: 'Erreur lors de l’envoi de l’email' })
  }
})

// Servir le build Vue
app.use(express.static(path.join(__dirname, '../dist')))
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'))
})

// Démarrage serveur
const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Serveur démarré sur http://localhost:${PORT}`))
