import "./ChangePass.css";

const ChangePass = () => {
  return (
    <div className="change-pass">
      <div className="change-pass-child" />
      <div className="new-password">New Password</div>
      <input
        className="new-password-input"
        name="new_pass_input"
        placeholder="Enter your password"
        type="password"
      />
      <div className="re-type-password">Re-type Password</div>
      <input
        className="re-type-password-input"
        name="re_type_pass_input"
        placeholder="Re-type Password"
        type="password"
      />
      <button className="submit-button" id="Submit_button">
        <div className="submit">Submit</div>
      </button>
      <button className="cancle-button" id="cancle_button">
        <div className="cancel">Cancel</div>
      </button>
      <div className="credential-info">
        <b className="new-credentials">NEW CREDENTIALS</b>
        <div className="frame">
          <img className="frame-icon" alt="" src="/frame.svg" />
          <div className="password-must-be-container">
            <span className="password-must-be-container1">
              <p className="password-must-be">
                Password must be at least 8 characters long.
              </p>
              <p className="password-must-be">
                Password must contain at least one upper case.
              </p>
              <p className="password-must-be">One lower case letter.</p>
              <p className="password-must-be">
                Password must contain at least one number or special character
              </p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePass;
