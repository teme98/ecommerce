import "./singleBlog.css";
import { BlogData } from "../../data/blogData";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

import ReplyIcon from "@mui/icons-material/Reply";
import GoldLine from "../../mainComponents/goldLine/goldLine";

function singleBlog() {
  const { id } = useParams();
  const singleProd = BlogData.find((p) => p.id == parseInt(id));

  return (
    <div>
      <div className="single-prod">
        <img src={singleProd.src} alt="" className="single-img-blog" />
        <h1>{singleProd.title}</h1>
        <p>{singleProd.dis}</p>

        <Link to="/Blog" className="btn-back-blog">
          <ReplyIcon /> Go Back
        </Link>
      </div>

      <GoldLine />
    </div>
  );
}

export default singleBlog;
