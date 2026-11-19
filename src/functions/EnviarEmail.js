const nodemailer = require("nodemailer")
const { dialog } = require("electron")

function EnviarEmail(evento, resultados) {

    const transportador = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "alunossupergeeksjoinville@gmail.com",
        pass: "bibe nruu qntf ddxy"
    }
    })

    const mensagem = {
        from: "alunossupergeeksjoinville@gmail.com",
        to: resultados.destino,
        subject: resultados.titulo,
        text: resultados.corpo
    }

    transportador.sendMail(mensagem)
        .then(function(resposta) {
            dialog.showMessageBox({
            type: "info",
            title: "Digitando Emails",
            message: `Email enviado com sucesso!\n${resposta.accepted.join()}`
            })
        })
        .catch(function(erro) {
            console.log(erro)
        })
}

module.exports = EnviarEmail


