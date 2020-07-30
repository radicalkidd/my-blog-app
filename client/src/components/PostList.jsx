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
    <p>
      <Link to={"/edit/" + props.post._id}>Edit</Link>
    </p>
  </div>
)

class PostList extends React.Component {
  _isMounted = false;
  constructor(props) {
    super(props);
    this.state = {posts: []};
  }

  componentDidMount() {
    this._isMounted = true;
    axios.get('http://localhost:3000/posts/')
      .then(response => {
        if (this._isMounted) {
          this.setState({posts: response.data});
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  componentDidUpdate() {
    this._isMounted = true;
    axios.get('http://localhost:3000/posts/')
      .then(response => {
        if (this._isMounted) {
          this.setState({posts: response.data});
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  onDelete = (e) => {
    const postId = e.target.getAttribute('myId')
    axios.get('http://localhost:3000/posts/delete/'+postId)
      .then(console.log('Deleted the post!!!'))
      .catch(err => console.log(err))
  }

  postList = () => {
    return this.state.posts.map((currentPost, i) => {
      return <div key={`key-${i}`}>
              <Post post={currentPost} />
              <button myid={currentPost._id} onClick={this.onDelete} className="btn btn-danger">Delete</button>
            </div>
    });
  }

  render() {
    return (
      <div>
        <h1>What is Lorem Ipsum?</h1>
        <p>
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
        {this.postList()}
      </div>
    );
  }

}

export default PostList;