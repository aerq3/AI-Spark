import React, { useState } from 'react'
import style from './ContactUs.module.css'

export default function ContactUs() {
    const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form submitted:", formData);

    // ✨ امسح الفورم بعد الإرسال
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };
    return <>
        <div className='mt-21 bg-[linear-gradient(to_bottom,_#E5EBFF_34%,_#084FC757)] mb-12'>
            <div  className="relative w-full h-[300px] sm:h-[250px] md:h-[350px] lg:h-[400px]">
                <img src="../src/assets/contact.png" alt="Contact Us photo"  className="w-full h-full object-cover"/>
              <div className="absolute inset-0 bg-[#00000070] z-0"></div>
            </div>
             
            
            <div className="flex justify-center  p-6 mb-12">
                <div className="rounded-xl shadow-md max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-6 p-8">
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full p-8 rounded-4xl bg-white outline-none placeholder:text-black"
                        />
                        <div className="flex flex-col sm:flex-row gap-4">
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full p-8 rounded-4xl bg-white outline-none placeholder:text-black"
                            />
                            <input
                                type="text"
                                name="phone"
                                placeholder="Phone Number"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full p-8 rounded-4xl bg-white outline-none placeholder:text-black"
                            />
                        </div>
                        <textarea
                            name="message"
                            placeholder="Message"
                            rows="5"
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full p-4 rounded-2xl bg-white placeholder:text-black outline-none resize-none"
                        />
                        <button
                            type="submit"
                            className="bg-[#3055D1] text-white px-12 py-2 rounded-full hover:bg-blue-900 transition"
                        >
                            Submit
                        </button>
                    </form>

                    {/* Right Side - Contact Info */}
                    <div className="text-black flex flex-col">
                        <h2 className="text-5xl font-bold">
                            Contact <span className="text-[#4D2C5E]">Us</span>
                        </h2>
                        <p className="text-xl font-light mb-8">
                            For questions, technical assistance, or collaboration opportunities via the contact information provided.
                        </p>

                        <div className="space-y-2 text-xl font-light mt-4 pt-5">
                            <div className="flex items-center gap-2">
                            📧 <span>AiSpark2025@gmail.com</span>
                            </div>
                            <div className="flex items-center gap-2">
                            📞 <span>+201004565702</span>
                            </div>
                            <div className="flex items-center gap-2">
                            📍 <span>Faculty of Specific Education – Fayoum University</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="map-container pb-24 p-12">
                <iframe
                    className='border-0'
                    width={"100%"}
                    height={"500"}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3478.581422367981!2d30.8334016256761!3d29.323951652349635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1459793e27697d39%3A0xe1b475bc4cb18a59!2z2YPZhNmK2Kkg2KfZhNiq2LHYqNmK2Kkg2KfZhNmG2YjYudmK2KkgLSDYrNin2YXYudipINin2YTZgdmK2YjZhQ!5e0!3m2!1sar!2seg!4v1746370873607!5m2!1sar!2seg"
                    allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            </div>

        </div>
    </>


}
