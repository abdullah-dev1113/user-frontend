import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div>
      <div>
        <p className="text-center text-2xl text-gray-500 pt-10">
          ABOUT <span className="text-gray-700 font-medium">US</span>
        </p>
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-10">
        <img
          className="w-full md:max-w-[360px]"
          src={assets.about_image}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600">
          <p>
            Welcome to prescripto, your trusted partner in managing your
            healthcare needs conveniently and efficiently. At prescripto, we
            understand the challenges individuals face when it comes to
            scheduling doctor appointment and managing their health records.
          </p>
          <p>
            Prescripto is committed to excellence in healthcare technology. We
            continuously strive to enhance our plateform integrating the latest
            advancement to improve to user experience and deliver superior
            service. Whether you are booking our first appointment or managing
            ongoing care, Prescripto is here to support you every step of the
            way.
          </p>
          <strong className="text-gray-800">Our Vision</strong>
          <p>
            Our vision at to prescripto is to create a seamless healthcare
            experience foe every user. We aim to bridge the gap between patient
            and healthcare provider, making it easier for you to access the care
            you need, when you need it.
          </p>
        </div>
      </div>
      <div className="text-xl my-4">
        <p>
          WHY <span className="text-gray-700 font-semibold">CHOOSE US?</span>
        </p>
      </div>
      <div className="flex flex-col md:flex-row md-20">
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <strong>EFFICIENCY:</strong>
          <p>
            Streamlined Appointment scheduling That Fits Into Your Busy
            LifeStyle.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <strong>CONVENIENCE:</strong>
          <p>
            Access To A Network Of Trusted HealthCare Professionals in Your
            Area.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <strong>PERSONALIZATION:</strong>
          <p>
            Tailored Recommendations And Reminders To Help You Stay On Top Of
            Your Health.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
