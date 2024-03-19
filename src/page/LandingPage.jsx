import { FaArrowCircleRight, FaDownload } from "react-icons/fa";

import NavBar from "../components/Navbar";
import Row from "../components/Row";
import Button from "../components/Button";
import Heading from "../components/Heading";
import Div from "../components/Div";
import Detail from "../components/Detail";
import Column from "../components/Column";
import PortodileImage from "../Assets/PortfolioImage.jpg";
import Resume from "../Assets/NevinJohn.pdf";
import OverlappingHeading from "../components/OverlappingHeading";
import Input from "../components/Input";

import LandingPageStyle from "./LandingPage.module.css";

import skills from "../util/Skills";
import projects from "../util/projects";


const LandingPage = () => {
  return (
    <>
      <NavBar/>
      <section className={LandingPageStyle.sectionPage}>
        {/* 1 section including image on the left and the contents on the right*/}
        <Row>
         <div className={LandingPageStyle.rightSectionFirstDiv}>
         <img src={PortodileImage} alt="Porfile Image" />
         </div>
          {/* Right Section Div Which includes all the contents */}
          <div className={LandingPageStyle.rightSectionDiv}>
            <Column variantType="mediumgap">
              <h1 className={LandingPageStyle.headingStyle}>
                -- I'M NEVIN ZACHARIAH JOHN.
              </h1>
              <h2>FULL STACK DEVELOPER</h2>
              <p>
                Hello there! 👋 , a passionate and dedicated full-stack
                developer on a mission to create seamless, user-friendly digital
                experiences. I thrive in the dynamic world of web development,
                where every line of code is an opportunity to innovate.
              </p>
              <div>
                <Button variantType='easeInButton' icon={<FaArrowCircleRight size={40} />} ClickEventHandler={()=>{
                 return  window.location='#aboutMe'
                }}>
                  More About Me 
                </Button>
              </div>
            </Column>
          </div>
        </Row>
      </section>


      {/* Second Section Including About */}

      <section id="aboutMe" className={LandingPageStyle.secondSection}>

        <OverlappingHeading upperLayerContent="About" spanUpperLyer=" Me" downLayerContent="Resume" ></OverlappingHeading>

        <Div>
        <Column variantType="largeGap">
          <Heading>Personal Infos</Heading>
          <Row>
            {/* Details */}
            <Column variantType="mediumgap">
              <Detail LabelName="First Name" candiateDetails=" Nevin"></Detail>
              <Detail
                LabelName="Last Name"
                candiateDetails="Zachariah"
              ></Detail>
              <Detail LabelName="Age" candiateDetails="24 Years"></Detail>
              <Detail LabelName="Nationality" candiateDetails="Indian"></Detail>
              {/* For DownLoad */}
            </Column>

            <Column variantType="mediumgap">
              <Detail
                LabelName="Address"
                candiateDetails=" Nedunagathra"
              ></Detail>
              <Detail LabelName="Phone" candiateDetails="9495039249"></Detail>
              <Detail
                LabelName="Email"
                candiateDetails="nevinjohn63@gmail.com"
              ></Detail>
              <Detail
                LabelName="Langages"
                candiateDetails="English, Malayalam"
              ></Detail>
            </Column>
            
            <Column variantType="mediumgap">
              <Button variantType="classicButton"><a href="https://www.linkedin.com/in/nevin-zachariah-john
" target="blank">LinkedIn</a>
              </Button>
              <Button variantType="classicButton">
                <a href="https://github.com/Nevin505" target="blank">GitHub</a></Button>
              <Button variantType="classicButton"> <a href="mailto:nevinjohn63@gmail.com" target="blank">Gamil</a> </Button>
         
            </Column>
          </Row>
         <div>
         <Button variantType='easeInButton'>
            <a href={Resume}> DownLoad CV</a>
            <FaDownload size={36} />
          </Button>
         </div>
        </Column>
        </Div>
       
      </section>

      {/* Section Including My Skills */}
      <section className={LandingPageStyle.skillSection}>
        <p>Skills:</p>
        <Row variantType="smallerGap">
          {skills.map((skill) => {
            return (
              <div key={skill.id} className={LandingPageStyle.skillStyle}>
                <p>{skill.skillName}</p>
                <img className={LandingPageStyle.imgStyle} src={skill.img} alt={skill.skillName} />
              </div>
            );
          })}
        </Row>
      </section>
      <section>
      <OverlappingHeading upperLayerContent="My " spanUpperLyer="Portfolio" downLayerContent="Projects" ></OverlappingHeading>
      </section>
      {/* Projects */}
      <section className={LandingPageStyle.projectMainCard}>
        {projects.map((project,index)=>{
             return <div  key={index} className={LandingPageStyle.projectSkillsCard}>
                      <img src={project.imgs} alt={project.projectName}/>
                      <p>{project.projectName}</p>
                     
                      <p className={LandingPageStyle.phover}>{project.description}</p>
                      
                   </div>
        })}
          
      </section>
      <section>
        <OverlappingHeading downLayerContent="CONTACT" upperLayerContent="GET IN " spanUpperLyer="TOUCH"></OverlappingHeading>
        <Row>
        <Input placeholder="Your Name"/>
        <Input placeholder='Your Email'/>
        <Input placeholder='Your Subject'/>
        </Row>
      </section>
    </>
  );
};

export default LandingPage;
