import React, { useState } from "react";

const UserInput = ({ getAuthor, getTitle, getContent }) => {
  let [post, setPost] = useState();

  return (
    <>
      <form>
        <h2>
          Name:
          <input
            type="text"
            onChange={(e) => {
              let author = e.target.value;
              getAuthor(author);
            }}
          />
        </h2>
        <h2>
          Title:
          <input
            type="text"
            onChange={(e) => {
              getTitle(e.target.value);
            }}
          />{" "}
        </h2>
        <h2>
          Comment:
          <input
            type="text"
            onChange={(e) => {
              console.log(e.target.value);
              getContent(e.target.value);
            }}
          />
        </h2>
      </form>
    </>
  );
};

export default UserInput;
