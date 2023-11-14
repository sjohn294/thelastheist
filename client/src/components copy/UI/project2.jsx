import ProjectCSS from './project.module.css'
import ProjectIMG from '../../assets/passwordImg.png'

export default function Project2() {
    return (
        <div className={ProjectCSS.card}>
        <div className={ProjectCSS.header}>Password Generator</div>
        <div className={ProjectCSS.images}><img src={ProjectIMG} alt="" /></div>
        <div className={ProjectCSS.about}></div>
        <a href="https://github.com/BreakfastSandwich/Secure_Yo-Self" className={ProjectCSS.gitHubBtn}>Check out the Code</a>
        <a href="https://breakfastsandwich.github.io/Secure_Yo-Self/" className={ProjectCSS.deployedBtn}>Check out the Deployed Site</a>
      </div>
    );
  }