import React, { useState } from "react";
import "./SignUp.css";
import "../../index.css";
import signUp_img from "../../assets/images/signup-form-img.svg";
import OTPInput from "react-otp-input";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { auth } from "../../firebase";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  const [otp, setOtp] = useState("");
  const [ph, setPh] = useState("");
  const [showOTP, setShowOTP] = useState(false);
  const [user, setUser] = useState(null);

  function onCaptchVerify() {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response) => {
            onSignup();
          },
          "expired-callback": () => {},
        },
        auth
      );
    }
  }

  function onSignup() {
    onCaptchVerify();

    const appVerifier = window.recaptchaVerifier;

    const formatPh = "+" + ph;

    signInWithPhoneNumber(auth, formatPh, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        setShowOTP(true);
        // toast.success("OTP sended successfully!");
      })
      .catch((error) => {
        console.log(error);
      });
  }
  function onOTPVerify() {
    window.confirmationResult
      .confirm(otp)
      .then(async (res) => {
        console.log(res);
        setUser(res.user);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <>
      <div className="signUp-container">
        <div className="sign-up-form">
          <div id="recaptcha-container">{/* <ToastContainer /> */}</div>
          {user ? (
            <p>Login success</p>
          ) : (
            <div className="sign-up-form-container">
              <h2>Welcome back</h2>
              <p style={{ color: "var(--second-text-color)" }}>
                Welcome back! Please enter your details. ✨
              </p>
              {showOTP ? (
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
                  <button className="btn-primary" onClick={onOTPVerify}>
                    Verify OTP
                  </button>
                </div>
              ) : (
                <div className="sign-up-form-inputs">
                  <label htmlFor="otp">Enter Phone Number</label>
                  <PhoneInput country={"in"} value={ph} onChange={setPh} />
                  <button className="btn-primary" onClick={onSignup}>
                    {/* <div className="clearfix">
                    <div className="spinner-border m-1" role="status"></div>
                    
                  </div> */}
                    Send OTP
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
        <div className="image-container">
          <img src={signUp_img} alt="signUp" />
        </div>
      </div>
    </>
  );
};

export default SignUp;
