import { Footer } from "../components/footer/Footer";
import { Navbar } from "../components/navbar/Navbar";
import { IoMailOutline } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";
import { BiMap } from "react-icons/bi";

export const Contact = () => {
  const contactInfo = [
    {
      icon: IoMailOutline,
      title: "Email",
      value: "support@techstore.com",
      description: "We'll respond within 24 hours",
    },
    {
      icon: FiPhoneCall,
      title: "Phone",
      value: "+1 (555) 123-4567",
      description: "Mon-Fri 9am-6pm EST",
    },
    {
      icon: BiMap,
      title: "Office",
      value: "123 Tech Street, San Francisco, CA 94102",
      description: "Visit us during business hours",
    },
  ];
  return (
    <>
      <Navbar />
      <div className="items-center p-3 bg-gray-600 rounded-b-full">
        <h1 className="text-3xl text-center font-bold pt-3 mb-4 text-blue-600">
          Get in Touch
        </h1>
        <div className="mb-10 flex flex-col md:flex-row items-center justify-center p-6">
          <div className="w-full md:w-1/2 mb-8">
            <form className=" max-w-lg mx-auto p-4 border rounded shadow">
              <h2 className="text-xl md:text-2xl text-center font-bold mt-4 mb-4">
                Send us a Message
              </h2>

              <div className="mb-4">
                <label
                  className="block text-xl md:text-2xl text-gray-100 mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="w-full p-2 border rounded"
                  type="text"
                  id="name"
                  name="name"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-xl md:text-2xl text-gray-100 mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="w-full p-2 border rounded"
                  type="email"
                  id="email"
                  name="email"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-xl md:text-2xl text-gray-100 mb-2"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  className="w-full p-2 border rounded"
                  id="message"
                  name="message"
                  rows={5}
                  required
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  className="bg-blue-600 text-white w-full px-4 py-2 rounded hover:bg-blue-700"
                  type="submit"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-xl md:text-2xl text-center font-bold mb-4">
              Contact Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 p-3 bg-gray-900 p-4 rounded">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="bg-gray-800 p-4 rounded shadow text-center"
                >
                  <info.icon className="text-4xl text-blue-600 mb-2 mx-auto" />
                  <h3 className="text-lg font-semibold mb-1">{info.title}</h3>
                  <p className="text-gray-300 mb-1">{info.value}</p>
                  <p className="text-gray-400 text-sm">{info.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
