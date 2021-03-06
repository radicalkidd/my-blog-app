import React from 'react';
import axios from 'axios';

class ComposePost extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      content: ''
    }
  }

  onChangeTitle = (e) => {
    this.setState({
      title: e.target.value
    });
  }

  onChangeContent = (e) => {
    this.setState({
      content: e.target.value
    });
  }

  onSubmit = (e) => {
    e.preventDefault()
    console.log("Form Submitted");

    const newPost = {
      title: this.state.title,
      content: this.state.content
    }

    axios.post('http://localhost:3000/posts/add', newPost)
      .then(res => console.log(res.data));

    this.setState({
      title: '',
      content: ''
    });

    this.props.history.push('/posts')
  }

  render() {
    return (
      <div style={{marginTop: 10}}>
      <h3>Create New Todosssss</h3>
      <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
              <label>Title: </label>
              <input  type="text"
                      className="form-control"
                      value={this.state.title}
                      onChange={this.onChangeTitle}
                      />
          </div>
          <div className="form-group" rows="4" cols="50">
              <label>Content: </label>
              <textarea 
                      rows="4" cols="50" 
                      type="text" 
                      className="form-control"
                      value={this.state.content}
                      onChange={this.onChangeContent}
                      />
          </div>
          <div className="form-group">
              <input type="submit" value="Post" className="btn btn-primary" />
          </div>
      </form>
      </div>
    );
  }
}

export default ComposePost;