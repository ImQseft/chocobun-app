import React from "react";
import NavBar from "./navbar";
import Typography from "@material-ui/core/Typography";

const header = {
  alignText: "center",
  fontWeight: "bold",
};

const InstallInstructions = () => {
  return (
    <div>
      <NavBar installed={false} />
      <div className="installInstructions">
        <Typography style={header} variant="h4" gutterBottom>
          Version outdated
        </Typography>
        <p>
          This link is outdated. To download the latest version,
          open the link below using <b>Chrome</b> if you're on Android, or{" "}
          <b>Safari</b> if you're on iOS.
        </p>
        <p>
          <u>https://chocobunapp.web.app/</u>
        </p>
      </div>
    </div>
  );
};

export default InstallInstructions;
