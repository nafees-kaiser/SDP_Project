import { useCallback } from "react";
import "./Verification.css";

const Verification = () => {
  const onVerificationContainerClick = useCallback(() => {
    // Please sync "Buyer Profile" to the project
  }, []);

  return (
    <div className="verification" onClick={onVerificationContainerClick}>
      <img className="verification-child" alt="" src="/rectangle-1@2x.png" />
      <img className="verification-item" alt="" src="/group-12.svg" />
      <div className="enter-verification-code">Enter verification code</div>
      <div className="a-verification-code">
        A verification code has been sent to your email
      </div>
      <div className="register-now-parent">
        <b className="register-now">Register Now!</b>
        <div className="to-be-a">to be a part of the event.</div>
      </div>
      <img className="vector-icon" alt="" src="/vector.svg" />
      <img className="vector-icon1" alt="" src="/vector1.svg" />
      <img className="vector-icon2" alt="" src="/vector1.svg" />
      <img className="vector-icon3" alt="" src="/vector1.svg" />
      <div className="fill-the-information">Fill the information carefully</div>
      <div className="verify-its-you">Verify it’s you</div>
      <button className="verify-button">
        <div className="button">Verify</div>
      </button>
      <input className="code-input" name="code_input" type="text" />
      <div className="menu">
        <img className="logo-icon" alt="" src="/logo.svg" />
        <div className="frame-parent">
          <div className="home-wrapper">
            <div className="home">Home</div>
          </div>
          <div className="home-wrapper">
            <div className="home">About</div>
          </div>
        </div>
        <div className="login-button-parent">
          <button className="login-button" id="login_button">
            <div className="button1">Login</div>
          </button>
          <button className="register-button" id="register_button">
            <div className="button2">Register</div>
          </button>
        </div>
      </div>
      <img
        className="businessman-launching-business"
        alt=""
        src="/businessman-launching-business-startup-3d-illustration@2x.png"
      />
      <img
        className="screenshot-2023-09-08-171203-2"
        alt=""
        src="/screenshot-20230908-171203-2@2x.png"
      />
    </div>
  );
};

export default Verification;
