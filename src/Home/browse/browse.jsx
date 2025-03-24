import "./browse.css";

function Browse() {
  return (
    <>
      <div id="browse">
        <h2>Browse The Range</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

        <div id="browse-img">
          <div id="cent">
            <img className="img-browse" src="../public/browse/Dining.png" />
            <p>Dining</p>
          </div>
          <div id="cent">
            <img className="img-browse" src="../public/browse/Living.png" />
            <p>Living</p>
          </div>
          <div id="cent">
            <img className="img-browse" src="../public/browse/Bedroom.png" />
            <p>Bedroom</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Browse;
