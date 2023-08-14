// functions/submitForm.js
const nodemailer = require('nodemailer');

exports.handler = async function (event) {
    const { name, email, message } = JSON.parse(event.body);

    const transporter = nodemailer.createTransport({
        // Set up your email transport configuration here
    });

    try {
        await transporter.sendMail({
            from: email,
            to: 'MagicPuddle@pm.me',
            subject: 'New Contact Form Submission',
            text: `${name} sent a message: ${message}`,
        });

        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Form submitted successfully' }),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Error submitting form' }),
        };
    }
};
