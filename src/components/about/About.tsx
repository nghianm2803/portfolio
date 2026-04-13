import React, { FC } from 'react'
import Image from 'next/image'
import Avatar2 from '../../assets/Avatar2.png'
import {
  NodeJsIcon,
  ReactIcon,
  TsIcon,
  JsIcon,
  MongoDbIcon,
  ExpressIcon,
  VueIcon,
  DartIcon,
  FlutterIcon,
  RedisIcon,
  PhpIcon,
  LaravelIcon,
  PostgresqlIcon,
} from './Stack'

const About: FC = () => {
  return (
    <section className="pt-28 pb-8 max-w-[1080px] mx-auto px-4" id="about">
      <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-2">
        About Me
      </h2>
      <div className="w-10 h-0.5 bg-gray-900 dark:bg-gray-100 mb-12" />

      <div className="grid lg:grid-cols-[3fr_9fr] gap-8 items-start">
        {/* Avatar */}
        <Image
          src={Avatar2}
          alt="Minh Nghia"
          className="rounded-lg justify-self-center lg:justify-self-start"
        />

        {/* Content card */}
        <div className="relative bg-gray-50 dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 rounded-lg p-8 grid md:grid-cols-2 gap-8 items-start">
          {/* Arrow pointing left (desktop only) */}
          <div className="hidden lg:block absolute -left-3 top-[20%] w-0 h-0 border-t-[8px] border-b-[8px] border-r-[12px] border-t-transparent border-b-transparent border-r-gray-200 dark:border-r-neutral-700" />

          {/* Bio */}
          <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed text-justify">
            👋 Hey, I am{' '}
            <strong className="text-gray-900 dark:text-gray-100 font-semibold">
              Minh Nghia
            </strong>
            , a Software Engineer with experience across mobile and full-stack
            web development. I am proficient in Dart/Flutter (GetX) for
            cross-platform mobile apps, TypeScript/JavaScript with ReactJS and
            VueJS for frontend, and NodeJS/ExpressJS /PHP/Laravel for backend.
            My database experience covers MongoDB, PostgreSQL, and Redis. I
            enjoy building quality solutions and am always looking for new
            challenges to grow.
          </p>

          {/* Skills */}
          <div className="flex flex-col gap-5">
            <div>
              <p className="text-[10px] font-semibold text-gray-400 dark:text-gray-600 uppercase tracking-widest mb-2">
                Mobile App
              </p>
              <div className="flex gap-2 flex-wrap">
                <DartIcon />
                <FlutterIcon />
              </div>
            </div>

            <div>
              <p className="text-[10px] font-semibold text-gray-400 dark:text-gray-600 uppercase tracking-widest mb-2">
                Frontend
              </p>
              <div className="flex gap-2 flex-wrap">
                <TsIcon />
                <JsIcon />
                <ReactIcon />
                <VueIcon />
              </div>
            </div>

            <div>
              <p className="text-[10px] font-semibold text-gray-400 dark:text-gray-600 uppercase tracking-widest mb-2">
                Backend
              </p>
              <div className="flex gap-2 flex-wrap">
                <NodeJsIcon />
                <ExpressIcon />
                <PhpIcon />
                <LaravelIcon />
              </div>
            </div>

            <div>
              <p className="text-[10px] font-semibold text-gray-400 dark:text-gray-600 uppercase tracking-widest mb-2">
                Database
              </p>
              <div className="flex gap-2 flex-wrap">
                <MongoDbIcon />
                <PostgresqlIcon />
                <RedisIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
