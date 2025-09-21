import React, {useState} from "react"
import {Clock, ClockV2} from "../../assets/assets"
import Swal from "sweetalert2"
import "react-phone-number-input/style.css"
import PhoneInputWithCountrySelect from "react-phone-number-input"
import config from "../../config/config"

const AppointmentRequestForm = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    project_details: "",
    questions: "",
    services: [],
  })

  const [attachments, setAttachments] = useState([])
  const [isSent, setIsSent] = useState(false)
  const [error, setError] = useState("")

  const servicesList = [
    "Soil Tests/Site Classifications",
    "Geotechnical Assessments",
    "Geotechnical Site Investigations",
    "Land Capability Assessment",
    "Landslip Risk Assessment",
    "Contamination Assessment",
    "Saturated Hydraulic Conductivity Test",
    "Other",
  ]

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }
  const handlePhoneChange = (value) => {
    setFormData({...formData, phone: value})
  }

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files)
    const maxFileSize = 5 * 1024 * 1024 
    const allowedTypes = [
      "image/jpeg",
      "image/jpg",
      "image/png",
      "application/pdf",
      "text/plain",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ]

    const validFiles = files.filter((file) => {
      if (file.size > maxFileSize) {
        setError(`File ${file.name} is too large. Maximum size is 5MB.`)
        return false
      }
      if (!allowedTypes.includes(file.type)) {
        setError(
          `File ${file.name} has unsupported format. Allowed formats: JPG, PNG, PDF, TXT, DOC, DOCX`
        )
        return false
      }
      return true
    })

    setAttachments(validFiles)
    setError("") 
  }

  const removeFile = (index) => {
    setAttachments((prev) => prev.filter((_, i) => i !== index))
  }

  const handleServiceChange = (service) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (formData.phone.length === 12) {
      
      const formDataToSend = new FormData()

      
      formDataToSend.append("first_name", formData.first_name)
      formDataToSend.append("last_name", formData.last_name)
      formDataToSend.append("email", formData.email)
      formDataToSend.append("phone", formData.phone)
      formDataToSend.append("project_details", formData.project_details)
      formDataToSend.append("questions", formData.questions)
      formDataToSend.append("services", formData.services.join(", "))

     
      attachments.forEach((file, index) => {
        formDataToSend.append(`attachment_${index}`, file)
      })

      
      fetch(`${config.API_BASE_URL}/api/send-email`, {
        method: "POST",
        body: formDataToSend,
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok")
          }
          return response.json()
        })
        .then((data) => {
          console.log("Email sent successfully!", data)
          setIsSent(true)
          setFormData({
            first_name: "",
            last_name: "",
            email: "",
            phone: "",
            project_details: "",
            questions: "",
            services: [],
          })
          setAttachments([])
        })
        .catch((error) => {
          console.log("Failed to send email:", error)
          setError("Failed to send the email. Please try again later.")
        })
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
        <div className="lg:w-7/10 w-full md:pr-4">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:mb-24">
              <div className="mb-4">
                <label className="block text-[16px] text-gray-700 font-semibold mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  name="first_name"
                  value={formData.first_name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your First Name"
                  className="rounded-xl w-full p-3 bg-gray-200  placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  name="last_name"
                  value={formData.last_name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your Last Name"
                  className="rounded-xl w-full p-3 bg-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300"
                />
              </div>
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
              </div>
            </div>

            <div className="mb-4 lg:mb-24">
              <label className="block text-gray-700 font-semibold mb-2">
                Services Required
              </label>
              <p className="text-sm text-gray-500 mb-3">
                Please select the services you require (you can select multiple)
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {servicesList.map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      id={`service-${index}`}
                      checked={formData.services.includes(service)}
                      onChange={() => handleServiceChange(service)}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                    />
                    <label
                      htmlFor={`service-${index}`}
                      className="text-sm text-gray-700 cursor-pointer"
                    >
                      {service}
                    </label>
                  </div>
                ))}
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

            <div className="mb-4 lg:mb-24">
              <label className="block text-gray-700 font-semibold mb-2">
                File Attachments (Optional)
              </label>
              <p className="text-sm text-gray-500 mb-3">
                Attach relevant documents, images, or plans. Max 5MB per file.
                Supported formats: JPG, PNG, PDF, TXT, DOC, DOCX
              </p>
              <input
                type="file"
                multiple
                onChange={handleFileChange}
                className="rounded-xl w-full p-3 bg-gray-200 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-gray-300"
                accept=".jpg,.jpeg,.png,.pdf,.txt,.doc,.docx"
              />

              {attachments.length > 0 && (
                <div className="mt-3">
                  <p className="text-sm font-semibold text-gray-700 mb-2">
                    Selected files:
                  </p>
                  <div className="space-y-2">
                    {attachments.map((file, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between bg-white p-2 rounded-lg border"
                      >
                        <div className="flex items-center space-x-2">
                          <span className="text-sm text-gray-600">
                            {file.name}
                          </span>
                          <span className="text-xs text-gray-400">
                            ({(file.size / 1024 / 1024).toFixed(2)}MB)
                          </span>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeFile(index)}
                          className="text-red-500 hover:text-red-700 text-sm font-semibold"
                        >
                          Remove
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-xl text-white font-600 py-3 px-7 rounded-xl hover:bg-blue-700 transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="lg:h-[600px] hidden lg:flex lg:justify-center lg:align-middle pl-0">
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
