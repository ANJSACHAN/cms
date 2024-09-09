function AddPost() {
    return (
      <div className="post-title-input">
        <input type="text" id="post-title-input-1" placeholder="Add a post title" />
        <textarea rows={10} cols={50} id="post-title-input-2" placeholder="Start writing or type '/' to insert a block"/>
        <button id="post-publish-btn">Publish</button>
      </div>
    );
  }
  
  export default AddPost;