import React from 'react';
import "../style/Contact.css";


function Contact() {
  return (
    <div className='contact'>
      <h1>Contact Us</h1>
      <p><a href="mailto:info@mysite.com">info@mysite.com</a></p>
      <p>Tel: 123-456-7890</p>
      <p>
        500 Terry Francine Street,<br />
        San Francisco, CA 94158
      </p>

      <form className="subscribe-form">
        <label htmlFor="email">Keep Updated on Our Latest Offers</label><br />
        <input 
          type="email" 
          id="email" 
          name="email" 
          placeholder="Enter your email" 
          required 
        />
        <div className="checkbox-container">
          <input 
            type="checkbox" 
            id="newsletter" 
            name="newsletter" 
          />
          <label htmlFor="newsletter">Yes, subscribe me to your newsletter.</label>
        </div>
        <button type="submit">Subscribe</button>
      </form>
    </div>
  );
}
 export default Contact;