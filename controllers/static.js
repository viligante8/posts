var express = require('express')
var router = express.Router()

router.get('/', function(req, res){
    var options = { root: __dirname + '/../' }
    res.sendFile('layouts/posts.html', options)
})

router.use(express.static(__dirname + '/../assets'))

module.exports = router



var options = { root: __dirname + '/public/' }