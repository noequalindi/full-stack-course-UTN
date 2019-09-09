var nodemailer = require("nodemailer");

var smtpTransport = nodemailer.createTransport('smtps://user%40gmail.com:pass@smtp.gmail.com');

smtpTransport.sendMail({
   from: "Noelia Qualindi <noelia.qualindi@gmail.com>", // sender address
   to: "Noelia <noelia.qualindi@gmail.com>", // comma separated list of receivers
   subject: "Hello ✔", // Subject line
   text: "Prueba de envio con nodejs. Hello world ✔" // plaintext body
}, function(error, response){
   if(error){
       console.log(error);
   }else{
       console.log("Message sent: " + response.message);
   }
});