import React from "react";
// import locat from "/images/locat.png"

export default function Section(IfeThings) {
  return (
    <header className="Section-body">
      <div className="Section-face">
        <div className="Section-body1">
          <img
            src={IfeThings.imgUrl}
            className="imge"
          />
        </div>
      </div>
      <div className="Section-body2">
        <h3 className="section1">{IfeThings.title}</h3>
        <h3 className="section2"><img src="./images/calen.png" className="material-icons"/> {IfeThings.date}</h3>
        <h3 className="section3"><img src="./images/locat.png" className="material-icons"/> {IfeThings.location}</h3>
        <h3 className="section4">💌 {IfeThings.discription}</h3>
      </div>
    </header>
  );
}

// 📅 🌍