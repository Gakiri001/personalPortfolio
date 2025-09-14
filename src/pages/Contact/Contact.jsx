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
        <div className="flex gap-x-4 justify-between divpart1">
          <div className=" flex flex-col w-[50%] gap-y-2 divName">
            <label htmlFor="" className="text-[18px]">Enter your Name.</label>
            <input
              type="text"
              placeholder="Name"
              className="border-1 border-black rounded-2xl input"
            />
          </div>
          <div className="flex flex-col w-[50%] gap-y-2 divEmail">
            <label htmlFor="" className="text-[18px]">Enter your Email.</label>
            <input
              type="email"
              placeholder="Email"
              className="border-1 border-black rounded-2xl p-3 input"
            />
          </div>
        </div>
        <div className="w-[50%] flex flex-col gap-y-2 divMessage">
          <label htmlFor="" className="text-[18px]">Type Your Message.</label>
          <textarea width="100%" name="" id="" placeholder="Description" className="p-3 textarea">
          </textarea>
        </div>
        <div className="flex justify-center items-center divsubmit">
          <input type="submit" className="bg-gray-400"/>
        </div>
      </form>
    </div>
  );
}

export default Contact;
