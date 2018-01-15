//Imports
const Posts = require('./posts.js')
const Comms = require('./comments.js')

//Initialization and datastructures
let store = {}
store.posts = [
    {
        "name": "Coach",
        "url": "http://www.colts.com/videos/videos/Colts-Owner-Jim-Irsay-Discusses-the-Process-of-Hiring-the-New-Head-Coach/d72c18c6-5f0b-49a3-8a1e-9eeafd0c2710",
        "text": "Colts Owner Jim Irsay Discusses the Process of Hiring the New Head Coach.",
        "comments": [
            { "text": "Colts Owner Jim Irsay Discusses the Process of Hiring the New Head Coach" },
            { "text": "Indianapolis Colts Owner Jim Irsay sits down with Colts Reporter Caroline Cann to discuss the process of hiring a new Head Coach, and what involvement General Manager Chris Ballard will have." }
        ]
    }]

module.exports.store = store

module.exports.Posts = Posts

module.exports.Comms = Comms