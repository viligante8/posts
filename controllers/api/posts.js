var Post = require('../../models/post')
var router = require('express').Router()
var ObjectId = require('mongodb').ObjectID

router.get('/api/posts', function (req, res, next) {
    Post.find()
        .sort('-date')
        .exec(function (err, posts) {
            if (err) {
                return next(err)
            }
            res.json(posts)
        })
})

router.post('/api/posts', function (req, res, next) {
    var post = new Post({
        userName: req.body.userName,
        body: req.body.body
    })

    post.save(function (err, post) {
        if (err) {
            return next(err)
        }

        res.status(200).json(post)
    })
})

router.delete('/api/posts', function (req, res, next) {
    Post.remove({_id: ObjectId(req.query.id)}, function (err) {
        if (err) {
            return next(err)
        }
        res.status(200).json('Post Deleted')
    })
})

module.exports = router