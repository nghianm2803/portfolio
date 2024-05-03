import React, { FC } from "react";
interface IProps {
  key: number;
  icon: string;
  title: string;
  year: string;
  organization: string;
}

const Card: FC<IProps> = ({ icon, title, year, organization }) => {
  console.log("icon: ", icon);
  return (
    <div className="timeline__item">
      <i className={icon}></i>
      <span className="timeline__date">{year}</span>
      <h3 className="timeline__title">{title}</h3>
      <p className="timeline__text">{organization}</p>
    </div>
  );
};

export default Card;
