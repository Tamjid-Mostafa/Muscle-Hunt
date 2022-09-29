import React from "react";
import './Blog.css';
const Blog = () => {
  return (
    <div className="blog">
      <h3>How does React works?</h3>
      <p>
        React components work similarly to JavaScript functions as they accept
        arbitrary inputs called properties or props. It's possible to have as
        many components as necessary without cluttering your code.
      </p>
      <h3>Difference between Props and State</h3>
      <p>
        Props are used to pass data from one component to another. The state is
        a local data storage that is local to the component only and cannot be
        passed to other components.
      </p>
      <h3>How does React works?</h3>
      <p>
        React components work similarly to JavaScript functions as they accept
        arbitrary inputs called properties or props. It's possible to have as
        many components as necessary without cluttering your code.
      </p>
    </div>
  );
};

export default Blog;
