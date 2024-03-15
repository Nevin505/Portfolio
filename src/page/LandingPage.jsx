import { FaArrowCircleRight, FaDownload } from "react-icons/fa";

import NavBar from "../components/Navbar";
import Row from "../components/Row";
import Button from "../components/Button";
import Heading from "../components/Heading";
import Div from "../components/Div";
import Detail from "../components/Detail";
import Column from "../components/Column";
import Card from "../components/Card";
import PortodileImage from "../Assets/PortfolioImage.jpg";
import Resume from "../Assets/NevinJohn.pdf";

import LandingPageStyle from "./LandingPage.module.css";

import skills from "../util/Skills";

const LandingPage = () => {
  return (
    <>
      <NavBar>
        <menu className={LandingPageStyle.menuStyle}>
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </menu>
      </NavBar>
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
                <Button>
                  More About Me <FaArrowCircleRight size={40} />
                </Button>
              </div>
            </Column>
          </div>
        </Row>
      </section>


      {/* Second Section Including About */}

      <section className={LandingPageStyle.secondSection}>
        <div className={LandingPageStyle.overlapp}>
          <div className={LandingPageStyle.down}>
            Resume
            <div className={LandingPageStyle.up}>About Me</div>
          </div>
        </div>
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
          </Row>
         <div>
         <Button>
            <a href={Resume}> DownLoad CV</a>
            <FaDownload size={36} />
          </Button>
         </div>
        </Column>
        </Div>
       
      </section>

      {/* Section Including My Skills */}
      <section className={LandingPageStyle.skillSection}>
        <p>Skills</p>
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
    </>
  );
};

export default LandingPage;
