import React from 'react';
import './create.css';

const Create = () => {
  return (
    <div className='post-page-header'>
      <h2><strong>POST</strong></h2>
      <span>Create, edit, and manage the posts on your site.</span>
      <a href="./">Learn More</a>
      <div className="status-bar">
        <div className="status-bar-post" id="status-bar-1">
          <div><button>Published (0)</button></div>
          <div><button>Drafts (0)</button></div>
          <div><button>Scheduled (0)</button></div>
          <div><button>Binned (0)</button></div>
        </div>
        <div className="search-icon">🔍</div>
      </div>

      <div className="status-bar">
        <div className="status-bar-post">
          <div className="create-new-post-div">Post</div>
        </div>
        <button className="create-new-post-btn">Add a new post</button>
      </div>

      <div className="no-post-found">
        <img 
          id="no-post-found-img" 
          src="https://wordpress.com/calypso/images/pages/illustration-pages.svg" 
          alt="No posts found" 
        />
        <h2 id="no-post-found-h2">No Post Found!</h2>
        <button id="no-post-found-btn">Add a new post</button>
      </div>
    </div>
  );
};

export default Create;
