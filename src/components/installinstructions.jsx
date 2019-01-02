import React from "react";
import NavBar from "./navbar";
import Typography from "@material-ui/core/Typography";
import Installi1 from "../instructions/installi1.png";
import Installi2 from "../instructions/installi2.png";
import Installi3 from "../instructions/installi3.png";
import Installa1 from "../instructions/installa1.png";
import Installa2 from "../instructions/installa2.png";
import Installa3 from "../instructions/installa3.png";
import Installa4 from "../instructions/installa4.png";

const bold = {
  fontWeight: "bold"
};

const header = {
  alignText: "center",
  fontWeight: "bold"
};

const InstallInstructions = () => {
  return (
    <div>
      <NavBar />
      <div className="installInstructions">
        <Typography style={header} variant="h4" gutterBottom>
          How to install:
        </Typography>
        <Typography style={bold} variant="h6">
          For iOS
        </Typography>
        <ol>
          <li>
            <Typography variant="body1" gutterBottom>
              Make sure you are using
              <span style={bold}> Safari</span>. Other browsers are not yet
              supported.
            </Typography>
          </li>
          <li>
            <Typography variant="body1">Tap this icon.</Typography>
            <img src={Installi1} alt="Step 2" width="90%" />
          </li>
          <li>
            <Typography variant="body1">Tap "Add to Home Screen".</Typography>
            <img src={Installi2} alt="Step 3" width="90%" />
          </li>
          <li>
            <Typography variant="body1">
              Wait for the icon to change, then tap "Add".
            </Typography>
            <img src={Installi3} alt="Step 4" width="90%" />
          </li>
        </ol>
        <Typography style={bold} variant="h6">
          For Android
        </Typography>
        <ol>
          <li>
            <Typography variant="body1" gutterBottom>
              Make sure you are using
              <span style={bold}> Google Chrome</span>. Other browsers are not
              yet supported.
            </Typography>
          </li>
          <li>
            <Typography variant="body1">
              If a banner pops up, just tap "Add Chocobun to Home screen" then
              proceed to the last step. Otherwise, skip this step and proceed to
              the next.
            </Typography>
            <img src={Installa1} alt="Step 2" width="90%" />
          </li>
          <li>
            <Typography variant="body1">
              Tap the three dots on the upper right corner of the screen.
            </Typography>
            <img src={Installa2} alt="Step 3" width="90%" />
          </li>
          <li>
            <Typography variant="body1">Tap "Add to Home screen".</Typography>
            <img src={Installa3} alt="Step 4" width="90%" />
          </li>
          <li>
            <Typography variant="body1">
              Tap "Add". This might take a few seconds, but the app should pop
              into your home screen once it's done installing.
            </Typography>
            <img src={Installa4} alt="Step 5" width="90%" />
          </li>
        </ol>
      </div>
    </div>
  );
};

export default InstallInstructions;
