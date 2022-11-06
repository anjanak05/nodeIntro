import axios from "axios";
import React from "react";
import { useState } from "react";

const AddLectures = () => {
  const [formData, setFormData] = useState({
    Email: "",
    Title: "",
    Note: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
//   console.log(formData);
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8000/notes/create",formData,
        {headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("token")}`,
        }} )
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Title
            <input
              value={formData.Title}
              onChange={handleChange}
              name="Title"
              placeholder="Title"
            />
          </label>
        </div>

        <div>
          <label>
            Email
            <input
              value={formData.Email}
              onChange={handleChange}
              name="Email"
              placeholder="Email"
            />
          </label>
        </div>
        <div>
          <label>
            Note
            <input
              type="text"
              value={formData.Note}
              onChange={handleChange}
              name="Note"
              placeholder="Note"
            />
          </label>
        </div>
        <div>
          <input type="submit" value="SUBMIT" />
        </div>
      </form>
      <div></div>
    </div>
  );
};

export default AddLectures;
