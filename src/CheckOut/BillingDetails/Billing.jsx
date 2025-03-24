import "./Billing.css";
import { useState } from "react";

function Billing() {
  const [currentState, setNewState] = useState({
    FirstName: "",
    LastName: "",
    Company: "",
    Country: "",
    Town: "",
    Zip: "",
    Phone: "",
    Email: "",
    Addit: "",
  });
  return (
    <div className="billig-cont">
      <h1>Billing Details</h1>
      <form className="form-billing">
        <div className="first-last-billing">
          <div className="name-billing">
            <label>First Name</label>
            <br />
            <input
              value={currentState.FirstName}
              onChange={(e) => {
                setNewState({ ...currentState, FirstName: e.target.value });
              }}
              className="inp-billing"
            />
          </div>
          <div className="name-billing">
            <label>Last Name</label>
            <br />
            <input
              value={currentState.LastName}
              onChange={(e) => {
                setNewState({ ...currentState, LastName: e.target.value });
              }}
              className="inp-billing"
            />
          </div>
        </div>
        <label>Company Name</label>
        <input
          value={currentState.Company}
          onChange={(e) => {
            setNewState({ ...currentState, Company: e.target.value });
          }}
          className="inp-billing"
          type="text"
        />
        <label>Country/Region</label>
        <select
          value={currentState.Country}
          onChange={(e) => {
            setNewState({ ...currentState, Country: e.target.value });
          }}
          className="inp-billing"
        >
          <option value="Russia">Russia</option>
          <option value="Iraq">Iraq</option>
          <option value="Egypt">Egypt</option>
          <option value="Kuwait">Kuwait</option>
        </select>
        <label>Town/City</label>
        <input
          value={currentState.Town}
          onChange={(e) => {
            setNewState({ ...currentState, Town: e.target.value });
          }}
          className="inp-billing"
          type="text"
        />
        <label>Zip Code</label>
        <input
          value={currentState.Zip}
          onChange={(e) => {
            setNewState({ ...currentState, Zip: e.target.value });
          }}
          className="inp-billing"
          type="number"
        />
        <label>Phone</label>
        <input
          value={currentState.Phone}
          onChange={(e) => {
            setNewState({ ...currentState, Phone: e.target.value });
          }}
          className="inp-billing"
          type="number"
        />
        <label>Email Address</label>
        <input
          value={currentState.Email}
          onChange={(e) => {
            setNewState({ ...currentState, Email: e.target.value });
          }}
          className="inp-billing"
          type="email"
        />
        <label>Additional Information</label>
        <input
          value={currentState.Addit}
          onChange={(e) => {
            setNewState({ ...currentState, Addit: e.target.value });
          }}
          className="inp-billing"
          type="text"
        />
      </form>
    </div>
  );
}

export default Billing;
