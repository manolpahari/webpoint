const nodemailer = require('nodemailer');

const handleFormSubmit = (req, res) => {
    console.log(req.body);
    const {name, email, company, message} = req.body;
    const notifyUser = `
                <body bgcolor="#FFFFFF">
                <table width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#F0F8FC">
                <tr>
                    <td>
                
                        <table width="600" align="center" cellpadding="0" cellspacing="0" border="0" bgcolor="#ffffff">
                        <tr>
                            <td colspan="3"><a href="http://www.webpoint.io"><img 
                                style="display:block;border:0;outline:none;-ms-interpolation-mode:bicubic;" 
                                src="http://webpoint.io/dist/images/email-header.png" width="600" height="60" alt="Header" /></a>
                            </td>
                            <tr>
                                <td></td>
                            </tr>
                        </tr>
                        <tr>
                            <td width="20"></td>
                            <td style="font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#000001;">
                            <p>You have a new contact request.</p>
                            <h3>Contact Details</h3>
                            
                            <ul>
                                <li>Name: ${name}</li>
                                <li>Email: ${email}</li>
                                <li>Company: ${company}</li>
                            </ul>
                            <h3>Message</h3>
                            <p>${message}</p>
                            
                            Best wishes,<br/>
                            The WebPoint Team
                            </td>
                            <tr>
                                <td></td>
                            </tr>
                        </tr>
                        <tr>
                            <td colspan="3"><a href="http://webpoint.io"><img 
                                style="display:block;border:0;outline:none;-ms-interpolation-mode:bicubic;" 
                                src="http://webpoint.io/dist/images/email-footer.png" width="600" height="60" alt="Footer" /></a>
                            </td>
                            <tr>
                                <td></td>
                            </tr>
                        </tr>
                        </table>
                    </td>
                </tr>
            </table>
            </body>
        `;
            // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            host: "mail.webpoint.io",
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
            user: 'noreply@webpoint.io', // generated ethereal user
            pass: '-GiqJG&0mime' // generated ethereal password
            },
            tls:{
                rejectUnauthorized:false
            }
        });

        // setup email data with unicode symbols
        let mailOptions = {
            from: '"webpoint.io" <noreply@webpoint.io>', // sender address
            to: email, // list of receivers
            subject: "New Contact Request Submitted", // Subject line
            text: "Hello world?", // plain text body
            html: notifyUser // html body
        };

        // send mail with defined transport object
        let info = transporter.sendMail(mailOptions, (error, info) => {
            if(error) {
                return console.log(error);
            }
            console.log("Message sent: %s", info.messageId);
            res.render('index')
        })
       
}

module.exports = {
    handleFormSubmit: handleFormSubmit
}