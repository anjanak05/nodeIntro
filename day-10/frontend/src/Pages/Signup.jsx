import axios from "axios";
import React from "react";
import { useState } from "react";

const Signup = () => {
  const [formData, setFormData] = useState({
    name:"",
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
  console.log(formData)
  const handleSubmit=(e)=>{
    e.preventDefault()
    axios.post("http://localhost:8000/user/signup", formData)
    .then((res)=>console.log(res))
    .catch((err)=>console.log(err))

  }
  return (
    <div>
      <form onSubmit={handleSubmit}>

      <div>
          <label>
            Name
            <input
              value={formData.name}
              onChange={handleChange}
              name="name"
              placeholder="name"
            />
          </label>
        </div>

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
            type="password"
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
       
      </div>
    </div>
  );
};

export default Signup;
