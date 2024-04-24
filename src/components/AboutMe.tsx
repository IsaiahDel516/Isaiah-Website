import "../styles/AboutMe.scss"
import IsaiahsImage from "../assets/Isaiah.png"

const AboutMe = () => 
<div id="about-me">
  <div id="about-me-text">
    Hello reader! Incase you didnt catch it yet, my name is Isaiah Delgado and I'm a software engineer, although that wasnt always the case. 
    Before i set my eyes on programming, my heart was set on music, so much so that I even attended Ithaca College to pursue a double major in Music Education and Performance. 
    Unfortunately due to financial reasons and the Covid pandemic my dream was cut short. While at the time this change was a hard adjustment,
    I soon found that all my freetime allowed me to pursue a path I had never considered. Through the advice of some friends i decided to learn how to code
    using python. With the unquivering grit I honed as a musician  
  </div>
  <img id="isaiahs-image" alt="PicOfMe" src={IsaiahsImage}>
  </img>
</div>

export default AboutMe;