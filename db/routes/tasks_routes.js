const express = require('express')

let router = express.Router()

router.route('/tasks').get(function (req,res) {
	res.send('Hola desde subruta')
}).post(function (req,res) {

})

module.exports = router