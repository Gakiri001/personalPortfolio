import React from "react";
import "./Contact.css";
import { GiSkills } from "react-icons/gi";

function Contact() {
  return (
    <div className="contact">
      <div className="contactHeader">
        <h2>Contact Me</h2>
        <GiSkills className="contactIcon" />
      </div>
      <div className="talkdiv">
        <h2 className="text-3xl underline font-[Times_New_Roman]">Lets Talk</h2>
      </div>
      <form action="" className="form">
        <div className="flex gap-x-4 justify-between">
          <div className="bg-red-400">
            <label htmlFor="">Enter your Name</label>
            <input
              type="text"
              placeholder="Name"
              className="border-1 border-black rounded-2xl input"
            />
          </div>
          <div>
            <label htmlFor="">Enter your Email</label>
            <input
              type="email"
              placeholder="Email"
              className="border-1 border-black rounded-2xl p-3 input"
            />
          </div>
        </div>
        <div className="">
          <textarea width="100%" name="" id="" className="textarea">
            oyah
          </textarea>
        </div>
      </form>
    </div>
  );
}

export default Contact;
