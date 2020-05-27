const Task = require('../models').Task

module.exports = {
	home: function (req,res) {
		Task.findAll().then(function (tasks) {
			//Buscar index en carpeta tasks de views
			res.render('tasks/index', {tasks: tasks})
		})
	}
}