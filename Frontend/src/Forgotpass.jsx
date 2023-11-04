import { useState, useEffect } from 'react';
// import { useCallback } from "react";
import axios from "axios";
import styles from "./Forgotpass.module.css";

const Forgotpass = () => {
    
  return (
    <div className={styles.forgotpass}>
      <div className={styles.newPassword}>{`New Password : `}</div>
      <input
        className={styles.newPasswordInput}
        name="new_pass_input"
        placeholder="Enter your password"
        type="password"
      />
      <div className={styles.reTypePassword}>{`Re-type Password : `}</div>
      <input
        className={styles.reTypePasswordInput}
        name="re_type_pass_input"
        placeholder="Re-type Password"
        type="password"
      />
      <button className={styles.cancleButton} id="cancel_button">
        <div className={styles.button}>Cancel</div>
      </button>
      <button className={styles.verifyButton} id="change_pass_button">
        <div className={styles.button}>Change</div>
      </button>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <img className={styles.groupItem} alt="" src="./images/rectangle-649@2x.png" />
        <img
          className={styles.screenshot202309081712032}
          alt=""
          src="./images/screenshot-20230908-171203-2@2x.png"
        />
      </div>
      <div className={styles.forgotpassChild} />
      <div className={styles.credentialInfo}>
        <b className={styles.newCredentials}>NEW CREDENTIALS</b>
        <div className={styles.frame}>
          <div className={styles.frame1}>
            <img className={styles.frameChild} alt="" src="./images/group-9.svg" />
            <img className={styles.frameItem} alt="" src="./images/group-9.svg" />
          </div>
          <div className={styles.passwordMustBeContainer}>
            <span className={styles.passwordMustBeContainer1}>
              <p className={styles.passwordMustBe}>
                Password must be at least 8 characters long.
              </p>
              <p className={styles.passwordMustBe}>
                Password must contain at least one number or special character
              </p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forgotpass;
