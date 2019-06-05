import React from "react";
import "./zodiac.scss";
import zodiacItems from "./zodiac-data";

const ZodiacItem = ({ img, title, index }) => {
  const length = zodiacItems.length;
  const radius = 40;
  const sector = 2; // 1 = half ; 0.25 = fourth
  const start = -0.565; //step = 0.65; half step = 0.125
  const side = -1; //1 = clockwise; -1 = counter-clockwise
  const style = {
    transform: ` rotate(${0}deg) translate(-50%, -50%) `,
    transformOrigin: "top",
    left: (50 - radius * side * Math.cos(start * Math.PI - sector * (1 / length) * index * Math.PI)).toFixed(4) + "%",
    top: (50 + radius * Math.sin(start * Math.PI - sector * (1 / length) * index * Math.PI)).toFixed(4) + "%"
  };
  return (
    <div className={`zodiac-item`} style={style}>
      <a className={`zodiac-link`} href={`#`}>
        <img className={`img-fluid`} src={img} alt={title}/>
      </a>
    </div>
  );
};

const Zodiac = () => {
  const renderTemplate = () => {
    return zodiacItems.map((item, index) =>
      <ZodiacItem
        {...item}
        index={index}
        key={item.title}/>
    );
  };

  return (
    <div className={`zodiac`}>
      {renderTemplate()}
    </div>
  );
};

export default Zodiac;