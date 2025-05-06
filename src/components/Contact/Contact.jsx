import "./Contact.css"

function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-header">
        <h2>CONTACT</h2>
        <div className="header-line"></div>
      </div>

      <div className="contact-content">
        <div className="contact-text">
          <p>Looking to start a project or you</p>
          <p>need help from me?</p>
          <p>feel free to reach out to me</p>
        </div>

        <div className="contact-form">
          <div className="form-row">
            <input type="text" placeholder="First name" className="input-field" />
            <input type="text" placeholder="Last name" className="input-field" />
          </div>
          <textarea placeholder="Message..." className="message-field"></textarea>
          <button className="message-button">Message</button>
        </div>
      </div>
    </div>
  )
}

export default Contact