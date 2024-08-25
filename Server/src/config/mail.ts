import nodemailer from "nodemailer";
import "dotenv/config";

export const sendEmail = async (to: string, subject: string, body: string) => {
            var transporter = nodemailer.createTransport({
                host: process.env.SMTP_HOST,
                port: 587,
                secure: false, // Use `true` for port 465, `false` for all other ports
                auth: {
                  user: process.env.SMTP_USER,
                  pass: process.env.SMTP_PASSWORD,
                },
            });
            
            var mailOptions = {
              from: process.env.FROM_EMAIL,
              to: to,
              subject: subject,
              html:body
            };
            
            transporter.sendMail(mailOptions, function(error: any, info: { response: string; }){
              if (error) {
                console.log(error);
              } else {
                console.log('Email sent: ' + info.response);
              }
            });
}
          
      
    


