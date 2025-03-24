import "./blog.css";
import { BlogData } from "../data/blogData";
import { Link } from "react-router-dom";
import { useState } from "react";
import Pagination from "./Pagination";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import TextField from "@mui/material/TextField";

function Blog() {
  const [currentPost, setNewPost] = useState("");

  const postBlog = BlogData.filter((i) => {
    return currentPost.toLowerCase() === ""
      ? i
      : i.title.toLowerCase().includes(currentPost.toLowerCase());
  }).map((e) => {
    return (
      <div className="every-ost-blog" key={e.id}>
        <img src={e.src} alt={e.title} className="image-blog" />
        <div className="blog-icons">
          <div className="icons-blog-dev">
            <p className="icons-blog-parg">{e.icon1}</p>
            <p>{e.iconText1}</p>
          </div>
          <div className="icons-blog-dev">
            <p className="icons-blog-parg">{e.icon2}</p>
            <p>{e.iconText2}</p>
          </div>
          <div className="icons-blog-dev">
            <p className="icons-blog-parg">{e.icon3}</p>
            <p>{e.iconText3}</p>
          </div>
        </div>
        <h1 className="blog-title">{e.title}</h1>
        <div className="blog-dis">{e.dis}</div>
        <Link to={`/singleBlog/${e.id}`}>
          <button className="read-more-blog">Read More</button>
        </Link>
      </div>
    );
  });

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(2);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = postBlog.slice(firstPostIndex, lastPostIndex);

  return (
    <>
      <div className="background-blog-header">
        <div id="backgrond-contact">
          <div id="contact-icon">
            <img src="../public/logoHd.svg" />
          </div>
          <h2>BLOG</h2>
          <div id="cont-contact">
            <Link id="link-line" to="/">
              <div id="contact-link">Home</div>
            </Link>
            <span>
              <ArrowForwardIosIcon />
            </span>
            <p style={{ color: "black" }}>Blog</p>
          </div>
        </div>
      </div>
      <div className="big-blog">
        <div className="blog-cont">
          {currentPosts}{" "}
          <Pagination
            totalPostsIndex={postBlog.length}
            PostsPerPage={postsPerPage}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
        </div>
        <div className="recent-post-blog">
          <TextField
            onChange={(e) => {
              setNewPost(e.target.value);
            }}
            id="outlined-basic"
            className="search-blog"
            label="Search"
          />
        </div>
      </div>
    </>
  );
}

export default Blog;
