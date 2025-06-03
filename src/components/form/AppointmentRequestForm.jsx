import React, {useState} from "react"
import emailjs from "@emailjs/browser"
import {Clock, ClockV2} from "../../assets/assets"
import Swal from "sweetalert2"
import "react-phone-number-input/style.css"
import PhoneInputWithCountrySelect from "react-phone-number-input"

const AppointmentRequestForm = () => {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    project_details: "",
    questions: "",
  })

  const [isSent, setIsSent] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }
  const handlePhoneChange = (value) => {
    setFormData({...formData, phone: value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (formData.phone.length === 12) {
      emailjs
        .send(
          "service_6azo6oa",
          "template_7x1kxf8",
          formData,
          "DYxkS4Zx6AD3J6JhU"
        )
        .then(
          (response) => {
            console.log("Email sent successfully!", response)
            setIsSent(true)
            setFormData({
              full_name: "",
              email: "",
              phone: "",
              date: "",
              time: "",
              project_details: "",
              questions: "",
            })
          },
          (error) => {
            console.log("Failed to send email:", error)
            setError("Failed to send the email. Please try again later.")
          }
        )
    } else {
        setError("please enter a valid phone number")
    }
  }

  {
    isSent &&
      Swal.fire({
        icon: "success",
        title: "Email sent successfully!",
        confirmButtonText: "OK",
      }).then((result) => {
        if (result.isConfirmed) {
          setIsSent(false)
        }
      })
  }
  {
    error &&
      Swal.fire({
        icon: "error",
        title: "Something went wrong!",
        text: error,
      }).then((result) => {
        if (result.isConfirmed) {
          setError("")
        }
      })
  }

  return (
    <div
      id="appointment"
      className="container px-8 sm:px-[70px] md:px-[80px] bg-gray-100 lg:px-[100px] xl:px-[110px] py-[32px] sm:py-[64px] mb-[3rem] max-w-[1920px]"
    >
      <div className="md:flex justify-between gap-40">
        <div className="lg:w-3/4 w-full md:pr-4">
          <h3 className="lg:text-[40px] text-2xl text-gray-900 mb-4">
            Appointment Request Form
          </h3>

          <form onSubmit={handleSubmit}>
            <div className="mb-4 lg:mb-24">
              <label className="block text-[16px] text-gray-700 font-semibold mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="full_name"
                value={formData.full_name}
                onChange={handleChange}
                required
                placeholder="Enter your Full Name"
                className="rounded-xl w-full p-3 bg-gray-200  placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:mb-24">
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your Email"
                  className="rounded-xl w-full p-3 bg-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">
                  Phone Number
                </label>

                <PhoneInputWithCountrySelect
                  defaultCountry="AU"
                  international
                  countryCallingCodeEditable={false}
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handlePhoneChange}
                />
                {/* <input
                                    type="number"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    placeholder="Enter your Phone Number"
                                    className="rounded-xl w-full p-3 bg-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300"
                                /> */}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:mb-24">
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">
                  Preferred Appointment Date
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="rounded-xl w-full p-3 bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">
                  Preferred Appointment Time
                </label>
                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                  className="rounded-xl w-full p-3 bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300"
                />
              </div>
            </div>

            <div className="mb-4 lg:mb-24">
              <label className="block text-gray-700 font-semibold mb-2">
                Project Details/Description
              </label>
              <textarea
                name="project_details"
                value={formData.project_details}
                onChange={handleChange}
                required
                placeholder="Describe your project"
                className="rounded-xl w-full p-3 bg-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300"
                rows="3"
              ></textarea>
            </div>
            <div className="mb-4 lg:mb-24">
              <label className="block text-gray-700 font-semibold mb-2">
                Questions or Additional Information
              </label>
              <textarea
                name="questions"
                value={formData.questions}
                onChange={handleChange}
                placeholder="Enter any questions or details"
                className="rounded-xl w-full p-3 bg-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300"
                rows="3"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-xl text-white font-600 py-3 px-7 rounded-xl hover:bg-blue-700 transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="md:w-1/2 hidden h-[700px] lg:flex lg:justify-center lg:align-middle pl-20">
          <img
            src={ClockV2}
            alt="Calendar and Clock"
            className="h-auto rounded-2xl"
          />
        </div>
      </div>
    </div>
  )
}

export default AppointmentRequestForm
