import React from 'react';
import axios from 'axios';

class EditPost extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      title: '',
      content: ''
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3000/posts/' + this.props.match.params.id)
      .then(res => {
        this.setState({
          title: res.data.title,
          content: res.data.content
        })
      })
      .catch(function(err) {
        console.log(err);
      });
  }

  onChangeTitle = (e) => {
    this.setState({
      title: e.target.value
    });
  };

  onChangeContent = (e) => {
    this.setState({
      content: e.target.value
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const obj = {
      title: this.state.title,
      content: this.state.content
    };

    axios.post("http://localhost:3000/posts/update/" + this.props.match.params.id, obj)
      .then(res => console.log(res.data));
  
    this.props.history.push('/posts')
  };

  render() {
    return (
      <div>
        <h3>Update Post</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Title: </label>
            <input type="text"
                    className="form-control"
                    value={this.state.title}
                    onChange={this.onChangeTitle}
            />
          </div>
          <div className="form-group">
            <label>Content: </label>
            <textarea rows="4" cols="50"
                    type="text"
                    className="form-control"
                    value={this.state.content}
                    onChange={this.onChangeContent}
            />
          </div>
          <br/>
          <div className="form-group">
            <input type="submit" value="Update Post" className="btn btn-primary" />
          </div>
        </form>
      </div>
    );
  }
}
export default EditPost;