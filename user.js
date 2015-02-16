var mongoose = require ('mongoose')
mongoose.connect('mongodb://localhost/posts_auth')

var user = mongoose.Schema({
    username: String,
    password: String
})

module.exports = mongoose.model('User', user)