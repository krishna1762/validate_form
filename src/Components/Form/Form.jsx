import React, { useEffect, useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errorTimeout, setErrorTimeout] = useState(false)
  const [errorMessage, seterrorMessage] = useState([{}])


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const ValidateEmail = (input) => {
    var validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (input.match(validRegex)) {
    //   console.log("Valid email address!");

    //   document.form1.text1.focus();

      return true;
    } else {
    //   console.log("Invalid email address!");

    //   document.form1.text1.focus();

      return false;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let isValidEmail = false;
    let isValidpassword = false;
    seterrorMessage([{}])
    if(formData){
        if(!ValidateEmail(formData.email)){
            isValidEmail = true;
            // seterrorMessage([{email:0}])
            console.log("email")
        }
        if(formData.password == ""){
            console.log("pass")
            isValidpassword = true;
            // seterrorMessage([{password:0}])
        }
        let validate = isValidEmail || isValidpassword;
        if(validate == false){
            alert("submit succesfully")
        } else{
            setTimeout(() => {
                seterrorMessage([{}])
                setErrorTimeout(true)
            }, 3000);
        }
    }
   
    // Do something with formData
    
  };
  console.log(errorMessage);
  console.log(errorMessage && errorMessage.filter((e)=> {e.email == 0}));


  
  return (
    <div className="container">
      <div className="section_padding">
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="email"
              onChange={(e) => handleInputChange(e)}
            />
            <p className={`error_text ${errorTimeout}_none`}>{errorMessage && errorMessage.filter((e)=> {e.email == 0}) ? "Enter eamil address" : ""}</p>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              name="password"
              onChange={(e) => handleInputChange(e)}
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Check me out
            </label>
          </div>
          <button
            type="button"
            className="btn btn-primary"
            onClick={(e) => handleSubmit(e)}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
