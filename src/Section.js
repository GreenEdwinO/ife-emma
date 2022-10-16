import React from "react";

export default function Section(IfeThings) {
  return (
    <header className="Section-body">
      <div className="Section-face">
        {/* <div className="Section-body1"> */}
        <div className="img-wrapper">
          <img
            src={IfeThings.imgUrl}
            className="imge"
            alt=""
          />
        </div>
      </div>
      <div className="Section-body2">
        <h5 className="section1">{IfeThings.title}</h5>
        <h3 className="section2"><img src="./images/calen.png" className="material-icons" alt="" /> {IfeThings.date}</h3>
        <h3 className="section3"><img src="./images/locat.png" className="material-icons" /> {IfeThings.location}</h3>
        <h3 className="section4">💌 {IfeThings.discription}</h3>
      </div>
    </header>
  );
}

// 📅 🌍