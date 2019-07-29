import React from 'react';
import ComposePost from './ComposePost.jsx';
import EditPost from './EditPost.jsx';
import PostList from './PostList.jsx';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"; 
import "bootstrap/dist/css/bootstrap.min.css";
import '../styling/app.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {} 
  }

  render() {
    return (
      <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" className="navbar-brand"><h1>My Blog</h1></Link>
            <div className="collapse navbar-collapse">
              <ul className="nav navbar-nav navbar-right">
                <li><Link to="/" className="nav-link">Posts</Link></li>
                <li><Link to="/create" className="nav-link">Compose</Link></li>
              </ul>
            </div>
          </nav>
          <br/>
              <Route exact path="/" component={PostList} />
              <Route path="/edit/:id" component={EditPost}/>
              <Route path="/create" component={ComposePost}/>
      </div>
      </Router>
    );
  }
}
export default App;