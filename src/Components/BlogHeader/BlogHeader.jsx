import React from "react";
import "./BlogHeader.scss";

function BlogHeader() {
  return (
    <>
      <div className="portHeader__container">
        <div className="loader_ load"></div>
        <p className="blogHeader__p">
          New post every week follow and share with loved ones
        </p>
        <h2 className="portHeader__header">Blog</h2>
      </div>
    </>
  );
}

export default BlogHeader;
