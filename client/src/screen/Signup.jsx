import React, { useState } from "react";
import "./signup.css";
import Header from "../components/Header";
import { Link, useNavigate } from "react-router-dom";

import axios from "axios";

function Signup() {

  const [err,setErr]= useState('')
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const changeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setForm((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    const { name, email, phone, password } = form;

    axios
      .post("http://localhost:4000/user/register", form)
      .then((response) => {
       
        if(response.data.status){
          navigate("/login");
        }
        setErr(response.data.error)

        console.log(response.data.status);

        // Reset form data after successful registration
        setForm({
          name: "",
          email: "",
          phone: "",
          password: "",
        });
      })
      .catch((error) => {
        console.log("hshhshs")
        setErr(error.response.data.error)
        console.log(error.response.data.error);
      });
  };

  return (
    <>
      
      <div className="login-form-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>Create Your Account</h2>
          <div className="form-group">
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={form.name}
              onChange={changeHandler}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="Email"
              placeholder="Email"
              name="email"
              value={form.email}
              onChange={changeHandler}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="phone"
              placeholder="Phone"
              name="phone"
              value={form.phone}
              onChange={changeHandler}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="Password"
              placeholder="password"
              name="password"
              value={form.password}
              onChange={changeHandler}
              required
            />
          </div>
          <button type="submit">submit</button>
          <div className="error">
            <p className ='fs-2' color="red">{err}</p>
          </div>
          <div className="already-have-account">
            <p>
              Already have an account? <Link to="/login">Sign in</Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
}

export default Signup;
