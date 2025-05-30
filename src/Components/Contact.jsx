import { FaFacebookF, FaYoutube, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

function Contact() {
  return (
    <div className="Contacts">
            <h5 className="Contacts_title">GET IN TOUCH</h5>
      <div className="Contacts_Container">
            <div className="Contacts_content">
                <h1>We are Here to Secure You</h1>
                <p1>
                  Whether you have questions, need help getting started, or want to learn more —
                  reach out anytime.
                </p1>
            </div>
        <div className="Contacts_content1">
          <div className="Contact_Details">
              <h2>Contact Details:</h2>
              <p>📞 Phone: +1 (123) 456-7890</p>
              <p>📧 Email: support@Telix.com</p>
              <p>📍 Address: 123 Wellness Way, Calm City, CA 90210</p>

          
                <a href="/" target="_blank" rel="noopener noreferrer">
                    <FaFacebookF />
                </a>
                <a href="/" target="_blank" rel="noopener noreferrer">
                    <FaYoutube />
                </a>
                <a href="/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                </a>
                <a href="/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedinIn />
                </a>
          

              <p>🕒 We are active 24/7.</p>
          </div>
          

          <form className="form">
            <h3>Send us a Message</h3>
           <div className="form1">
            <fieldset>
              <legend>Email</legend>
              <label htmlFor="email"></label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="you@example.com"
                required
              />
            </fieldset>

            <fieldset>
              <legend>Message</legend>
              <label For="message"></label>
              <textarea
                id="message"
                name="message"
                placeholder="Write your message here..."
                rows="4"
                required
              ></textarea>
            </fieldset>

            <button type="submit">Send Message</button>
            </div>
          </form>

        </div>
      </div>
    </div>
  );
}

export default Contact;
