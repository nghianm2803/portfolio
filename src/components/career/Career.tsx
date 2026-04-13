import React, { FC } from 'react'
import CareerData from './CareerData'

const Career: FC = () => {
  const education = CareerData.filter(
    (item) => item.careerType === 'education',
  )
  const experience = CareerData.filter(
    (item) => item.careerType === 'experience',
  )

  return (
    <section className="pt-28 pb-8 max-w-[1080px] mx-auto px-4" id="resume">
      <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-2">
        Experience
      </h2>
      <div className="w-10 h-0.5 bg-gray-900 dark:bg-gray-100 mb-12" />

      <div className="grid md:grid-cols-2 gap-8">
        {/* Education */}
        <div className="bg-gray-50 dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 rounded-lg p-8">
          <p className="text-[10px] font-semibold text-gray-400 dark:text-gray-600 uppercase tracking-widest mb-6">
            Education
          </p>
          <div className="pl-5 border-l border-gray-200 dark:border-neutral-700">
            {education.map((item) => (
              <div key={item.id} className="relative pb-8 last:pb-0">
                <i
                  className={`${item.icon} absolute -left-[22px] top-0 text-sm text-gray-900 dark:text-gray-100 bg-gray-50 dark:bg-neutral-800 py-0.5`}
                />
                <span className="text-xs text-gray-400 dark:text-gray-600">
                  {item.year}
                </span>
                <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mt-1 mb-0.5">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {item.organization}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div className="bg-gray-50 dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 rounded-lg p-8">
          <p className="text-[10px] font-semibold text-gray-400 dark:text-gray-600 uppercase tracking-widest mb-6">
            Work Experience
          </p>
          <div className="pl-5 border-l border-gray-200 dark:border-neutral-700">
            {experience.map((item) => (
              <div key={item.id} className="relative pb-8 last:pb-0">
                <i
                  className={`${item.icon} absolute -left-[22px] top-0 text-sm text-gray-900 dark:text-gray-100 bg-gray-50 dark:bg-neutral-800 py-0.5`}
                />
                <span className="text-xs text-gray-400 dark:text-gray-600">
                  {item.year}
                </span>
                <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mt-1 mb-0.5">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {item.organization}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Career
