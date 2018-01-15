const PostsIndex = require('./index.js')
const Comments = require('./comments')

module.exports =
  {
    getPosts(req, res) {
      return res.status(200).send(PostsIndex.store.posts)
    },
    addPost(req, res) {
      PostsIndex.store.posts.push(req.body)
      return res.status(201).send({ id:PostsIndex.store.posts.length})
    },
    updatePost(req, res) {
      console.log(req.params.postId)
      PostsIndex.store.posts[req.params.postId] = req.body
      res.status(201).send(PostsIndex.store.posts[req.params.postId])
    },
    removePost(req, res) {
      PostsIndex.store.posts[req.params.postId].comments = []
      PostsIndex.store.posts.splice(req.params.postId, 1)
      res.sendStatus(204)
    }
  }  