import "./contactBody.css";
import Form from "./form/form";

import PlaceIcon from "@mui/icons-material/Place";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";

function ContactBody() {
  const options = [
    {
      id: 1,
      icon: <PlaceIcon />,
      title: "Address",
      dis: (
        <>
          236 5th SE Avenue,
          <br /> New York NY10000,
          <br /> United States
        </>
      ),
    },
    {
      id: 2,
      icon: <PhoneInTalkIcon />,
      title: "Phone",
      dis: (
        <>
          Mobile: +(84) 546-6789
          <br />
          Hotline: +(84) 456-6789
        </>
      ),
    },
    {
      id: 3,
      icon: <AccessTimeFilledIcon />,
      title: "Working Time",
      dis: (
        <>
          Monday-Friday: 9:00 - 22:00 <br />
          Saturday-Sunday: 9:00 - 21:00
        </>
      ),
    },
  ];
  const option = options.map((e) => {
    return (
      <div key={e.id} id="contact-address">
        <h4 id="contact-body-icon">{e.icon}</h4>
        <div>
          <h4>{e.title}</h4>
          <p>{e.dis}</p>
        </div>
      </div>
    );
  });

  return (
    <div id="body-contact">
      <div id="text-form">
        <h2>Get In Touch With Us</h2>
        <p id="text-parg">
          For More Information About Our Product & Services. Please Feel Free To
          Drop Us
          <br /> An Email. Our Staff Always Be There To Help You Out. Do Not
          Hesitate!
        </p>
      </div>
      <div id="cont-formAndAddress">
        <div className="opt-contact">{option}</div>
        <div id="form-inputs">
          <Form />
        </div>
      </div>
    </div>
  );
}

export default ContactBody;
