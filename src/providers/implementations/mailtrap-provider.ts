import { MailProviderInterface, MessageInterface } from "../mail-provider.interface";
import nodemailer from 'nodemailer'
import { SentMessageInfo } from "nodemailer/lib/smtp-transport";

export class MailtrapMailProvider implements MailProviderInterface {
    
    constructor(
        private transporter?: nodemailer.Transporter<SentMessageInfo>
    ) {
        if (!transporter) {
        this.transporter = nodemailer.createTransport({
            host: "smtp.mailtrap.io",
            port: 2525,
            auth: {
              user: "1a860d258c7554",
              pass: "afb5e7c2ea792f"
            }
          })}
    }

    async sendMail(message: MessageInterface): Promise<void> {
        await this.transporter.sendMail({
            to: {
                name: message.to.name,
                address: message.to.email
            },
            from: {
                name: message.from.name,
                address: message.from.email
            },
            subject: message.subject,
            html: message.body
        })
    }
}