import { FaArrowCircleRight, FaDownload } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

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
import Section from "../components/Section";
import Input from "../components/Input";
import LandingPageStyle from "./LandingPage.module.css";

import skills from "../util/Skills";
import projects from "../util/projects";
import Card from "../components/Card";
import { useRef } from "react";
import emailjs from '@emailjs/browser';

const LandingPage = () => {
  const form = useRef();

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
  //       publicKey: 'YOUR_PUBLIC_KEY',
  //     })
  //     .then(
  //       () => {
  //         console.log('SUCCESS!');
  //       },
  //       (error) => {
  //         console.log('FAILED...', error.text);
  //       },
  //     );
  // };

  return (
    <>
      <NavBar />

      <Section>
        {/* 1 section including image on the left and the contents on the right*/}
        <Row variantType="largerGap">
          <div className={LandingPageStyle.rightSectionFirstDiv}>
            <img src={PortodileImage} alt="Porfile Image" />
          </div>

          {/* Right Section Div Which includes all the contents */}
          <div className={LandingPageStyle.rightSectionDiv}>
            <Column variantType="mediumgap">
              <h1 className={LandingPageStyle.headingStyle}>
                -- I'M NEVIN ZACHARIAH JOHN.
              </h1>
              <h2 className={LandingPageStyle.subheadingStyle}>FULL STACK DEVELOPER</h2>
              <p className={LandingPageStyle.pStyle}>
                Hello there! 👋 , a passionate and dedicated full-stack
                developer on a mission to create seamless, user-friendly digital
                experiences. I thrive in the dynamic world of web development,
                where every line of code is an opportunity to innovate.
              </p>
              <div>
                <Button
                  variantType="easeInButton"
                  icon={<FaArrowCircleRight size={40} />}
                  ClickEventHandler={() => {
                    return (window.location = "#aboutMe");
                  }}
                >
                  More About Me
                </Button>
              </div>
            </Column>
          </div>
        </Row>
      </Section>

      {/* Second Section Including About */}

      <Section idName="aboutMe" className={LandingPageStyle.secondSection}>
        <OverlappingHeading
          upperLayerContent="About"
          spanUpperLyer=" Me"
          downLayerContent="Resume"
        ></OverlappingHeading>

        <Div>
          <Column variantType="mediumGap">
            <Heading>Personal Infos</Heading>
            <Row>
              {/* Details */}
              <Column variantType="mediumgap">
                <Detail
                  LabelName="First Name"
                  candiateDetails=" Nevin"
                ></Detail>
                <Detail
                  LabelName="Last Name"
                  candiateDetails="Zachariah"
                ></Detail>
                <Detail LabelName="Age" candiateDetails="24 Years"></Detail>
                <Detail
                  LabelName="Nationality"
                  candiateDetails="Indian"
                ></Detail>
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
                <div>
                  <h3>Internship</h3>
                  <div>
                    <h3>ByteStrone Private Limited</h3>
                    <p>Jr Software Engineer Intern</p>
                  </div>
                </div>
              </Column>
            </Row>
            <Column>
              <div style={{ marginInline: "auto" }}>
                <Button variantType="easeInButton">
                  <a href={Resume}> DownLoad CV</a>
                  <FaDownload size={36} />
                </Button>
              </div>
            </Column>
          </Column>
        </Div>
      </Section>

      {/* Section Including My Skills */}
      <Section>
        <p>Skills</p>
        <Row>
          {skills.map((skill) => {
            return (
              <div className={LandingPageStyle.imageDiv}>
                <img
                  className={LandingPageStyle.image}
                  src={skill.img}
                  alt=""
                />
              </div>
            );
          })}
        </Row>
      </Section>
      <Section>
        <OverlappingHeading
          upperLayerContent="My "
          spanUpperLyer="Portfolio"
          downLayerContent="Projects"
        ></OverlappingHeading>
      </Section>
      {/* Projects */}
      <Section>
        <Row>

          {projects.map((project, index) => {
            return (
              <div key={index} className={LandingPageStyle.projectSkillsCard}>
                <img src={project.imgs} alt={project.projectName} />
                <div className={LandingPageStyle.phovesr}>
                  <p>Project: {project.projectName}</p>
                  <p className={LandingPageStyle.phover}>
                    Description:{project.description}
                  </p>
                  <Button>
                  <a href={project.githubLink}>Git-hub <FaGithub/></a></Button>
                </div>
              </div>
            );
          })}
        </Row>
      </Section>
      <section>
        <OverlappingHeading
          downLayerContent="CONTACT"
          upperLayerContent="GET IN "
          spanUpperLyer="TOUCH"
        ></OverlappingHeading>
      </section>
      <Section >
        <Row variantType="mediumGap">+
          <Column>
          <p>Social Medias</p>
           <Button>LinkedIn</Button>
           <Button>Git-hub</Button>
           <Button>What's App</Button>
          </Column>
            <div className={LandingPageStyle.noWrapRow}>
             <form action="">
             <Input placeholder="Yor Name" />
              <Input placeholder="Your Email" />
              <Input placeholder="Your Subject" />
              <Input placeholder="Your Subject" textArea />
              <Button variantType="easeInButton">Send Mail</Button>
             </form>
            </div>
           
        </Row>
      </Section>
    </>
  );
};

export default LandingPage;
