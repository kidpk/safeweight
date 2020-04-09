import React, { useRef, useState } from 'react';
import { BrowserRouter as Router, useHistory } from 'react-router-dom';
import '../Signup/index.css';
import API from '../../utils/API';

export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const nameRef = useRef();
  const genderRef = useRef();
  const ageRef = useRef();
  const weightRef = useRef();
  const history = useHistory();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [name, setName] = useState();
  const [gender, setGender] = useState();
  const [age, setAge] = useState();
  const [weight, setWeight] = useState();

  var userId = "";

  const validateForm = () => {
    return true;
  };

  // const renderUserHome = ()=> {
  //   return <UserHome userId={userId} />;
  // }

  const handleFormSubmit = e => {
    e.preventDefault();
    console.log('emailRef', emailRef);
    console.log('nameRef', nameRef);
    // verification code goes here

    if (!validateForm()) {
      //redirect to error page
      return;
    }

    const formData = {
      email: emailRef.current.value,
      passwd: passwordRef.current.value,
      user_name: nameRef.current.value,
      gender: genderRef.current.value,
      age: ageRef.current.value,
      weight: weightRef.current.value
    };
    API.saveUser(formData)
      .then(res => {
        console.log('API result data', res);
        userId = res.id;
        history.push("/Login");

      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div>
      <Router>
        <form onSubmit={handleFormSubmit}>
          <div className="container">
            <h1>Sign Up</h1>

            <label htmlFor="input1">
              <b>Email</b>
            </label>
            <input
              type="email"
              ref={emailRef}
              placeholder="example@example.com"
              name="email"
              required
            />

            <label htmlFor="input1">
              <b>Password</b>
            </label>
            <input
              type="password"
              ref={passwordRef}
              placeholder="Enter Password"
              name="password"
              required
            />

            <label htmlFor="input1">
              <b>Name</b>
            </label>
            <input
              type="text"
              ref={nameRef}
              placeholder="Name"
              name="name"
              required
            />

            <label htmlFor="input1">
              <b>Gender</b>
            </label>
            <input
              type="text"
              ref={genderRef}
              placeholder="M/F"
              name="gender"
              required
            />

            <label htmlFor="input1">
              <b>Age</b>
            </label>
            <input
              type="text"
              ref={ageRef}
              placeholder="Enter Age"
              name="age"
              required
            />

            <label htmlFor="input1">
              <b>Weight</b>
            </label>
            <input
              type="text"
              ref={weightRef}
              placeholder="ex. 0.00lbs"
              name="weight"
              required
            />

            <div className="cancelSavebtns">
              <button type="button" className="cancelbtn">
                Cancel
              </button>
              <button type="submit" disabled={!validateForm()} className="signupbtn">
                Save
              </button>
            </div>
            <div>
              {/* renderUserHome() */}
            </div>
          </div>
        </form>
      </Router>
    </div>
  );
}
