const express = require('express')

const app = express()

app.get('/', function (req,res) {
	//res.sendFile("index.html")
	res.send(__dirname)
})

app.listen(3000)