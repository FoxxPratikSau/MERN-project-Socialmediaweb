import React from "react";

import Home from "../../img/home.png";
import theme from "../../img/home.png";
import vv from "../../img/video2.webp";
import Noti from "../../img/noti.png";
import Comment from "../../img/comment.png";
import { UilSetting } from "@iconscout/react-unicons";
import { Link } from "react-router-dom";


const NavIcons = () => {
  return (
    <div className="navIcons">
      <Link to="../home">
        <img src={Home} alt="" />
      </Link>
      
     
      
      
      <a href="https://videocallweb-app.herokuapp.com/">
      <img src={vv} alt="" />
      </a>
      <Link to="../chat">
        <img src={Comment} alt="" />
      </Link>
    </div>
  );
};

export default NavIcons;
