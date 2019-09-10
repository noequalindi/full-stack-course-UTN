const nodemailer = require('nodemailer')
const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const server = express();
//process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

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
	const output =  `<p>Nuevo mensaje desde el sitio web</p>
	<h3>Detalles del contacto</h3>
	<ul>  
	  <li>Nombre: ${req.body.name}</li>
	  <li>Empresa: ${req.body.company}</li>
	  <li>Email: ${req.body.email}</li>
	  <li>Tel: ${req.body.phone}</li>
	</ul>
	<h3>Mensaje</h3>
	<p>${req.body.message}</p>
   `;

	var transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
					 user: 'noelia.qualindi@gmail.com',
					 pass: 'pass'
			 }
	 });
	 
	 const mailOptions = {
		 from: 'noelia.qualindi@gmail.com', // direccion de correo
		 to: 'noelia.qualindi@gmail.com, noelia.qualindi@web.com', // lista de destinatarios
		 subject: 'Mensaje desde la pagina web', // asunto
		 html: output// texto del correo
	 };
	 
	 transporter.sendMail(mailOptions, function (err, info) {
			if(err)
				console.log(err)
			else
				console.log(info);
				res.render(path.join(__dirname + '/public/redirect.html'));
	 });
 
})

server.listen(8888, () => console.log('Servidor iniciado...'));
