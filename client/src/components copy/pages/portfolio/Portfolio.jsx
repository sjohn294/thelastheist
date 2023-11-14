import React from "react";
import PortfolioCSS from './portfolio.module.css'
import Project1 from '../../UI/project1'
import Project2 from '../../UI/project2'
import Project3 from '../../UI/project3'
import Project4 from '../../UI/project4'
import Project5 from '../../UI/project5'
import Project6 from '../../UI/project6'


export default function Portfolio() {
    return (
      <div className={PortfolioCSS.container}>
        <h1 className={PortfolioCSS.header}>Portfolio</h1>
        <div className={PortfolioCSS.body}>

          <Project1 />
          <Project2 />
          <Project3 />
          <Project4 />
          <Project5 />
          <Project6 />
          
        </div>
      </div>
    );
  }
  