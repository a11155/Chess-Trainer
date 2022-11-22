const nodemailer = require('nodemailer');

class MailService{

    constructor(){
        this.transporter = nodemailer.createTransport({
            host: "smtp.mailtrap.io",
            port: 2525,
            auth: {
              user: "d32b46c4e90d33",
              pass: "baa3d115e64a1e"
            }
          });
    }

    async sendActivationMail(to, link){
        await this.transporter.sendMail({
            from: process.env.SMTP_USER,
            to,
            subject: "Account Activation for " + process.env.API_URL,
            text: '',
            html:
            `
                <div>
                    <h1>Follow this link to activate your account</h1>
                    <a href="${link}">${link}</a>
                </div>
            `

        });
        console.log(link);

    }
}

module.exports = new MailService();