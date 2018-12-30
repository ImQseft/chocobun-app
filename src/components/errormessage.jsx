import React from "react";

const ErrorMessage = () => {
  return (
    <div>
      <h1>An error has occured!!</h1>
      <h3>Please clear all app data to continue using this page.</h3>
      <h4>Follow these instructions:</h4>
      <ol>
        <li>Go to "Transmute" page</li>
        <li>Tap on the three dots on the upper right corner of the app</li>
        <li>Choose clear all data</li>
      </ol>
      <p>This will delete all data of this app.</p>
      <p>
        To avoid this error in the future, refrain from using numbers when
        naming courses and syllabus.
      </p>
      <p>
        Thank you for using the app and sorry for this unfortunate error. Have a
        great day!
      </p>
    </div>
  );
};

export default ErrorMessage;
