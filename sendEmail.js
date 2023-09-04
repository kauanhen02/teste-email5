const nodemailer = require("nodemailer")

// Configurar o transporte de e-mail
const transporter = nodemailer.createTransport({
  service: "Outlook365",
  auth: {
    user: "kauansjx31@outlook.com",
    pass: "@596378Ka",
  },
})

// Configurar os detalhes do e-mail
const mailOptions = {
  from: "kauansjx31@outlook.com",
  to: "kauan.pinho@ginger.ind.br",
  subject: "Assunto do E-mail",
  text: "Conteúdo do E-mail",
}

// Enviar o e-mail
transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.error("Erro ao enviar o e-mail:", error)
  } else {
    console.log("E-mail enviado com sucesso:", info.response)
  }
})
