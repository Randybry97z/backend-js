const Task = require('../models').Task

module.exports = {
	index: function (req,res) {
		Task.findAll().then((tasks)=>{
			res.render('tasks/index',{tasks: tasks})
		})
	},
	show: function (req,res) {
		Task.findByPk(req.params.id).then(function (task) {
			res.render('tasks/show', {task})
		})
	},
	create: function (req,res) {
		Task.create({
			description: req.body.description
		}).then(result=>{
			res.json(result)
		}).catch(err=>{
			console.log(err)
			res.json(err)
		})
	},
	new: function(req,res){
		res.render('tasks/new')
	}
}
	/*home: function (req,res) {
		Task.findAll().then(function (tasks) {
			//Buscar index en carpeta tasks de views
			res.render('tasks/index', {tasks: tasks})
		})
	}*/