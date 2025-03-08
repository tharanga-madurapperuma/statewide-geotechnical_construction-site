import React from "react"
import {Clock} from "../../assets/assets"
// import calendarClock from './calendar_clock.png';

const AppointmentRequestForm = () => {
  return (
    <div className="container mx-auto   px-4 lg:px-[80px]">
      <div className="text-gray-500 test-[18px] mb-4">
        Our team is available Monday through Friday, 9:00 AM to 5:00 PM. We're
        happy to help you with any questions, discuss your upcoming projects, or
        schedule a consultation.
      </div>
      <h2 className="lg:text-[48px] lg:py-[2rem] text-2xl font-semibold text-gray-900 mb-2">
        Request an Initial Appointment
      </h2>
      <p className="text-gray-500 mb-8">
        Ready to start your project or need professional advice? Let's book an
        initial consultation at your convenience. Fill out the form below to
        schedule an appointment with one of our experts. We'll contact you to
        confirm your appointment and discuss your project needs.
      </p>
      <div className="md:flex">
        <div className="lg:w-2/3 w-full md:pr-4">
          <h3 className="lg:text-[40px] w-text-2xl text-gray-900 mb-4">
            Appointment Request Form
          </h3>
          <form>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-semibold mb-2"
                htmlFor="full_name"
              >
                Full Name
              </label>
              <input
                type="text"
                id="full_name"
                placeholder="Enter your Full Name"
                className=" rounded w-full py-2 px-3 bg-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-semibold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your Email"
                  className=" rounded w-full py-2 px-3 bg-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-semibold mb-2"
                  htmlFor="phone"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="Enter your Phone Number"
                  className=" rounded w-full py-2 px-3 bg-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-semibold mb-2"
                  htmlFor="date"
                >
                  Preferred Appointment Date
                </label>
                <input
                  type="date"
                  id="date"
                  className=" rounded w-full py-2 px-3 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-semibold mb-2"
                  htmlFor="time"
                >
                  Preferred Appointment Time
                </label>
                <input
                  type="time"
                  id="time"
                  className=" rounded w-full py-2 px-3 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300"
                />
              </div>
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 font-semibold mb-2"
                htmlFor="project_details"
              >
                Project Details/Description
              </label>
              <textarea
                id="project_details"
                placeholder="Describe your project"
                className=" rounded w-full py-2 px-3 bg-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300"
                rows="3"
              ></textarea>
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-semibold mb-2"
                htmlFor="questions"
              >
                Questions or Additional Information
              </label>
              <textarea
                id="questions"
                placeholder="Enter any questions or details"
                className="rounded w-full py-2 px-3 bg-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300"
                rows="3"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white font-600 py-3 px-8 rounded-xl"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="md:w-1/2  hidden h-[700px] lg:flex lg:justify-center lg:align-middle pt-30 md:pl-4 md:mt-0 mt-4">
          <img src={Clock} alt="Calendar and Clock" className="w-[70%] h-auto" />
        </div>
      </div>
      <p className="text-gray-500 mt-4">
        Once you submit the form, one of our team members will get back to you
        within 24 hours to confirm the date and time of your appointment and
        provide any additional information you may need.
      </p>
    </div>
  )
}

export default AppointmentRequestForm
