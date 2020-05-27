const express = require('express')
const sqlite3 = require('sqlite3')
const bodyParser = require('body-parser')
const Sequelize = require('sequelize')
const methodOverride = require('method-override')

const app = express()

const tasksRoutes = require('./routes/tasks_routes')

app.use(bodyParser.urlencoded({extended: true}))
app.use(methodOverride('_method'))
app.set('view engine', 'pug')

app.use(tasksRoutes)

// POST rute?_method=PUT

app.listen(3000)

/*const sequelize = new Sequelize('proyecto-backend',null,null,{
	dialect: 'sqlite',
	storage: './proyecto-backend'
});
let db = new sqlite3.Database('proyecto-backend')
*/

//app.get('/tasks', tasks.home)

/*app.post('/pendientes', function (req,res) {
	db.run(`INSERT INTO tasks(description) VALUES('?')`,req.body.description)
	res.send("Consulta lista")
})
*/
//db.run('CREATE TABLE tasks(id int AUTO_INCREMENT, description varchar(255))')


/*process.on('SIGINT',function () {
	console.log('Adios bby.')
	db.close()
	process.exit()
})*/