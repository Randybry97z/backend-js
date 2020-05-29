const express = require('express')
const sqlite3 = require('sqlite3')
const bodyParser = require('body-parser')
const Sequelize = require('sequelize')
const methodOverride = require('method-override')
const session = require('express-session')
const socketio = require('socket.io');
const app = express()

const tasksRoutes = require('./routes/tasks_routes')
const registrationRoutes = require('./routes/registration_routes')
const sessionRoutes = require('./routes/sessions_routes')
const categoriesRoutes = require('./routes/categories_routes')


const findUserMiddleware = require('./middlewares/find_user')
const authUserMiddleware = require('./middlewares/auth_user')

app.use(bodyParser.urlencoded({extended: true}))
app.use(methodOverride('_method'))
app.set('view engine', 'pug')

app.use(session({
	secret: ['2312njwenrwjerw','12312ewdwifjsdfsd'],
	saveUninitialized: false,
	resave: false
}))

app.use(findUserMiddleware)
app.use(authUserMiddleware)

app.use(tasksRoutes)
app.use(registrationRoutes)
app.use(sessionRoutes)
app.use(categoriesRoutes)

app.get('/', function (req,res) {
	res.render('home', {user: req.user})
})
// POST rute?_method=PUT

let server = app.listen(3000)

let io = socketio(server)
let sockets = {}

let usersCount = 0;
io.on('connection', function (socket) {

	let userId = socket.request._query.loggeduser
	if (userId) sockets[userId] = socket
	console.log(sockets)
	//Actualiza usuarios conectados
	usersCount++;

	io.emit('count_updated',{count: usersCount})

	socket.on('new_task', function (data) {
		if (data.userId) {
			let userSocket = sockets[data.userId]
			if (!userSocket) return

			userSocket.emit('new_task',data)
		}
		io.emit('new_task',data)
	})

	socket.on('disconnect', function () {

		//Eliminar socket conectada
		Object.keys(sockets).forEach(userId=> {
			let s= sockets[userId]
			if (s.id == socket.id) sockets[userId] = null
		});

		console.log(sockets)

		usersCount--;
		io.emit('count_updated',{count: usersCount})
	})
})

const client = require('./realtime/client')

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