const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)


export default async (req, res) => {
    const body = JSON.parse(req.body);
    const message = `
    Name: ${body.name}\r\n
    Email: ${body.email}\r\n
    Message: ${body.message}
  `;

    await sgMail.send({
        to: 'dominik.kantorowicz@gmail.com',
        from: 'dominik.kantorowicz@gmail.com',
        subject: 'New Message!',
        text: message,
        html: message.replace(/\r\n/g, '<br>'),
    });

    res.status(200).json({ status: 'Ok' });
}