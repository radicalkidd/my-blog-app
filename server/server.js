const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const postRoutes = express.Router();
const port = 3000;

const Post = require('./post.model');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname +'/../client/dist/'));

mongoose.connect("mongodb://localhost:27017/blogDB", { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
  console.log("MongoDB connected successfully");
});

postRoutes.route('/').get(function(req, res) {
  Post.find(function(err, journal) {
    if(err) {
      console.log(err);
    } else {
      res.json(journal);
    }
  });
});

postRoutes.route('/:id').get(function(req, res) {
  let id = req.params.id;
  Post.findById(id, function(err, post) {
      res.json(post);
  });
});

postRoutes.route('/update/:id').post(function(req, res) {
  Post.findById(req.params.id, function(err, post) {
      if (!post) {
          res.status(404).send("data is not found");
      } else {
          post.title = req.body.title;
          post.content = req.body.content;

          post.save().then(post => {
              res.json('Post updated!');
          })
          .catch(err => {
              res.status(400).send("Update not possible");
          });
        }
  });
});

postRoutes.route('/add').post(function(req, res) {
  let post = new Post(req.body);
  post.save()
      .then(post => {
          res.status(200).json({'post': 'post added successfully'});
      })
      .catch(err => {
          res.status(400).send('adding new post failed');
      });
});

app.use('/posts', postRoutes);

app.listen(port, () => console.log(`App is listening on port ${port}!`));