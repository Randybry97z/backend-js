const express = require('express')
const sqlite3 = require('sqlite3')
const bodyParser = require('body-parser')
const Sequelize = require('sequelize')
const app = express()

app.use(bodyParser.urlencoded({extended: true}))

// const sequelize = new Sequelize('proyecto-backend',null,null,{
// 	dialect: 'sqlite',
// 	storage: './proyecto-backend'
// });
//let db = new sqlite3.Database('proyecto-backend')

app.use('view engine', 'pug')

app.post('/pendientes', function (req,res) {
	// db.run(`INSERT INTO tasks(description) VALUES('?')`,req.body.description)
	res.send("Consulta lista")
})

//db.run('CREATE TABLE tasks(id int AUTO_INCREMENT, description varchar(255))')

app.listen(3000)

// process.on('SIGINT',function () {
// 	console.log('Adios bby.')
// 	db.close()
// 	process.exit()
// })