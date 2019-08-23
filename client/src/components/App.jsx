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
                <li><Link to="/posts" className="nav-link">Posts</Link></li>
                <li><Link to="/add" className="nav-link">Compose</Link></li>
              </ul>
            </div>
          </nav>
          <div>
            <h1 className="intro">About Me</h1>
            <p><strong>WELCOME!</strong> to my blog app. I built this app for myself mainly to explore new technologies. This blog was built on the M.E.R.N. Stack. Also known as MongoDb, Express.js, React.js, and Node.js stacked to accomplish this app. I think this is a great example of Create, Read, Update, and Delete CRUD application. With react routers I was able to accomplish creating a way to navigate to each of my tasks.</p>
          </div>
          <br/>
              <Route path="/posts" component={PostList} />
              <Route path="/edit/:id" component={EditPost}/>
              <Route path="/add" component={ComposePost}/>
      </div>
      </Router>
    );
  }
}

export default App;