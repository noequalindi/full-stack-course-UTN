const express = require('express')
const app = express();
const morgan = require('morgan')

app.set('port', process.env.port || 3000);

app.use(morgan('dev'));
app.use(express.json())
app.use(express.urlencoded({extended:false}));


app.set('json spaces',2)

app.use('/api/productos',require('./routes/index.js'))

app.listen(app.get('port'), () => {
    console.log(`Server en puerto" +${app.get('port')}`)
})