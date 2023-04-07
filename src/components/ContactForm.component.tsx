import React, { useState } from "react";
import ContactIcon from "public/Contact.png";
import Image from "next/image";
import WindowSize from "~/Hook/HandleWindowResize.hook";

const ContactForm = () => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`fixed z-20 py-2 tablet:py-4 
      ${
        open
          ? "bottom-[5vh] min-w-[80vw] rounded-[45px]  rounded-b-[45px] tablet:min-w-[40vw] "
          : ` bottom-0 rounded-b-[0px]  rounded-t-[45px] border-b-0 tablet:w-[200px] `
      } 
       right-[10%]  flex max-h-[90vh] max-w-[80vw]  flex-col items-center justify-center rounded-[45px] border-[3px] border-white bg-red drop-shadow-2xl duration-300 ease-linear `}
    >
      <div
        className="p-5 pb-2 "
        onClick={() => {
          setOpen(!open);
        }}
      >
        <p className="pointer-events-none text-rP font-medium text-offWhite">
          Contact
        </p>
      </div>
      <form
        className={`${
          open
            ? " h-full w-full opacity-100"
            : " hidden  h-[0px] w-[0%] opacity-0"
        } 
        duration-300
        `}
        action="https://public.herotofu.com/v1/9eda1ca0-d195-11ed-97cd-e58a101b2c9f"
        method="post"
      >
        <div className="mb-4 flex flex-col items-center px-5">
          <input
            className="m-2 w-full rounded-md border-2 border-offWhite bg-red p-2 py-2 font-semibold text-offWhite placeholder:text-offWhite placeholder:opacity-40"
            placeholder="Your Name"
            name="Name"
            id="name"
            type="text"
            required
          />
          <input
            className="m-2 w-full rounded-md border-2 border-offWhite bg-red p-2 py-2 font-semibold text-offWhite placeholder:text-offWhite placeholder:opacity-40"
            placeholder="Your@email.com"
            name="Email"
            id="email"
            type="email"
            required
          />
          <input
            className="m-2 w-full rounded-md border-2 border-offWhite bg-red p-2 py-2 font-semibold text-offWhite placeholder:text-offWhite placeholder:opacity-40"
            placeholder="xxx-xxx-xxxx"
            name="Phone"
            id="phone"
            type="phone"
          />
          <select
            className="m-2 w-full rounded-md border-2 border-offWhite bg-red p-2 py-2 font-semibold text-offWhite placeholder:text-offWhite placeholder:opacity-40"
            name="Reason For Reaching Out"
            id="Reason For Reaching Out"
            required
            defaultValue="Reason For Reaching Out"
          >
            <option value="Reason For Reaching Out" disabled hidden>
              Reason For Reaching Out
            </option>
            <option>Job Offer</option>
            <option>Contract</option>
            <option>Collaboration</option>
            <option>Other</option>
          </select>
          <textarea
            className="m-2 min-h-[190px] w-full rounded-md border-2 border-offWhite bg-red p-2 py-2 font-semibold text-offWhite placeholder:text-offWhite placeholder:opacity-40"
            placeholder="Message"
            name="Message"
            id="Message"
          />

          <div className=" m-2 flex w-full flex-row justify-center p-2 ">
            <button
              className="mx-2 rounded-md border-2 border-offWhite px-5 py-2 text-xl font-semibold text-offWhite"
              type="submit"
              value="Submit"
            >
              Submit
            </button>
            <button
              className="mx-2 rounded-md border-2 border-offWhite px-5 py-2 text-xl font-semibold text-offWhite"
              value="Cancel"
              type="button"
              onClick={() => {
                setOpen(!open);
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
