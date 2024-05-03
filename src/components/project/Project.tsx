import React, { FC } from "react";
import "./project.css";
import Projects from "./ProjectData";
import Image from "next/image";

export const Project: FC = () => {
  return (
    <div className="section work container section" id="work">
      <h2 className="section__title">Recent Works</h2>
      <div className="work__container grid">
        {Projects?.map((project) => {
          return (
            <div className="work__card" key={project?.id}>
              <div className="work__thumbnail">
                <Image src={project?.image} alt="" className="work__img" />
                <div className="work__mask"></div>
              </div>

              <span className="work__category">{project?.category}</span>
              <h3 className="work__title">{project?.title}</h3>
              <h4 className="work__stack">{project?.stack}</h4>
              <a href={project?.demo} className="work__button" target="_blank">
                <i className="icon-link work__button-icon"></i>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Project;
