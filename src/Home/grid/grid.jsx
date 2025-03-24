import "./grid.css";

function Grid() {
  const images = [
    { src: "gellary/gellary1.jpg", id: 1 },
    { src: "gellary/gellary2.jpg", id: 2 },

    { src: "gellary/gellary3.jpg", id: 3 },

    { src: "gellary/gellary4.jpg", id: 4 },

    { src: "gellary/gellary5.jpg", id: 5 },

    { src: "gellary/gellary6.jpg", id: 6 },

    { src: "gellary/gellary7.jpg", id: 7 },

    { src: "gellary/gellary8.jpg", id: 8 },

    { src: "gellary/gellary9.jpg", id: 9 },
  ];
  const image = images.map((e) => {
    return (
      <div key={e.id} className="gallery-item" id={`gallery-item${e.id}`}>
        <img src={e.src} />
      </div>
    );
  });
  return (
    <>
      <div id="cont">
        <p>Share your setup with</p>
        <h1>#FuniroFurniture</h1>
        <div id="gallery">{image}</div>
      </div>
    </>
  );
}
export default Grid;
