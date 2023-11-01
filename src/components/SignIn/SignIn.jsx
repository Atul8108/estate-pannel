import React from "react";
import "../SignUp/SignUp.css";
import "../../index.css";
import signUp_img from "../../assets/images/signup-form-img.svg";
import google_logo from "../../assets/images/Google__Logo.svg";
import { Link } from "react-router-dom";

const SignIn = () => {
  function handleEntry(e){
    if (e.KeyCode=== 13) {
      const form = e.target.form;
      const index = Array.prototype.indexOf.call(form, e.target)
      const lastIndex = form.elements.length-1;
      if(index === lastIndex){
        // handleSubmit();
      }
      else{
        form.elements[index + 1].focus();
      }
      e.preventDefault();
    }
  }
  return (
    <>
      <div className="signUp-container">
        <div className="sign-up-form">
          <div className="sign-up-form-container">
            <h2>Welcome back</h2>
            <p style={{ color: "var(--second-text-color)" }}>
              Welcome back! Please enter your details. ✨
            </p>
            <form action="" onKeyDown={(e)=>{handleEntry(e)}}></form>
            <div className="sign-up-form-inputs">
              <label>Email</label>
              <input
                className="input-fields"
                type="email"
                placeholder="Enter your email"
              />
              <label>Password</label>
              <input
                className="input-fields"
                type="password"
                placeholder="***********"
              />
              <div className="check-box-field">
                <input type="checkbox" />
                <label style={{ width: "229px" }}>Remember for 30 days</label>
                <p style={{ width: "115px" }}>Forgot Password ?</p>
              </div>
              <button className="btn-primary">
                <Link  to="/dashboard" style={{textDecoration:"none" , color:"var(----white-color)"}}>Login</Link>
              </button>
              <button className="btn-white">
                <img
                  src={google_logo}
                  alt="google"
                  style={{ marginRight: "5px" }}
                />
                Sign in with Google
              </button>
              <p
                style={{ marginTop: "30px", color: "var(--second-text-color)" }}
              >
                Don’t have an account?<Link to="/" style={{textDecoration:"none"}} >Sign up</Link>{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="image-container">
          <img src={signUp_img} alt="signUp" />
        </div>
      </div>
    </>
  );
};

export default SignIn;
