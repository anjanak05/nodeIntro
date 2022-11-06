import React from "react";
import { useState } from "react";
import {  Link } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

   const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  function handleSubmit(e) {
    e.preventDefault();
    axios.post("http://localhost:8000/user/login", formData)
      .then((e) => {console.log(e)
    localStorage.setItem("token", e.data.token)
      })
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Email
            <input
              value={formData.email}
              onChange={handleChange}
                         name="email"
              placeholder="email"
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              value={formData.password}
              onChange={handleChange}
              name="password"
              placeholder="password"
            />
          </label>
        </div>
        <div>
          <input type="submit" value="SUBMIT" />
        </div>
      </form>
      <div>
        <Link to="/">Go Back</Link>
      </div>
    </div>
  );
};

export default Login;
