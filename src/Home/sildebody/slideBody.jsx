import "./slideBody.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
function SlideBody() {
  const images = [
    {
      url: "/slide/second.jpg",
      id: 1,
    },
    {
      url: "/slide/third.jpg",
      id: 2,
    },
    {
      url: "/slide/fourth.jpg",
      id: 3,
    },
    {
      url: "/slide/fifth.jpg",
      id: 4,
    },
    {
      url: "/slide/sixth.jpg",
      id: 5,
    },
  ];
  return (
    <>
      <div id="slide-body">
        <div id="text-slide">
          <h1>50+ Beautiful rooms inspiration</h1>
          <p>
            Our designer already made a lot of beautiful prototipe of rooms that
            inspire you
          </p>
          <Link to="/Shopping">
            <button id="btn-slide">Explore More</button>
          </Link>
        </div>
        <div id="arrow"></div>
        <motion.div id="slide-oned">
          <motion.div
            drag="x"
            dragConstraints={{ left: -900, right: 750 }}
            id="slide-one"
          >
            {images.map((e) => {
              return (
                <motion.div id="cont-img" key={e.id}>
                  <img src={e.url} />
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}

export default SlideBody;
