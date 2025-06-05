import { FaFacebookF, FaYoutube, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

function Contact() {
  return (
    <div className="flex flex-col items-center px-4 py-10">
      <div className="text-xs uppercase tracking-wide text-gray-600 mb-2">Get in Touch</div>
      <h1 className="text-3xl font-bold text-center text-[#003333] mb-2">We're Here to<br />Support You</h1>
      <p className="text-center text-gray-700 mb-8 max-w-2xl">
        Whether you have questions, need help getting started, or want to learn more — reach out anytime.
      </p>

      <div className="bg-white shadow-md rounded-2xl p-8 max-w-3xl w-full grid md:grid-cols-2 gap-6">
        {/* Contact Details */}
        <div>
          <h2 className="text-lg font-semibold text-[#003333] mb-4">Contact Details:</h2>
          <p className="mb-2"><strong>Email:</strong> support@Telix.com</p>
          <p className="mb-2"><strong>Phone:</strong> +1 (123) 456-7890</p>
          <p className="mb-4"><strong>Address:</strong> 123 Wellness Way, Calm City, CA 90210</p>

          <div className="flex space-x-4 mb-4 text-[#003333]">
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaYoutube /></a>
          </div>

          <p className="text-sm text-gray-600">We typically respond within 12 hours.</p>
        </div>

        {/* Message Form */}
        <form className="bg-[#fdf7f2] rounded-xl p-6 space-y-4">
          <h3 className="text-md font-semibold text-[#003333]">Send Us a Message</h3>
          <div>
            <label className="block text-sm mb-1" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="you@example.com"
              className="w-full border-b border-gray-400 focus:outline-none bg-transparent py-2"
              required
            />
          </div>
          <div>
            <label className="block text-sm mb-1" htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Write your message here..."
              rows="4"
              className="w-full border-b border-gray-400 focus:outline-none bg-transparent py-2"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-[#003333] text-white py-2 rounded-full hover:bg-[#002222] transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
