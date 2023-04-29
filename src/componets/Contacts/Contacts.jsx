import React, { useRef } from "react";
import "./Contacts.css";
import emailjs from "@emailjs/browser";
import { FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa";
import {
  AiOutlineMail,
  AiFillCheckCircle,
  AiOutlineExclamation,
} from "react-icons/ai";

export default function Contacts() {
  const form = useRef();
  const [emailSent, setEmailSent] = React.useState(true);
  const [popMessage, setPopMessage] = React.useState();

  const sendEmail = (e) => {
    e.preventDefault();
    // hvESaPPGbTdyGwbs5
    emailjs
      .sendForm(
        "service_u7snmh9",
        "template_kcwydfz",
        form.current,
        "hvESaPPGbTdyGwbs5"
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
          setEmailSent(true);
          setPopMessage(true);
        },
        (error) => {
          setEmailSent(false);
          console.log(error.text);
          setPopMessage(true);
        }
      );
  };
  const Response = () => {
    if (emailSent) {
      return (
        <p className="message-sent">
          Message Sent <AiFillCheckCircle />
        </p>
      );
    } else if (emailSent === false) {
      return (
        <p className="message-not-sent">
          Message Not Sent <AiOutlineExclamation />
        </p>
      );
    } else {
      return "";
    }
  };
  setTimeout(() => {
    if (popMessage === true) {
      setPopMessage(false);
    }
  }, 10000);

  return (
    <div className="Contacts" id="Contact">
      <header>Contacts</header>

      <div className="contacts-container">
        <div className="contact-item-left">
          <div
            className={
              popMessage ? "submit-message" : "submit-message-disappear"
            }
          >
            <Response />
          </div>
          <h2>Let's Connect</h2>

          <form ref={form} onSubmit={sendEmail}>
            First Name:
            <input type="text" name="FirstName" required />
            Email:
            <input type="email" name="email" required />
            Subject:
            <input type="text" name="Subject" required />
            Message:
            <textarea name="message" required></textarea>
            <button className="send-btn" type="submit">
              Send
            </button>
          </form>
        </div>

        <div className="contact-item-right">
          <div className="contact-image">
            <img src="./images/contact1.jpg" alt="contact" />
            <p>Contact for more information</p>
          </div>
          <div className="contact-AboutMe-socials">
            <div className="AboutMe-icon">
              <a href="http://">
                <FaLinkedinIn />
              </a>
            </div>
            <div className="AboutMe-icon">
              <a href="http://">
                <FaInstagram />
              </a>
            </div>
            <div className="AboutMe-icon">
              <a href="https://github.com/VincentNdegwa">
                <FaGithub />
              </a>
            </div>
            <div className="AboutMe-icon">
              <a href="mailto:ndegwavincent7@gmail.com">
                <AiOutlineMail />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
