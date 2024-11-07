import { useState } from 'react';
import packing from '../../assets/packing.jpg';
import medical from '../../assets/medical.png';

const InputField = ({ label, type, placeholder }) => (
  <div>
    <label className="text-gray-200 text-sm block mb-2">{label}</label>
    <input
      type={type}
      placeholder={placeholder}
      className="w-full rounded-md py-2.5 px-4 border border-gray-300 text-sm outline-red-500"
      required
    />
  </div>
);

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      alert('Message sent!');
    }, 2000);
  };

  return (
    <div className="font-[sans-serif]">

      <div
        className="bg-gradient-to-r from-red-700 to-red-300 w-full h-96"
        style={{
          backgroundImage: `url(${packing})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
      </div>



      <div className="-mt-16 mb-6 px-4">
        <div className="mx-auto max-w-6xl shadow-lg p-8 relative bg-gray-500 rounded-md">
          <h2 className="text-4xl text-red-500 font-bold text-center">Product Inquiry</h2>


          <div className="mt-6 text-white flex flex-col md:flex-row">
            <div className="md:flex-1" data-aos="fade-right">
              <p>
                At Universe Educational Visuals, We are always here to help you connect, grow, and explore new opportunities.
                Whether you have a question, need more information about our services, or want to discuss a potential partnership,
                we would love to hear from you. Feel free to reach out to us through any of the following ways:
              </p>
              <p className="mt-4 font-semibold text-red-500">Address:</p>
              Universe Educational Visuals<br />
              9/W, 1A, Akilandeswari Nagar,<br />
              Canara Bank Colony,Ammapatti Salai, <br />
              Thuraiyur, Dhan Lakshmi Nagar<br />
              Tiruchirappalli - 621010, Tamil Nadu.
              <p className="mt-4 font-semibold text-red-500">Phone:</p>
              <p>+8048955493</p>
              <p className="mt-4 font-semibold text-red-500">Email:</p>
              <p>info@universeeducationalvisuals.com</p>
            </div>
            <div className="md:flex-1 flex justify-center">
              <img src={medical} alt="Medical Services" className="w-80 h-96" data-aos="fade-left" />
            </div>
          </div>

          {/* Inquiry Form */}
          <form className="mt-8 grid sm:grid-cols-2 gap-6 " onSubmit={handleSubmit}>
            <InputField label="Your Name" type="text" placeholder="Enter Name" />
            <InputField label="Your Email" type="email" placeholder="Email" />
            <InputField label="Your Number" type="tel" placeholder="Phone No." />
            <InputField label="Website" type="text" placeholder="Website" />
            <InputField label="Company" type="text" placeholder="Company" />
            <InputField label="Subject" type="text" placeholder="Subject" />

            <div className="col-span-full">
              <label className="text-white text-sm block mb-2">Message</label>
              <textarea
                placeholder="Message"
                rows="6"
                className="w-full rounded-md px-4 border border-gray-300 text-sm pt-3 outline-red-500"
                required
              />
            </div>

            <div className="flex items-center col-span-full">
              <input id="checkbox1" type="checkbox" className="w-4 h-4 mr-3 shrink-0" required />
              <label htmlFor="checkbox1" className="text-sm text-gray-500">
                I agree to the <a href="/TermsAndConditions" className="underline">Terms and Conditions</a> and <a href="/PrivacyPolicy" className="underline">Privacy Policy</a>
              </label>
            </div>

            <button class="border hover:scale-95 duration-300 relative group cursor-pointer text-sky-50  overflow-hidden h-12 w-48 rounded-full bg-sky-200 p-2 flex justify-center items-center font-extrabold">

              <div class="absolute right-32 -top-4  group-hover:top-1 group-hover:right-2 z-10 w-40 h-40 rounded-full group-hover:scale-150 duration-500 bg-red-600"></div>
              <div class="absolute right-2 -top-4  group-hover:top-1 group-hover:right-2 z-10 w-32 h-32 rounded-full group-hover:scale-150  duration-500 bg-red-500"></div>
              <div class="absolute -right-12 top-4 group-hover:top-1 group-hover:right-2 z-10 w-24 h-24 rounded-full group-hover:scale-150  duration-500 bg-red-400"></div>
              <div class="absolute right-20 -top-4 group-hover:top-1 group-hover:right-2 z-10 w-16 h-16 rounded-full group-hover:scale-150  duration-500 bg-red-600"></div>
              <p class="z-10">Send Message</p>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
