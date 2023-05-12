/* eslint-disable */
const dotenv = require("dotenv");
dotenv.config({path : `${__dirname}/.env`})
module.exports = {
    mailer: {
      CLIENT_ID: process.env.CLIENT_ID,
      CLIENT_SECRET: process.env.CLIENT_SECRET,
      REDIRECT_URL: process.env.REDIRECT_URL,
      REFRESH_TOKEN: process.env.REFRESH_TOKEN,
    },
  };