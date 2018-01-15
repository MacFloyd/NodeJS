curl -H "Content-Type: application/json" -X POST -d '{"name": "Top 10 ES6 Features every Web Developer must know", "url":"https://webapplog.com/es6", "text": "his essay will give you a quick introduction to ES6. If you don’t know what is ES6, it’s a new JavaScript implementation."}'  http://localhost:3000/posts
curl -H "Content-Type: application/json" -X POST -d '{"name": "Top 10 ES6 Features", "url":"http://webapplog.com/es6", "text": ""}'  http://localhost:3000/posts

curl -H 'Content-Type: application/json' -X POST -d '{"text": "I think you''re undervaluing the benefit of ''let'' and ''const''"}' http://localhost:3000/posts/1/comments
curl -H 'Content-Type: application/json' -X POST -d '{"text": "Cruel.var { house, mouse} = No type optimization at all"}' http://localhost:3000/posts/1/comments
curl -H 'Content-Type: application/json' -X POST -d '{"text": "(p1,p2)=>{ … } ,i understand this ,thank you !"}' http://localhost:3000/posts/1/comments

curl -H 'Content-Type: application/json' -X PUT -d '{"text": "(a1,a2)=>{ ... }, i understand this, Thank You!"}' http://localhost:3000/posts/1/comments/2

curl -H 'Content-Type: application/json' -X POST -d '{"text": "I think you''re undervaluing the benefit of ''let'' and ''const''"}' http://localhost:3000/posts/2/comments
curl -H 'Content-Type: application/json' -X POST -d '{"text": "Cruel... .var { house, mouse} = No type optimization at all"}' http://localhost:3000/posts/2/comments
curl -H 'Content-Type: application/json' -X POST -d '{"text": "(p1,p2)=>{ … } ,i understand this ,thank you !"}' http://localhost:3000/posts/2/comments

curl -H 'Content-Type: application/json' -X PUT -d '{"text": "(p1,p2)=>{...}, I understand this, thank you!"}' http://localhost:3000/posts/2/comments/2

curl -H 'Content-Type: application/json' -X GET http://localhost:3000/posts/1/comments

curl -H 'Content-Type: application/json' -X DELETE http://localhost:3000/posts/1/comments/1

curl -H 'Content-Type: application/json' -X DELETE http://localhost:3000/posts/1


