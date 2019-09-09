var http=require('http');
var url=require('url');
var fs=require('fs');
var mime=require('mime');

const nodemailer = require('nodemailer')
const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const server = express();

server.engine('html', require('ejs').renderFile);

server.set('view engine', 'html');
server.set('public', __dirname)
// Carpeta static -> public
server.use('/', express.static(__dirname + '/public')) //para que encuentre la carpeta public siempre. ******
// Body parser
server.use(bodyParser.urlencoded({extended: false}))
server.use(bodyParser.json())

server.get('/', (request, response) => {
	response.sendFile(path.join(__dirname + '/public/index.html'))
})

server.post('/send', (req, res) => {
	const output =  `p>You have a new contact request</p>
	<h3>Contact Details</h3>
	<ul>  
	  <li>Name: ${req.body.name}</li>
	  <li>Company: ${req.body.company}</li>
	  <li>Email: ${req.body.email}</li>
	  <li>Phone: ${req.body.phone}</li>
	</ul>
	<h3>Message</h3>
	<p>${req.body.message}</p>
   `;
   
   let transporter = nodemailer.createTransport({
	   host: 'mail.YOURDOMAIN.com',
	   port: 587,
	   secure: false, // true for 465, false for other ports
	   auth: {
		   user: 'YOUREMAIL', // generated ethereal user
		   pass: 'YOURPASSWORD'  // generated ethereal password
	   },
	   tls:{
		 rejectUnauthorized:false
	   }
	 });
	 // setup email data with unicode symbols
	 let mailOptions = {
	   from: '"Nodemailer Contact" <your@email.com>', // sender address
	   to: 'RECEIVEREMAILS', // list of receivers
	   subject: 'Node Contact Request', // Subject line
	   text: 'Hello world?', // plain text body
	   html: output // html body
   };
   transporter.sendMail(mailOptions, (error,info) => {
	  if(error){
		  console.log(error);
	  } 
	  console.log('Message sent: %s', info.messageId);   
	  console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
	  res.sendFile('/public/pagina4.html', { msg:'Email has been sent'});
   
   });
   
})
server.listen(8888, () => console.log('Servidor iniciado...'));
/*var servidor = http.createServer(function(pedido,respuesta){
    var objetourl = url.parse(pedido.url);
	var camino='public'+objetourl.pathname;
	if (camino=='public/')
		camino='public/index.html';
 	fs.exists(camino,function(existe){
	    if (existe) {
		    fs.readFile(camino,function(error,contenido){
				if (error) {
			        respuesta.writeHead(500, {'Content-Type': 'text/plain'});
				    respuesta.write('Error interno');
				    respuesta.end();					
				} else {
					var tipo=mime.lookup(camino);
					console.log(tipo);
			        respuesta.writeHead(200, {'Content-Type': tipo});
				    respuesta.write(contenido);
				    respuesta.end();
				}
			});
		} else {
            respuesta.writeHead(404, {'Content-Type': 'text/html'});
            respuesta.write('<!doctype html><html><head></head><body>Recurso inexistente</body></html>');		
			respuesta.end();
		}
	});
}); 
servidor.listen(8888, () => console.log('Servidor iniciado...'));
*/



