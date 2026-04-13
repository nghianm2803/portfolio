import React, { FC } from 'react'
import Image from 'next/image'
import Projects from './ProjectData'

const Project: FC = () => {
  return (
    <section className="pt-28 pb-8 max-w-[1080px] mx-auto px-4" id="work">
      <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-2">
        Recent Works
      </h2>
      <div className="w-10 h-0.5 bg-gray-900 dark:bg-gray-100 mb-12" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Projects?.map((project) => (
          <div
            key={project.id}
            className="relative overflow-hidden rounded-lg border border-gray-200 dark:border-neutral-700 bg-gray-50 dark:bg-neutral-800 group"
          >
            {/* Image */}
            <div className="relative h-[240px] overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                style={{ objectFit: 'cover' }}
                className="grayscale-[20%] group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-300"
              />
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/75 transition-all duration-300" />
            </div>

            {/* Category — slides down from top */}
            <span className="absolute top-0 left-4 bg-white dark:bg-neutral-900 text-gray-900 dark:text-gray-100 text-[10px] font-semibold uppercase tracking-widest px-2.5 py-1 rounded-b -translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-10">
              {project.category}
            </span>

            {/* Title */}
            <h3 className="absolute top-14 px-4 text-white font-semibold text-base opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-10">
              {project.title}
            </h3>

            {/* Stack */}
            <p className="absolute top-[6rem] px-4 text-white/70 text-xs opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-10">
              {project.stack}
            </p>

            {/* Link button */}
            <a
              href={project.demo}
              target="_blank"
              aria-label={`View ${project.title}`}
              className="absolute bottom-5 left-4 w-9 h-9 bg-white dark:bg-gray-100 text-black rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 hover:scale-110 transition-all duration-300 z-10"
            >
              <i className="icon-link text-sm" />
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Project
