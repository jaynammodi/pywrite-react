import React from "react";
import useWave from "use-wave";

import moneyimg from "../Assets/Money_Flat_Icon.png";

function Button() {
  const wave = useWave();
  return (
    <button ref={wave} className="btn btn-block btn-primary btn-lg custom-btn">
      <img className="moneyimg" src={moneyimg} alt="" />
      Upload .docx File
    </button>
  );
}

export default Button;
