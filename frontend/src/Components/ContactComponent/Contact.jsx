import React, { useState } from "react";
import packing from "../../assets/packing.jpg";
import medical from "../../assets/medical.png";
import universevisuals from "../../assets/UniverseVisuals.png";
const InputField = ({ label, type, placeholder }) => (
  <div>
    <label
    className="text-[#98CE16] text-sm font-bold block mb-2"
    htmlFor={label.toLowerCase().replace(" ", "-")}
    >
      {label}
    </label>
    <input
      id={label.toLowerCase().replace(" ", "-")}
      type={type}
      placeholder={placeholder}
      className="w-full rounded-md py-2.5 px-4 border border-gray-300 text-sm outline-[#98CE16]"
      required
    />
  </div>
);

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);

    const name = event.target["your-name"].value;
    const email = event.target["your-email"].value;
    const phone = event.target["your-number"].value;
    const website = event.target["website"].value;
    const company = event.target["company"].value;
    const subject = event.target["subject"].value;
    const message = event.target["message"].value;

    if (name && email && phone && website && company && subject && message) {
      const whatsappMessage = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nWebsite: ${website}\nCompany: ${company}\nSubject: ${subject}\nMessage: ${message}`;

      const whatsappUrl = `https://wa.me/9965085475?text=${encodeURIComponent(whatsappMessage)}`;

      window.location.href = whatsappUrl;

      setTimeout(() => {
        setLoading(false);
        alert("Message sent via WhatsApp!");
      }, 2000);
    } else {
      setLoading(false);
      alert("Please fill in all the fields!");
    }
  };

  return (
    <div className="font-[sans-serif]">
      {/* Header Image */}
      <div
        className="bg-gradient-to-r from-red-700 to-red-300 w-full h-64 sm:h-96"
        style={{
          backgroundImage: `url(${packing})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      {/* Inquiry Section */}
      <div className="-mt-12 sm:-mt-16 mb-6 px-4">
        <div className="mx-auto max-w-6xl shadow-lg p-6 sm:p-8 relative bg-black rounded-xl">
          <h2 className="text-2xl sm:text-4xl text-[#98CE16] font-bold text-center">
            Product Inquiry
          </h2>

          <div className="mt-6 text-white flex flex-col md:flex-row gap-6">
            {/* Contact Info */}
            <div className="md:flex-1">
              <p>
                At Universe Visuals, we are always here to help you connect,
                grow, and explore new opportunities. Feel free to reach out to
                us through any of the following ways:
              </p>
              <p className="mt-4 font-semibold text-[#98CE16]">Address:</p>
              <p>
                {/* Universe Visuals:
                <br /> */}
                <img src={universevisuals} alt="" className="w-48 h-32 ml-5 -mt-5 -mb-5" />
                9/W 2A, 1st Floor Akilandeswari Nagar,
                <br />
                Canara Bank Colony, Ammapatti Salai,
                <br />
                Thuraiyur, Tiruchirappalli - 621010.
              </p>
              <p className="mt-4 font-semibold text-[#98CE16]">Phone:</p>
              <p>+91 99650 85475</p>
              <p className="mt-4 font-semibold text-[#98CE16]">Email:</p>
              <p>info@universevisuals.com</p>
            </div>

            {/* Image */}
            <div className="md:flex-1 flex justify-center">
              <img
                src={medical}
                alt="Medical Services"
                className="w-64 h-64 sm:w-80 sm:h-96 rounded-md"
              />
            </div>
          </div>

          {/* Google Map */}
          <div className="relative w-full pt-[56.25%] sm:pt-[40%] mt-8 max-w-full">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1903.160878978524!2d78.6000002906096!3d11.143402580421597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babab3eaaaaaaad%3A0x243dc7a7a3ff4087!2sUNIVERSE%20EDUCATIONAL%20VISUALS!5e0!3m2!1sen!2sin!4v1733200024704!5m2!1sen!2sin"
              title="Google Map"
              allowFullScreen
            ></iframe>
          </div>

          {/* Contact Form */}
          <form
            className="grid gap-6 mt-8 sm:grid-cols-2"
            onSubmit={handleSubmit}
          >
            <InputField label="Your Name" type="text" placeholder="Enter Name" />
            <InputField label="Your Email" type="email" placeholder="Email" />
            <InputField label="Your Number" type="tel" placeholder="Phone No." />
            <InputField label="Website" type="text" placeholder="Website" />
            <InputField label="Company" type="text" placeholder="Company" />
            <InputField label="Subject" type="text" placeholder="Subject" />

            <div className="col-span-full">
              <label className="text-white text-sm block mb-2 font-bold">
                Message
              </label>
              <textarea
                name="message"
                placeholder="Message"
                rows="4"
                className="w-full rounded-md px-4 border border-gray-300 text-sm pt-3 outline-[#98CE16]"
                required
              />
            </div>

            <div className="flex items-center col-span-full">
              <input
                id="checkbox1"
                type="checkbox"
                className="w-4 h-4 mr-3"
                required
              />
              <label htmlFor="checkbox1" className="text-sm text-white">
                I agree to the{" "}
                <a href="/TermsAndConditions" className="underline text-blue-500">
                  Terms and Conditions
                </a>{" "}
                and{" "}
                <a href="/PrivacyPolicy" className="underline text-blue-500">
                  Privacy Policy
                </a>
              </label>
            </div>

            <button
              type="submit"
              className="font-sans mt-10 flex justify-center gap-2 items-center shadow-xl text-lg text-[#ebf0e9] bg-gradient-to-t from-[#000000] via-[#232731] to-[#a8bcdb] backdrop-blur-md lg:font-semibold border-gray-50 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group w-1/3"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
