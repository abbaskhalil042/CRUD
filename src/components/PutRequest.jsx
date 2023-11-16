import React, { useState,useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const PutRequest = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const [update, setUpdate] = useState({
        name: "",
        email: ""
    });

    const handleInput = (e) => {
        setUpdate({ ...update, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.put(`http://localhost:5000/data/${id}`, update)
            .then((res) => {
                alert("Successfully updated");
                navigate('/');
            })
            .catch((err) => console.log(err));
    };


//populating the data before updating 
    useEffect(() => {
        // Fetch data from your API using the provided ID
        axios.get(`http://localhost:5000/data/${id}`)
            .then((response) => {
                // Set the state with the fetched data
                setUpdate(response.data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, [id]);


    return (
        <div>
            <div className="d-flex justify-content-center">
                <form onSubmit={handleSubmit}>
                    <h2>Update</h2>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">
                            Name
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            name="name"
                            value={update.name}
                            onChange={handleInput}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">
                            Email address
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            aria-describedby="emailHelp"
                            name="email"
                            value={update.email}
                            onChange={handleInput}
                        />
                    </div>

                    <div className="form-btn">
                        <button
                            type="submit"
                            className="btn btn-primary"
                        >
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

export default PutRequest;
