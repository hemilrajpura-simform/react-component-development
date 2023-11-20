import React, { useState, useRef } from "react";
import TextField from "@mui/material/TextField";

function OTPInputFields() {
  const [otp, setOtp] = useState(["8", "", "", "", "", ""]);
  const inputRefs = [
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
  ];

  const handleInputChange = (index, event) => {
    const newOtp = [...otp];
    newOtp[index] = event.target.value;
    if (event.target.value && index < 5) {
      inputRefs[index + 1].current.focus();
    }
    setOtp(newOtp);
  };

  const handleBackspace = (index, event) => {
    if (event.key === "Backspace" && index > 0 && !otp[index]) {
      inputRefs[index - 1].current.focus();
    }
  };

  return (
    <div className="OTPInputFields">
      {otp.map((value, index) => (
        <TextField
          key={index}
          inputRef={inputRefs[index]}
          variant="outlined"
          type="text"
          size="small"
          value={value}
          onChange={(event) => handleInputChange(index, event)}
          onKeyDown={(event) => handleBackspace(index, event)}
          style={{ marginRight: "8px", width: "40px" }}
          inputProps={{
            maxLength: 1,
            style: {
              textAlign: "center",
            },
          }}
        />
      ))}
    </div>
  );
}

export default OTPInputFields;
