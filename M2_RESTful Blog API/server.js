//Imports
const Express = require('express')
const BodyParser = require('body-parser')
const Morgan = require('morgan')
const EventHandler = require('errorhandler')
const Main = require('./routes')

//Instantiations
const app = Express()
app.use(BodyParser.json())
app.use(Morgan('dev'))
app.use(EventHandler())

//Routes
app.get('/posts',
    (req, res) => {        
        Main.Posts.getPosts(req, res)
    })

app.post('/posts',
    (req, res) => {
        Main.Posts.addPost(req, res)
    })

app.put('/posts/:postId',
    (req, res) => {
        Main.Posts.updatePost(req, res)
    })

app.delete('/posts/:postId',
    (req, res) => {
        Main.Posts.removePost(req, res)
    })

app.get('/posts/:postId/comments',
    (req, res) => {
        Main.Comms.getComments(req, res)
    })

app.post('/posts/:postId/comments',
    (req, res) => {
        Main.Comms.addComment(req, res)
    })

app.put('/posts/:postId/comments/:commentId',
    (req, res) => {
        Main.Comms.updateComment(req, res)
    })

app.delete('/posts/:postId/comments/:commentId',
    (req, res) => {
        Main.Comms.removeComment(req, res)
    })
    
app.listen(3000)