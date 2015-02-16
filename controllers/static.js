var express = require('express')
var router = express.Router()

router.get('/', function(req, res){
    var options = { root: __dirname + '/../' }
    res.sendFile('layouts/app.html', options)
})

router.use(express.static(__dirname + '/../assets'))
router.use(express.static(__dirname + '/../templates'))

module.exports = router



var options = { root: __dirname + '/public/' }