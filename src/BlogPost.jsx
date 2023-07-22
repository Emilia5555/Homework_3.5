import React, { useState } from "react";
import UserInput from "./UserInput";

const BlogPost = ({ addToList }) => {
  let [author, setAuthor] = useState("");
  let [title, setTitle] = useState("");
  let [content, setContent] = useState("");

  function getAuthor(author) {
    setAuthor(author);
  }

  function getTitle(title) {
    setTitle(title);
  }

  function getContent(content) {
    setContent(content);
  }

  function handleSubmit(e) {
    e.preventDefault();
    let post = { author, title, content };
    addToList(post);

    setAuthor("");
    setContent("");
    setTitle("");
  }

  return (
    <>
      <UserInput
        getAuthor={getAuthor}
        getTitle={getTitle}
        getContent={getContent}
      ></UserInput>
      <form onSubmit={handleSubmit}>
        <button>Submit Post</button>
      </form>
    </>
  );
};

export default BlogPost;
