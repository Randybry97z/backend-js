const express = require('express')

const app = express()

app.set('view engine','ejs')

app.use('/public',express.static('assets',{
	etag: false,
	maxAge: '5h' //Tiempo de vigencia de cache
})) //middleware

app.get('/', function (req,res) {
	res.render('index')
})

app.listen(3000)