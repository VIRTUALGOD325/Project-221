const express = require("express");
const app = express();
const server = require("http").Server(app);
app.use(express.json())

server.listen(process.env.PORT || 3030);


var nodeMailer = require("nodemailer");

const transporter = nodeMailer.createTransport({
    port:465,
    host:"stmp.gmail.com",
    auth:{
        user:'',
        password:''
    },
    secure: true
})


