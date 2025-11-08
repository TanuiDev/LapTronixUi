import { Footer } from "../components/footer/Footer";
import { Navbar } from "../components/navbar/Navbar";

export const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="">
        <h1 className="text-3xl text-center font-bold mb-4 text-blue-600">Get in Touch</h1>
        <p className="text-center mb-8">We would love to hear from you! Whether you have questions, feedback, or just want to say hello, feel free to reach out.</p>
        <div className="">
          <h2 className="">Send us a Message</h2>          
          <form className="max-w-lg mx-auto p-4 border rounded shadow">
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
              <input className="w-full p-2 border rounded" type="text" id="name" name="name" required />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
              <input className="w-full p-2 border rounded" type="email" id="email" name="email" required />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
              <textarea className="w-full p-2 border rounded" id="message" name="message" rows={5} required></textarea>
            </div>
            <div className="text-center">
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700" type="submit">Send Message</button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};
