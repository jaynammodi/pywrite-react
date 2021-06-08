import React from "react";

import Navigationbar from "./Navigationbar";
import Button from "./Button";

import logoimg from "../Assets/logolg.png";

function Home() {
  return (
    <div>
      <Navigationbar />
      <div className="row">
        <h1 className="col-8">
          Welcome to Pywrite.<span className="red">*</span>
        </h1>
        <img
          src={logoimg}
          className="col-4 Logobig"
          alt="React Bootstrap logo"
        />
      </div>
      <h3>
        Let’s Face it, we all know why you’re here. The last thing you need on
        your mind during a *GLOBAL PANDEMIC* is the fcuking asssignment due at
        11:59. With Pywrite- it’s as easy as uploading a docx, and collecting
        the handwritten version. Python writes your Lab Assignments for you xD
        (How?)
      </h3>
      <a className="red rotate" href="/termsandconditions">
        * (it’s not free, Terms and Conditions Apply)
      </a>
      <Button />
    </div>
  );
}

export default Home;
