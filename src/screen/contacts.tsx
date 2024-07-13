import React from 'react';
import './../styles/screen/contacts.css';

function Contact() {
  const socials = [
    { name: "Instagram", url: "https://www.instagram.com/aryan_.__", color: "#E1306C" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/aryan-trivedi-251679279/", color: "#0A66C2" },
    { name: "Github", url: "https://www.github.com/aryantrivedi865", color: "#333" },
    { name: "Twitter", url: "https://www.twitter.com", color: "#1DA1F2" },
    { name: "Email", url: "mailto:aryantrivedi.lko@gmail.com", color: "#D44638" }
  ];

  return (
    <div className='body'>
      <div>
        <h1>Let's Get Connected</h1>
        <p>I would love to hear from you! <br />Please feel free to contact me.</p>
      </div>
      <div className='contact'>
        <div className='contact-list'>
          {socials.map((social, index) => (
            <a key={index} href={social.url} target='_blank' rel='noreferrer noopener' style={{ '--hover-color': social.color } as React.CSSProperties}>
              {social.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Contact;
