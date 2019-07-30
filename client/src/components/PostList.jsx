import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Timestamp from 'react-timestamp';
import "bootstrap/dist/css/bootstrap.min.css";

const Post = props => (
  <div className="col-sm-9">
    <h4><small>RECENT POSTS</small></h4>
    <hr></hr>
    <h2>{props.post.title}</h2>
    <h5><span className="glyphicon glyphicon-time"><h6><Timestamp /></h6></span>by Vu Huynh</h5>
    <p>{props.post.content}</p>
    <p><Link to={"/edit/" + props.post._id}>Edit</Link></p>
  </div>
)

class PostList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {posts: []};
  }

  componentDidMount() {
    axios.get('http://localhost:3000/posts/')
      .then(response => {
        this.setState({posts: response.data});
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  postList() {
    return this.state.posts.map(function(currentPost, i) {
      return <Post post={currentPost} key={i} />
    });
  }

  render() {
    return (
      <div>
        {this.postList()}
      </div>
    );
  }
}
export default PostList;