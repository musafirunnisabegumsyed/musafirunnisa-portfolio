import React from 'react';

function Contact() {
  const submitForm = (e) => {
    e.preventDefault();
    alert('Form submitted!');
  };

  return (
    <section id="contact" className="section animate">
      <h2>Contact Me</h2>
      <p>Feel free to reach out! I would love to collaborate or answer your questions.</p>

      <form onSubmit={submitForm}>
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
      
      <p>Email: <a href="mailto:sdmusafirunnisabegum@gmail.com">sdmusafirunnisabegum@gmail.com</a></p>
      <button id="scrollTopBtn" onClick={() => window.scrollTo({top:0, behavior:'smooth'})}>↑ Top</button>
    </section>
  );
}

export default Contact;