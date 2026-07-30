import {
    FaEnvelope,
    FaPhoneAlt,
    FaMapMarkerAlt,
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
} from "react-icons/fa";

function Contact() {
    return (
        <section className="max-w-7xl mx-auto px-6 py-20">
            <div className="grid lg:grid-cols-2 gap-16">
                {/* Left Side */}
                <div>
                    <h1 className="text-6xl font-bold text-gray-900 mb-6">
                        Let's talk
                    </h1>

                    <p className="text-gray-600 text-lg leading-8 mb-10">
                        We collaborate with thousands of creators,
                        entrepreneurs and complete legends.
                    </p>

                    <hr className="mb-10" />

                    {/* Email */}
                    <div className="flex items-center gap-5 mb-8">
                        <div className="w-14 h-14 rounded-full bg-black text-white flex items-center justify-center">
                            <FaEnvelope />
                        </div>

                        <div>
                            <h3 className="font-semibold text-2xl">Our email</h3>
                            <p className="text-gray-500">hello@example.com</p>
                        </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-center gap-5 mb-8">
                        <div className="w-14 h-14 rounded-full bg-black text-white flex items-center justify-center">
                            <FaPhoneAlt />
                        </div>

                        <div>
                            <h3 className="font-semibold text-2xl">Call us</h3>
                            <p className="text-gray-500">+123 456 7892</p>
                        </div>
                    </div>

                    {/* Address */}
                    <div className="flex items-center gap-5 mb-10">
                        <div className="w-14 h-14 rounded-full bg-black text-white flex items-center justify-center">
                            <FaMapMarkerAlt />
                        </div>

                        <div>
                            <h3 className="font-semibold text-2xl">Find us</h3>
                            <p className="text-gray-500">Open Google Maps</p>
                        </div>
                    </div>

                    <hr className="mb-8" />

                    <div className="flex gap-6 text-2xl">
                        <FaFacebookF className="cursor-pointer hover:text-gray-600" />
                        <FaInstagram className="cursor-pointer hover:text-gray-600" />
                        <FaLinkedinIn className="cursor-pointer hover:text-gray-600" />
                    </div>
                </div>

                {/* Right Side */}
                <div className="bg-gray-100 rounded-3xl p-10">
                    <form className="space-y-10">
                        <div className="grid md:grid-cols-2 gap-10">
                            <div>
                                <label className="block text-gray-700 mb-3">
                                    First name
                                </label>

                                <input
                                    type="text"
                                    className="w-full bg-transparent border-b border-gray-300 outline-none pb-3"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-700 mb-3">
                                    Last name
                                </label>

                                <input
                                    type="text"
                                    className="w-full bg-transparent border-b border-gray-300 outline-none pb-3"
                                />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-10">
                            <div>
                                <label className="block text-gray-700 mb-3">
                                    Email
                                </label>

                                <input
                                    type="email"
                                    className="w-full bg-transparent border-b border-gray-300 outline-none pb-3"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-700 mb-3">
                                    Phone
                                </label>

                                <input
                                    type="text"
                                    className="w-full bg-transparent border-b border-gray-300 outline-none pb-3"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-gray-700 mb-3">
                                Message
                            </label>

                            <textarea
                                rows="4"
                                className="w-full bg-transparent border-b border-gray-300 outline-none resize-none"
                            ></textarea>
                        </div>

                        <button
                            className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition"
                        >
                            Submit Now
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;