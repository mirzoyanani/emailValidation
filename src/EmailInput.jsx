import React, { useState, useEffect } from "react";

const EmailInput = () => {
  const [emailValue, setEmailValue] = useState("");
  const [borderStyle, setBorderStyle] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);

  const emailFormat =
    /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  const inputErrorStyle = {
    succesColor: "3px solid green",
    errorColor: "3px solid red",
  };
  useEffect(() => {
    if (emailFormat.test(emailValue)) {
      setBorderStyle(inputErrorStyle.succesColor);
      setErrorMessage(false);
    } else {
      setBorderStyle(inputErrorStyle.errorColor);
      setErrorMessage(true);
    }
    return () => {};
  }, [emailValue]);
  return (
    <div>
      <input
        type="email"
        style={{ border: `${borderStyle}` }}
        value={emailValue}
        onChange={(e) => {
          setEmailValue(e.target.value);
        }}
      />

      {errorMessage && <p>Email-ը չի համապատսխանում ստանդարտներին</p>}
    </div>
  );
};

export default EmailInput;
