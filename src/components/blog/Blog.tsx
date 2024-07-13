import React, { FC } from 'react'
import './blog.css'
import Image from 'next/image'
import Blog1 from '../../assets/blog-1.svg'
import Blog2 from '../../assets/blog-2.svg'
import Blog3 from '../../assets/blog-3.svg'

const Blog: FC = () => {
  return (
    <section className="blog container section" id="blog">
      <h2 className="section__title">Latest Posts</h2>

      <h2 className="blog__container grid">
        <div className="blog__card">
          <div className="blog__thumbnail">
            <a href="#" className="blog__link">
              <span className="blog__category">Blog 1</span>
            </a>
            <a href="#" className="blog__link">
              <Image src={Blog1} alt="" className="blog__img" />
            </a>
          </div>
          <div className="blog__details">
            <h3 className="blog__title">Title 1</h3>
            <div className="blog__meta">
              <span>05 July, 2024</span>
              <span className="blog__dot">.</span>
              <span>Doo</span>
            </div>
          </div>
        </div>

        <div className="blog__card">
          <div className="blog__thumbnail">
            <a href="#" className="blog__link">
              <span className="blog__category">Blog 2</span>
            </a>
            <a href="#" className="blog__link">
              <Image src={Blog2} alt="" className="blog__img" />
            </a>
          </div>
          <div className="blog__details">
            <h3 className="blog__title"> Title 2</h3>
            <div className="blog__meta">
              <span>06 July, 2024</span>
              <span className="blog__dot">.</span>
              <span>Doo</span>
            </div>
          </div>
        </div>

        <div className="blog__card">
          <div className="blog__thumbnail">
            <a href="#" className="blog__link">
              <span className="blog__category">Blog 3</span>
            </a>
            <a href="#" className="blog__link">
              <Image src={Blog3} alt="" className="blog__img" />
            </a>
          </div>
          <div className="blog__details">
            <h3 className="blog__title">Title 3</h3>
            <div className="blog__meta">
              <span>06 July, 2024</span>
              <span className="blog__dot">.</span>
              <span>Doo</span>
            </div>
          </div>
        </div>
      </h2>
    </section>
  )
}

export default Blog
