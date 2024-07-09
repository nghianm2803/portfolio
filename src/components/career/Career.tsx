import React, { FC } from 'react'
import './career.css'
import CareerData from './CareerData'

const Career: FC = () => {
  return (
    <section className="resume container section" id="resume">
      <h2 className="section__title">Experience</h2>
      <div className="resume__container grid">
        <div className="timeline grid">
          {CareerData.map((item) => {
            if (item.careerType === 'education') {
              return (
                <div className="timeline__item" key={item.id}>
                  <i className={item?.icon} />
                  <span className="timeline__date">{item?.year}</span>
                  <h3 className="timeline__title">{item?.title}</h3>
                  <p className="timeline__text">{item?.organization}</p>
                </div>
              )
            }
            return null
          })}
        </div>
        <div className="timeline grid">
          {CareerData.map((item) => {
            if (item.careerType === 'experience') {
              return (
                <div className="timeline__item" key={item.id}>
                  <i className={item?.icon} />
                  <span className="timeline__date">{item?.year}</span>
                  <h3 className="timeline__title">{item?.title}</h3>
                  <p className="timeline__text">{item?.organization}</p>
                </div>
              )
            }
            return null
          })}
        </div>
      </div>
    </section>
  )
}

export default Career
