const Article = require('../models/article');
const mongoose = require('mongoose');


//display list of all articles
exports.ArticleList = (req, res) => {

  Article.find({}, (err, articles) => {
    if (err) {
      return done(err);
    } else {
      res.send(articles);
    }
  });
}

exports.GetArticle = (req, res) => {
  Article.findById(req.params.id, (err, article) => {
    if (err)
      return done(err);
    else {
      res.send(article);
    }
  });
}
