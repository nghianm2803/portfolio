import React, { FC } from 'react'

interface IProps {
  icon: string
  title: string
  year: string
  organization: string
}

const Card: FC<IProps> = ({ icon, title, year, organization }) => {
  return (
    <div className="timeline__item">
      <i className={icon} />
      <span className="timeline__date">{year}</span>
      <h3 className="timeline__title">{title}</h3>
      <p className="timeline__text">{organization}</p>
    </div>
  )
}

export default Card
