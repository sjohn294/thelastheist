import React from "react";
import AboutCSS from './about.module.css'
import cssIMG from '../../../assets/CSS_transparent.png'
import ReactIMG from '../../../assets/React_Transparent.png'
import HTMLIMG from '../../../assets/HTML_transparent.png'
import JavaScriptIMG from '../../../assets/JavaScript_transparent.png'
import MongoIMG from '../../../assets/Mongo_transparent.png'
import NodeIMG from '../../../assets/Node.js_transparent.png'
import NpmIMG from '../../../assets/npm_transparent.png'
import SqlIMG from '../../../assets/Sql_transparent.png'
import BootstrapIMG from '../../../assets/bootstrap_transparent.png'


export default function About() {
  return (
    <div>
      <div className={AboutCSS.container}>
        <div className={AboutCSS.header}>About Page</div>
        <p className={AboutCSS.body}>
          Nunc pharetra finibus est at efficitur. Praesent sed congue diam.
          Integer gravida dui mauris, ut interdum nunc egestas sed. Aenean sed
          mollis diam. Nunc aliquet risus ac finibus porta. Nam quis arcu non
          lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper
          imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus
          in. Sed rhoncus mollis diam, sit amet facilisis lectus blandit at.
        </p>
      </div>


      <div className={AboutCSS.container2}>
      <div className={AboutCSS.header2}>Skills</div>
        <ul className={AboutCSS.skills}>
          
          <li><img src={cssIMG} alt="" /></li>
          <li><img src={HTMLIMG} alt="" /></li>
          <li><img src={ReactIMG} alt="" /></li>
          <li><img src={JavaScriptIMG} alt="" /></li>
          <li><img src={MongoIMG} alt="" /></li>
          <li><img src={NodeIMG} alt="" /></li>
          <li><img src={NpmIMG} alt="" /></li>
          <li><img src={SqlIMG} alt="" /></li>
          <li><img src={BootstrapIMG} alt="" /></li>
        </ul>

      </div>
    </div>

  );
}
