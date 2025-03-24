import "./pagination.css";

function Pagination({
  totalPostsIndex,
  PostsPerPage,
  setCurrentPage,
  currentPage,
}) {
  let posts = [];

  for (let i = 1; i <= Math.ceil(totalPostsIndex / PostsPerPage); i++) {
    posts.push(i);
  }

  return (
    <div>
      {posts.map((post, index) => {
        return (
          <button
            id="btn-pagin"
            style={{ margin: "20px" }}
            onClick={() => setCurrentPage(post)}
            key={index}
            className={post == currentPage ? "active" : ""}
          >
            {post}
          </button>
        );
      })}
    </div>
  );
}

export default Pagination;
