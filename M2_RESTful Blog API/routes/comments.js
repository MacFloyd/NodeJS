const PostsIndex = require('./index.js')

module.exports = {
    getComments(req, res) {        
        res.status(200).send(PostsIndex.store.posts[req.params.postId].comments)
    },
    addComment(req, res) {
        if (PostsIndex.store.posts[req.params.postId].comments === undefined)
        {
            PostsIndex.store.posts[req.params.postId].comments = []
        }
        PostsIndex.store.posts[req.params.postId].comments.push(req.body)
        res.status(201).send(PostsIndex.store.posts[req.params.postId].comments)
    },
    updateComment(req, res) {        
        PostsIndex.store.posts[req.params.postId].comments[req.params.commentId] = req.body
        res.status(201).send(PostsIndex.store.posts[req.params.postId].comments[req.params.commentId])
    },
    removeComment(req, res) {
        PostsIndex.store.posts[req.params.postId].comments.splice(req.params.commentId, 1)
        res.sendStatus(204)
    }
}