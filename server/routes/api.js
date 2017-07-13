const express = require('express');
const router = express.Router();
var articleController = require('../controllers/articleController');

const axios = require('axios');

// get api Listening
router.get('/', (req, res) => {
  res.send('api works');
});

router.get('/articles', articleController.ArticleList);

router.get('/articles/:id', articleController.GetArticle);

module.exports = router;
