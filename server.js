const express = require('express')
const router = express.Router();
const cors = require('cors')
const nodemailer = require('nodemailer')
const dotenv = require('dotenv')
dotenv.config();

const { PORT, GMAIL_USERNAME, GMAIL_PASS } = process.env

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);



const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: GMAIL_USERNAME,
      pass: GMAIL_PASS,
    },
  });

  contactEmail.verify((error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Ready to Send");
    }
  });

  app.listen(PORT, () => console.log("Server Running"));