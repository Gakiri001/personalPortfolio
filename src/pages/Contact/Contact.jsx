import React, { useRef, useState } from "react";
import "./Contact.css";
import { GiSkills } from "react-icons/gi";
import emailjs from "emailjs-com";
import { toast } from "sonner";

function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  function showToast(title, description = "", color = "red") {
    toast(title, {
      description,
      duration: 5000,
      style: {
        backgroundColor: color,
        color: "white",
        fontSize: "12px",
      },
    });
  }

  const formValidation = () => {
    const formVal = form.current;
    const name = formVal.name.value.trim();
    const email = formVal.email.value.trim();
    const message = formVal.message.value.trim();
    const subject = formVal.subject.value.trim();

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!name) {
      showToast("Please enter the name");
      return false;
    }
    if (!email) {
      showToast("Please enter the Email");
      return false;
    }
    if (!emailRegex.test(email)) {
      showToast("Please Enter a valid Email");
      return false;
    }
    if (!subject) {
      showToast("please enter the subject");
      return false;
    }
    if (!message) {
      showToast("please enter the message");
      return false;
    }

    return true;
  };

  const emailsending = () => {
    emailjs
      .sendForm(
        "service_lmqterb",
        "template_n3cbtdk",
        form.current,
        "XWp6kLrKIZA7F99Vr",
      )
      .then(
        (result) => {
          toast("The email message has being sent to Julius", {
            duration: 5000,
            style: {
              background: "green",
            },
          });
        },
        (error) => {
          toast("Failed to send the email message. Please try again", {
            duration: 5000,
            style: {
              background: "red",
            },
          });
        },
      );
  };

  const sendEmail = (e) => {
    e.preventDefault();
    try {
      if (!formValidation()) {
        return;
      }
      setLoading(true);
      emailsending();
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    } catch (error) {
      toast("Failed to send the email message. Please try again", {
        description: "Check the internet connection",
        duration: 5000,
        style: {
          background: "red",
        },
      });
    }
  };
  return (
    <div className="contact">
      <div className="contactHeader">
        <h2>Contact Me</h2>
        <GiSkills className="contactIcon" />
      </div>
      <div className="talkdiv">
        <h2 className="text-3xl underline font-[Times_New_Roman]">Lets Talk</h2>
      </div>
      <form ref={form} onSubmit={sendEmail} className="form">
        <div className="flex gap-x-4 justify-between divpart1">
          <div className=" flex flex-col w-[50%] gap-y-2 divName">
            <label htmlFor="" className="text-[18px]">
              Enter your name.
            </label>
            <input
              type="text"
              placeholder="Name"
              className="border-1 border-black rounded-2xl input"
              name="name"
            />
          </div>
          <div className="flex flex-col w-[50%] gap-y-2 divEmail">
            <label htmlFor="" className="text-[18px]">
              Enter your email.
            </label>
            <input
              type="email"
              placeholder="Email"
              className="border-1 border-black rounded-2xl p-3 input"
              name="email"
            />
          </div>
        </div>
        <div className="flex gap-x-4 justify-between divpart1">
          <div className="flex flex-col w-[50%] gap-y-2 divEmail">
            <label htmlFor="" className="text-[18px]">
              Enter the subject.
            </label>
            <input
              type="text"
              placeholder="Subject"
              className="border-1 border-black rounded-2xl p-3 input"
              name="subject"
            />
          </div>
          <div className="w-[50%] flex flex-col gap-y-2 divMessage">
            <label htmlFor="" className="text-[18px]">
              Type Your message.
            </label>
            <textarea
              width="100%"
              name="message"
              id=""
              placeholder="Description"
              className="p-3 textarea"
            ></textarea>
          </div>
        </div>
        <div className="flex justify-center items-center divsubmit">
          <button type="submit" className="bg-gray-400" disabled={loading}>
            {loading ? "Loading..." : "Send"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
