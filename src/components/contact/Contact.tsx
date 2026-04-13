'use client'

import React, { FC, useRef, useState } from 'react'
import emailjs from 'emailjs-com'
import { toast } from 'react-toastify'
import ToastMsg from './Toast'

const inputClass =
  'w-full px-5 py-3 text-sm bg-gray-50 dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 rounded-lg text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-neutral-600 outline-none focus:border-gray-900 dark:focus:border-gray-100 transition-colors'

const Contact: FC = () => {
  const form = useRef<HTMLFormElement>(null)
  const [submitting, setSubmitting] = useState(false)

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitting(true)

    emailjs
      .sendForm(
        'service_jz9tf5c',
        'template_yq1v8j9',
        form.current!,
        'B9D1FhvAE3Pi2pmog',
      )
      .then(
        () => {
          setSubmitting(false)
          toast.success(
            'Thank you for your message! I`ll get back to you soon!',
          )
        },
        (error: { text: string }) => {
          setSubmitting(false)
          toast.error(error.text)
        },
      )
    form.current?.reset()
  }

  return (
    <section className="pt-28 pb-24 max-w-[1080px] mx-auto px-4" id="contact">
      <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-2">
        Get In Touch
      </h2>
      <div className="w-10 h-0.5 bg-gray-900 dark:bg-gray-100 mb-12" />

      <div className="grid md:grid-cols-[4fr_8fr] gap-8">
        {/* Info */}
        <div>
          <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100 mb-2">
            Let&apos;s talk about everything!
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
            I&apos;m always interested in new projects and opportunities.
            Don&apos;t hesitate to give me a call or send an email, I&apos;ll
            get back to you as soon as I can! 👋
          </p>
        </div>

        {/* Form */}
        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your full name"
              required
              className={inputClass}
            />
            <input
              type="email"
              name="email"
              placeholder="Your email"
              required
              className={inputClass}
            />
          </div>
          <input
            type="text"
            name="subject"
            placeholder="Your subject"
            required
            className={inputClass}
          />
          <textarea
            name="message"
            rows={8}
            placeholder="Write your message"
            required
            className={`${inputClass} resize-none`}
          />
          <div>
            <button
              type="submit"
              disabled={submitting}
              className="px-8 py-3 text-sm font-semibold border border-gray-900 dark:border-gray-100 bg-gray-900 dark:bg-transparent text-white dark:text-gray-100 rounded-lg hover:bg-transparent hover:text-gray-900 dark:hover:bg-gray-100 dark:hover:text-gray-900 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {submitting ? 'Submitting...' : 'Submit'}
            </button>
          </div>
        </form>
      </div>
      <ToastMsg />
    </section>
  )
}

export default Contact
