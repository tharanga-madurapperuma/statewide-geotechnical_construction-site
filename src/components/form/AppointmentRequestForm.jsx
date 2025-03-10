import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { Clock } from "../../assets/assets";
import Swal from "sweetalert2";

const AppointmentRequestForm = () => {
    const [formData, setFormData] = useState({
        full_name: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        project_details: "",
        questions: "",
    });

    const [isSent, setIsSent] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
            .send(
                "service_6azo6oa",
                "template_7x1kxf8",
                formData,
                "DYxkS4Zx6AD3J6JhU"
            )
            .then(
                (response) => {
                    console.log("Email sent successfully!", response);
                    setIsSent(true);
                    setFormData({
                        full_name: "",
                        email: "",
                        phone: "",
                        date: "",
                        time: "",
                        project_details: "",
                        questions: "",
                    });
                },
                (error) => {
                    console.log("Failed to send email:", error);
                    setError(
                        "Failed to send the email. Please try again later."
                    );
                }
            );
    };

    {
        isSent &&
            Swal.fire({
                icon: "success",
                title: "Email sent successfully!",
                confirmButtonText: "OK",
            }).then((result) => {
                if (result.isConfirmed) {
                    setIsSent(false);
                }
            });
    }
    {
        error &&
            Swal.fire({
                icon: "error",
                title: "Something went wrong!",
                text: error,
            }).then((result) => {
                if (result.isConfirmed) {
                    setError("");
                }
            });
    }

    return (
        <div className="container px-8 sm:px-[70px] md:px-[80px] lg:px-[100px] xl:px-[110px] lg:mt-[128px] mb-[3rem] max-w-[1920px]">
            <div className="text-gray-500 text-[18px] text-justify mb-4">
                Our team is available Monday through Friday, 9:00 AM to 5:00 PM.
                We're happy to help you with any questions, discuss your
                upcoming projects, or schedule a consultation.
            </div>
            <h2 className="lg:text-[48px] lg:py-[2rem] text-2xl font-semibold text-gray-900 mb-2">
                Request an Initial Appointment
            </h2>
            <p className="text-gray-500 text-[18px] text-justify mb-8">
                Ready to start your project or need professional advice? Let's
                book an initial consultation at your convenience. Fill out the
                form below to schedule an appointment with one of our experts.
                We'll contact you to confirm your appointment and discuss your
                project needs.
            </p>
            <div className="md:flex">
                <div className="lg:w-2/3 w-full md:pr-4">
                    <h3
                        id="appointment"
                        className="lg:text-[40px] text-2xl text-gray-900 mb-4"
                    >
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
                                className="rounded w-full py-2 px-3 bg-gray-100  placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300"
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
                                    className="rounded w-full py-2 px-3 bg-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-semibold mb-2">
                                    Phone Number
                                </label>
                                <input
                                    type="number"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    placeholder="Enter your Phone Number"
                                    className="rounded w-full py-2 px-3 bg-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300"
                                />
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
                                    className="rounded w-full py-2 px-3 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300"
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
                                    className="rounded w-full py-2 px-3 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300"
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
                                className="rounded w-full py-2 px-3 bg-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300"
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
                <div className="md:w-1/2 hidden h-[700px] lg:flex lg:justify-center lg:align-middle md:pl-4">
                    <img
                        src={Clock}
                        alt="Calendar and Clock"
                        className="w-[70%] h-auto"
                    />
                </div>
            </div>
        </div>
    );
};

export default AppointmentRequestForm;
