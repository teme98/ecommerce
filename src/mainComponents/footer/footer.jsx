import "./footer.css";
import { useState } from "react";
import { Link } from "react-router-dom";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

function Footer() {
  const [cuurentValue, setNewValue] = useState("");

  return (
    <>
      <div>
        <hr />
        <div id="cont-footer">
          <div id="text-footer">
            <h2>Funiro.</h2>
            <p id="footer-parg">
              400 University Drive Suite 200 Coral
              <br /> Gables,
              <br />
              FL 33134 USA
            </p>
          </div>
          {/* Start Link */}

          <div id="link-footer">
            <h4 id="h4-footer">Links</h4>
            <Link to="/Home">
              <div>Home</div>
            </Link>
            <Link to="/Shopping">Shop</Link>
            <Link to="/Blog">Blog</Link>
            <Link to="/Contact">Contact</Link>
          </div>
          {/* End Link */}
          {/* Start Help */}
          <div id="help-footer">
            <h4 id="h4-footer">Help</h4>
            <a href="#">Payment Options</a>
            <a href="#">Returns</a>
            <a href="#">Privacy Policies</a>
          </div>
          {/* End Help */}
          {/* Start NewsLetter */}
          <div id="news-footer">
            <h4 id="h4-footer">Newsletter</h4>
            <div id="email-footer">
              <TextField
                type="email"
                id="standard-basic"
                label="Enter Your Email Address"
                variant="standard"
                value={cuurentValue}
                onChange={(e) => {
                  setNewValue(e.target.value);
                }}
              />
              <Button
                onClick={() => {
                  setNewValue("");
                }}
                id="btn-email"
                variant="outlined"
              >
                SUBSCRIBE
              </Button>
            </div>
          </div>
          {/* End NewsLetter */}
        </div>
        <hr id="hr-footer" />
      </div>
      <div id="end-footer">2025 furino. All rights reverved</div>
    </>
  );
}

export default Footer;
