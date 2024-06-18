"use client";

import React, { FC, useRef, useState } from "react";
import "./contact.css";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import ToastMsg from "./Toast";

export const Contact: FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [submitting, setSubmitting] = useState(false);

  const sendEmail = (e: any) => {
    e.preventDefault();
    setSubmitting(true);

    emailjs
      .sendForm(
        "service_jz9tf5c",
        "template_yq1v8j9",
        form.current!,
        "B9D1FhvAE3Pi2pmog"
      )
      .then(
        () => {
          setSubmitting(false);
          toast.success(
            "Thank you for your message! I'll get back to you soon!"
          );
        },
        (error: any) => {
          setSubmitting(false);
          toast.error(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <section className="contact container section" id="contact">
      <h2 className="section__title">Get In Touch</h2>
      <div className="contact__container grid">
        <div className="contact__info">
          <h3 className="contact__title">Let&apos;s talk about everything!</h3>
          <p className="contact__details">
            I&apos;m always interested in new projects and opportunities.
            Don&apos;t hesitate to give me a call or send an email, I&apos;ll
            get back to you as soon as I can! 👋
          </p>
        </div>
       
        <form className="contact__form" ref={form} onSubmit={sendEmail}>
          <div className="contact__form-group">
            <div className="contact__form-div">
              <input
                type="text"
                name="name"
                className="contact__form-input"
                placeholder="Your full name"
                required
              />
            </div>
            <div className="contact__form-div">
              <input
                type="email"
                name="email"
                className="contact__form-input"
                placeholder="Your email"
                required
              />
            </div>
          </div>
          <div className="contact__form-div">
            <input
              type="text"
              name="subject"
              className="contact__form-input"
              placeholder="Your subject"
              required
            />
          </div>
          <div className="contact__form-div contact__form-area">
            <textarea
              typeof="text"
              name="message"
              cols={30}
              rows={10}
              className="contact__form-input"
              placeholder="Write your message"
              required
            />
          </div>

          <button type="submit" className="btn" disabled={submitting}>
            {submitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
      <ToastMsg />
    </section>
  );
};

export default Contact;
