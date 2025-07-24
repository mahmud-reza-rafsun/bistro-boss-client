import Cover from "../Shared/Cover/Cover";
import banner from "../../assets/contact/banner.jpg";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { PhoneCall, MapPin, Clock, Send } from "lucide-react";

const ContactForm = () => {
  return (
    <div>
      <Cover
        img={banner}
        heading={"CONTACT US"}
        desc={"Would you like to try a dish?"}
      />
      <div className="max-w-11/12 mx-auto">
        <div>
          <SectionTitle subTitle={"Visit Us"} title={"OUR LOCATION"} />
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 p-6 bg-white">
          {/* Phone Card */}
          <div className="bg-base-100 w-96 shadow-sm">
            <div className="bg-yellow-600 text-center py-3">
              <PhoneCall className="text-white w-5 h-5 mx-auto" />
            </div>
            <div className="px-4 pb-4">
              <div className="card-body py-12 items-center bg-gray-100">
                <h2 className="card-title">Phone</h2>
                <p>+38 (012) 34 56 789</p>
              </div>
            </div>
          </div>

          {/* Address Card */}
          <div className="bg-base-100 w-96 shadow-sm">
            <div className="bg-yellow-600 text-center py-3">
              <MapPin className="text-white w-5 h-5 mx-auto" />
            </div>
            <div className="px-4 pb-4">
              <div className="card-body py-12 items-center bg-gray-100">
                <h2 className="card-title">Address</h2>
                <p>+38 (012) 34 56 789</p>
              </div>
            </div>
          </div>

          {/* Working Card */}
          <div className="bg-base-100 w-96 shadow-sm">
            <div className="bg-yellow-600 text-center py-3">
              <Clock className="text-white w-5 h-5 mx-auto" />
            </div>
            <div className="px-4 pb-4">
              <div className="card-body py-8 items-center bg-gray-100">
                <h2 className="card-title">Working</h2>
                <p>Mon - Fri: 08:00 - 22:00</p>
                <p>Sat - Sun: 10:00 - 23:00</p>
              </div>
            </div>
          </div>
        </div>
        {/* contact form */}
        <SectionTitle subTitle={"Send Us a Message"} title={"CONTACT FORM"} />
        <div className="bg-gray-100 flex justify-center items-center min-h-screen mb-10 rounded-md">
          <div className="bg-white p-8 rounded-md shadow-md w-full max-w-2xl">
            <form className="space-y-6">
              {/* Name and Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block font-medium mb-1">Name*</label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  />
                </div>
                <div>
                  <label className="block font-medium mb-1">Email*</label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="block font-medium mb-1">Phone*</label>
                <input
                  type="text"
                  placeholder="Enter your phone number"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block font-medium mb-1">Message*</label>
                <textarea
                  rows="5"
                  placeholder="Write your message here"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                ></textarea>
              </div>

              {/* reCAPTCHA */}
              <div className="flex items-center space-x-4">
                <input
                  type="checkbox"
                  id="recaptcha"
                  className="w-5 h-5 border-gray-300"
                />
                <label htmlFor="recaptcha" className="text-sm">
                  I'm not a robot
                </label>
                {/* Fake CAPTCHA box */}
                <div className="w-24 h-10 bg-gray-100 border border-gray-300 text-[10px] text-center p-1">
                  <div className="text-blue-600 font-bold">reCAPTCHA</div>
                  <div className="text-gray-400">Privacy - Terms</div>
                </div>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="bg-yellow-800 hover:bg-yellow-700 text-white px-6 py-2 rounded-md flex items-center duration-500 justify-center cursor-pointer space-x-2"
                >
                  <span>Send Message</span>
                  <Send className="w-5" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
