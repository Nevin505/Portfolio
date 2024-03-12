import NavBar from "../components/Navbar";
import Row from "../components/Row";
import Button from "../components/Button";
import Heading from "../components/Heading";
import Div from "../components/Div";
import Detail from "../components/Detail";
import Column from "../components/Column";

import LandingPageStyle from "./LandingPage.module.css";

import PortodileImage from "../Assets/PortfolioImage.jpg";
import Resume from "../Assets/NevinJohn.pdf";

import { FaArrowCircleRight,FaArrowCircleDown } from "react-icons/fa";

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
          <img src={PortodileImage} alt="Porfile Image" />
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
                <Button>More About Me <FaArrowCircleRight size={40}/></Button>
              </div>
            </Column>
          </div>
        </Row>
      </section>
      {/* Second Section Including About */}
      <section className={LandingPageStyle.secondSection}>
        <div className={LandingPageStyle.secondSectionInside}>
          <h1 className={LandingPageStyle.down}>Resume</h1>
          <h1 className={LandingPageStyle.up}>
            About <span>Me</span>
          </h1>
        </div>
        <Div>
          <Heading>Personal Infos</Heading>
          <Row>
            <Column >
              <Detail LabelName="First Name" candiateDetails=" Steve"></Detail>
              <Detail LabelName="Last Name" candiateDetails="Milner"></Detail>
              <Detail LabelName="Age" candiateDetails="24 Years"></Detail>
              <Detail LabelName="Nationality" candiateDetails="Indian"></Detail>
                      {/* For DownLoad */}
                <a href={Resume} download> <Button> DownLoad CV<FaArrowCircleDown size={40}/></Button></a>
            </Column>

            <Column>
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
                candiateDetails="English Malayalam"
              ></Detail>
            </Column>
          </Row>
        </Div>
      </section>
    </>
  );
};

export default LandingPage;
