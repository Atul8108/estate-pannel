import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../SignUp/SignUp.css";
import "../../index.css";
import signUp_img from "../../assets/images/signup-form-img.svg";
import google_logo from "../../assets/images/Google__Logo.svg";
import OTPInput from "react-otp-input";
import "./Otp.css";
import { CgSpinner } from "react-icons/cg";

const Otp = () => {
  return (
    <>
      <div className="signUp-container">
        <div className="sign-up-form">
          {/* <div className="sign-up-form-container">
                        <h2>Welcome User</h2>
                        <p style={{ color: "var(--second-text-color)" }}>
                            Please enter your OTP here. ✨
                        </p>

                        <div className="sign-up-form-inputs">
                            <label>Enter The OTP</label>
                            <OTPInput
                                value={otp}
                                onChange={setOtp}
                                numInputs={6}
                                autoFocus
                                renderSeparator={<span>-</span>}
                                renderInput={(props) => <input {...props} />}
                                className="otp-container"
                            />
                            <button className="btn-primary">
                                <div className="clearfix">
                                    <div className="spinner-border m-1" role="status">
                                    </div>
                                    Verify OTP
                                </div>
                            </button>
                            
                        </div>
                    </div> */}
        </div>
        <div className="image-container">
          <img src={signUp_img} alt="signUp" />
        </div>
      </div>
    </>
  );
};

export default Otp;
