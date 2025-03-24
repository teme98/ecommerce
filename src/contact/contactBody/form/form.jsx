import "./form.css";
import { useState } from "react";

function Form() {
  const [currentFormValue, setFormValue] = useState([
    {
      name: "",
      eamil: "",
      subject: "",
      message: "",
    },
  ]);
  const handleNameContact = (e) => {
    setFormValue({ ...currentFormValue, name: e.target.value });
  };
  const handleEmailContact = (e) => {
    setFormValue({ ...currentFormValue, email: e.target.value });
  };
  const handleSubjectContact = (e) => {
    setFormValue({ ...currentFormValue, subject: e.target.value });
  };
  const handleMessageContact = (e) => {
    setFormValue({ ...currentFormValue, message: e.target.value });
  };
  const isButtonDisabled = !(
    currentFormValue.name &&
    currentFormValue.email &&
    currentFormValue.message
  );
  return (
    <form id="all-form-input">
      <label className="form-label">Your Name</label>
      <input
        placeholder="Abc"
        className="form-input"
        value={currentFormValue.name}
        type="text"
        onChange={handleNameContact}
      />
      <label className="form-label">Email Address</label>
      <input
        placeholder="abc@def.com"
        className="form-input"
        value={currentFormValue.email}
        type="email"
        onChange={handleEmailContact}
      />
      <label className="form-label">Subject</label>
      <input
        placeholder="This is an optional"
        className="form-input"
        value={currentFormValue.subject}
        type="text"
        onChange={handleSubjectContact}
      />
      <label className="form-label">Message</label>
      <input
        placeholder="Hi! i’d like to ask about"
        id="message-input"
        className="form-input"
        value={currentFormValue.message}
        type="text"
        onChange={handleMessageContact}
      />
      <button disabled={isButtonDisabled} id="btn-form">
        Submit
      </button>
    </form>
  );
}

export default Form;
