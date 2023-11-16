import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const CreatePost = () => {

    const navigate=useNavigate()
  const [create, setCreate] = useState({
    name: "",
    email: ""
  });

  const handleInput = (e) => {
    setCreate({ ...create, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`http://localhost:5000/data`, create)
      .then((res) => {
        alert("Successfully updated");
        navigate('/')
     
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className="d-flex justify-content-center">
        <form onSubmit={handleSubmit}>
          <h2>create</h2>
          <div class="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              name="name"
              onChange={handleInput}
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              name="email"
            //   value={email}
              aria-describedby="emailHelp"
              className="form-control"
              onChange={handleInput}
            />
          </div>

          <div className="form-btn">
            <button type="submit" className="btn btn-primary" >
              Submit
            </button>
            <Link to="/">
              <button className="update-data">Show Data</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
