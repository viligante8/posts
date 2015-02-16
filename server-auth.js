var express = require('express')
var jwt = require('jwt-simple')
var _ = require('lodash')
var bcrypt = require('bcrypt')
var User = require('./user')
var app = express()

app.use(require('body-parser').json())

var users = [{ username: 'viligante8', password: '$2a$10$zCsmAFYcO7kqyDEZSY3NY.HICis6TLFuI767ZjrCuKbFwe2GDazWC'}]
var secretKey = 'supersecretkey'

findUserByUsername = function(userName) {
    return _.find(users, { username: userName })
}

validateUser = function(user, password, callback) {
    return bcrypt.compare(password, user.password, callback)
}

app.post('/session', function(req, res, next){
    User.findOne({ username: req.body.username }, function(err, user) {
        if(err) { return next(err) }
        if(!user) { return res.send(401) }

        bcrypt.compare(req.body.password, user.password, function(err, valid) {
            if(err) { return next(err) }
            if(!valid) { return res.send(401)}

            var token = jwt.encode({ username: user.username }, secretKey)
            res.json(token)
        })
    })
})

app.get('/user', function(req, res){
    var token = req.headers['x-auth']
    var auth = jwt.decode(token, secretKey)

    User.findOne({ username: auth.username }, function(err, user) {
        res.json(user)
    })
})

app.post('/user', function(req, res, next){
    var user = new User( { username: req.body.username } )

    bcrypt.hash(req.body.password, 10, function(err, hash) {
        user.password = hash
        user.save(function(err) {
            if(err) { throw next(err) }
            res.send(200)
        })
    })
})

app.listen(3000)