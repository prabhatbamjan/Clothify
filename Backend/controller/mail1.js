const nodemailer = require('nodemailer');

const sendMail = (req, res) => {
    let mailTransporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'boylama846@gmail.com',
            pass: 'tosd slpv wmpw oosl'
        }
    });

    let mailDetails = {
        from: req.body.email,
        to: 'boylama846@gmail.com',
        subject: req.body.subject,
        text: req.body.message 
    };

    mailTransporter.sendMail(mailDetails, (err, data) => {
        if (err) {
            res.status(500).send(err); 
        } else {
            res.status(200).send();
        }
    });
};

module.exports = { sendMail }; // Corrected module.exports syntax
