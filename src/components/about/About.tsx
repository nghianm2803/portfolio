import React, { FC } from "react";
import "./about.css";
import Avatar2 from "../../assets/Avatar2.png";
import {
  NodeJsIcon,
  ReactIcon,
  TsIcon,
  HtmlIcon,
  CssIcon,
  JsIcon,
  MongoDbIcon,
  ExpressIcon,
  VueIcon,
} from "./Stack";
import Image from "next/image";

const About: FC = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About Me</h2>
      <div className="about__container grid">
        <Image src={Avatar2} alt="" className="about__img" />
        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              👋 Hey, I am <b> Minh Nghia </b> but you can call me <b>Doo</b>. I
              have a strong foundation in frontend development and I&apos;m
              actively expanding my skills in backend development with Node.js
              and MongoDB. I&apos;m highly motivated to become a Fullstack
              developer. My preferred tools are ReactJS and NodeJS.
            </p>
            {/* <a href={CV} download className="btn">
              Download CV
            </a> */}
          </div>

          <div className="about__skills grid">
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Languages I speak</h3>
              </div>
            </div>
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Frontend</h3>
              </div>
              <div className="skills__stack grid">
                <TsIcon />
                <JsIcon />
                <ReactIcon />
                <VueIcon/>
              </div>
            </div>
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Backend, Database</h3>
              </div>
              <div className="skills__stack grid">
                <NodeJsIcon />
                <ExpressIcon />
                <MongoDbIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
