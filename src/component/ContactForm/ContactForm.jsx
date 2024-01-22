
import "./ContactForm.css";
import { Container } from "react-bootstrap";

const ContactForm = () => {

  return (
    <>
      <div className="sendEmail">
        <h3>Send Me Email</h3>
        
      <Container>
          <form >
            <div>
              <label id="name">Your Name</label>
              <input type="text" name="user_name"  id="tamer" required />
            </div>
            <div>
              <label>Your Email</label>
              <input type="email" name="user_email" id="mail" required/>
            </div>
            <div>
              <label>Message</label>
              <textarea name="message" cols="45" rows="5" id="message" required/>
            </div>
          <div className="btnSend">
              <div className="send "  >
                <input type="submit" value="send" className="submit "/>            
                <i class="bi bi-send-fill"></i>
              </div>
          </div>
        
          </form>
      </Container>
      </div>
    </>
  );
};

export default ContactForm;
