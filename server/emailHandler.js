const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const config = require("./config");
const oAuth2client = new google.auth.OAuth2(
  config.mailer.CLIENT_ID,
  config.mailer.CLIENT_SECRET,
  config.mailer.REDIRECT_URL
);
oAuth2client.setCredentials({ refresh_token: config.mailer.CLIENT_ID   });
module.exports.emailHandle = async (req, res) => {
  const { name, email, comment } = req.body;
 console.log("Logb ",name);
 console.log(config.mailer.REFRESH_TOKEN)
  try {
    const accessToken = await oAuth2client.getAccessToken();
    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: "sanjubalasubramani@gmail.com",
        clientId: config.mailer.CLIENT_ID,
        clientSecret: config.mailer.CLIENT_SECRET,
        refreshToken: config.mailer.REFRESH_TOKEN,
        accessToken: accessToken,
      },
      connectionTimeout: 5 * 60 * 1000,
    });
    const mailOptions = {
      from: " Sanju Balasubramani<sanjubalasubramani@gmail.com>",
      to: "sanjeevb.20cse@kongu.edu",
      subject: "From Contact Us Website",
      // text: `Name ${contactData.text}`,
      html: `Name : ${name}  Comment : ${comment}`,
      replyTo: `${email}`,
    };
    const result = await transport.sendMail(mailOptions);
    console.log("Rsult : ", result);
    res.status(200).json({
      status: "success",
      message: "Email Sent",
    });
  } catch (error) {
    console.log(error )
    res.status(400).json({
      status: "failed",
      message: "Email Not Sent + " + error.code,
    });
  }
};