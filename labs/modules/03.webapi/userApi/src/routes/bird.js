
const { articles } = require('../dataBase')
const { comments } = require('../dataBase')
const db = require('../dataBase')
const router = require('express').Router()

// middleware that is specific to this router
router.use((req, res, next) => {
  console.log('Time: ', Date.now())
  next()
})

// define the home page route

router.route('/')
  .get((req, res) => {
  	res.send("Home Page");
  })

// define the about route
router.get('/about', (req, res) => {
  res.send('About birds')
})

// define a tets route
router.get('/test', (req,res) => {
  res.send('This is the test page')
})


// API List all articles

router.route('/articles')
  .get((req, res) => {
  	res.send(articles);
  })
  .post((req, res) => {
  	articles.push(req.body)
  	res.send(req.body)
  })

//API get an article by ID

router.route('/:articleId')
  .get((req, res) => {
  	const article = articles.find( article => article.id == req.params.articleId)
  	if (article) res.send(article)
  	else res.sendStatus(404)
  })

//API get all comments of the article with articleId

router.route('/:articleId/comments')
  .get((req, res) => {
    const article = articles.find( article => article.id == req.params.articleId)
  	if (article) {
      const comment = comments.filter( comment => article.id == req.params.articleId)
      if(comment) res.send(comment)
      else res.sendStatus(404)
    }
    
  	else res.sendStatus(404)
  })
  .post((req, res) => {
    comments.push(req.body)
  	res.send(req.body)
    
  })


//API get comment with commentId

router.route('/:articleId/comments/:commentId')
  .get((req, res) => {
    
  	const article = articles.find( article => article.id == req.params.articleId)
  	if (article) {
      const comment = comments.find( comment => comment.id == req.params.commentId)
      if(comment) res.send(comment)
      else res.sendStatus(404)
    }
    
  	else res.sendStatus(404)
  })

module.exports = router