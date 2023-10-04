import React, { useState, useEffect } from 'react';
import { useCallback } from "react";
import axios from "axios";
import styles from "./Form.module.css";


const EditableInput = ({ defaultValue }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(defaultValue);

  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  const handleBlur = () => {
    setIsEditing(false);
  };

  const handleChange = (event) => {
    event.preventDefault();
    setValue(event.target.value);
  };

  return (
    // <div className={styles.rectangleGroup}>
    //         <div className={styles.groupItem} />
            
    //       </div>
    <div className={styles.inputContainer}>
      {isEditing ? (
        <div>
        <input
          className={styles.input}
          value={value}
          onChange={handleChange}
          // onBlur={handleBlur}
        />
        
        { <button onClick={handleBlur} className={styles.edit}>Save</button> }
        </div>
      ) : (
       <div>
        <div
          className={styles.inputValue}
          // onDoubleClick={handleDoubleClick}
        >
          {value}
        </div>
        <button onClick={handleDoubleClick} className={styles.edit}>
            Edit
            {/* <img className={styles.vectoricon} alt="" src="./images/vector.svg" /> */}
          </button>
       
        </div>
      )}
    </div>
  );
};



const Form = () => {

  const [data, setData] = useState({});


  useEffect(() => {
    axios.get('http://localhost:3000/buyer_profile')
      .then((response) => {
        console.log(response.data.email)
        setData(response.data);
        
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);


  return (
    <div className={styles.changePassButtonParent}>
      <button className={styles.changePassButton}>
        <div className={styles.changePass} />
        <div className={styles.changePassword}>Change Password</div>
      </button>
      {/* <button className={styles.save} onClick={onSaveClick}>
        <div className={styles.rectangle} />
        <div className={styles.button}>Save</div>
      </button> */}
      <div className={styles.information}>
        <div className={styles.password}>
          <div className={styles.mobileNumber}>Password</div>
          <div className={styles.rectangleParent}>
            <div className={styles.groupChild} />
            <input
              className={styles.input}
              value="******"
              type="password"
              defaultValue="******"
            />


            <button className={styles.group}>
              <img className={styles.vectorIcon} alt="" src="./images/vector.svg" />
              <img className={styles.vectorIcon1} alt="" src="./images/vector1.svg" />
              <img className={styles.vectorIcon2} alt="" src="./images/vector2.svg" />
            </button>
          </div>
        </div>


        <div className={styles.emailAddress}>
          <div className={styles.emailAddress1}>Email Address</div>
          <div className={styles.rectangleGroup}>
            <div className={styles.groupItem} />
             <EditableInput className={styles.abcgmailcom} defaultValue="shavoddin54@gmail.com" />
            {/* <input type="text"
              className={styles.abcgmailcom}
              placeholder={data.email}
            /> */}
            
          </div>
        </div>
        <div className={styles.address}>
          <div className={styles.address1}>Address</div>
          <div className={styles.rectangleContainer}>
            <div className={styles.groupInner} />
            
            {/* <EditableInput
              defaultValue={data.email}
            /> */}
          
            <EditableInput className={styles.khulna} defaultValue="Mirpur, Dhaka, Dhaka" />
            
          </div>
        </div>
        <div className={styles.mobileNo}>
          <div className={styles.mobileNumber}>Mobile Number</div>
          <div className={styles.groupDiv}>
            <div className={styles.groupInner} />
            <EditableInput className={styles.frameInput} defaultValue="01722334455" />
            
          </div>
        </div>
        <div className={styles.lastName}>
          <div className={styles.lastName1}>Last Name</div>
          <div className={styles.groupDiv}>
            <div className={styles.groupInner} />
            <EditableInput className={styles.oyiboke} defaultValue="Akhon" />
            
          </div>
        </div>
        <div className={styles.firstName}>
          <div className={styles.emailAddress1}>First Name</div>
          <div className={styles.rectangleGroup}>
            <div className={styles.groupItem} />
            
            <EditableInput className={styles.emmanuel} defaultValue="Shahabuddin" />
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
