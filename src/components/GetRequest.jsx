import React, { useEffect } from "react";
import axios from "axios";

import { RiEdit2Fill } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const GetRequest = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [details, setDetails] = React.useState([]);

  const getData = async () => {
    return await axios
      .get("http://localhost:5000/data")
      .then((name) => setDetails(name.data));
  };

  useEffect(() => {
    getData();
  }, []);

  //delete

  // function refetchData() {
  //   axios
  //     .get("http://localhost:5000/data")
  //     .then((res) => {
  //       setDetails(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }


  const handleDelete = (id) => {
    const confirm = window.confirm("Do you want to delete ?");
    if (confirm) {
      axios
        .delete(`http://localhost:5000/data/${id}`)
        .then((res) => {
          alert("succesfully deleted");
          window.location.reload();
          refetchData();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };


  return (
    <div className="show-">
      <div className="create-btn">
        <h1>CRUD App</h1>

        <Link to="/CreatePost">
          <button className="create">Create</button>
        </Link>
      </div>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col" className="edit">
              <RiEdit2Fill />
            </th>
            <th scope="col">
              <MdDelete />
            </th>
          </tr>
        </thead>
        {details.map((d, i) => {
          return (
            <tbody key={i}>
              <tr>
                <th scope="row">{d.id}</th>
                <td>{d.name}</td>
                <td>{d.email}</td>
                <td>
                  <button
                    onClick={() => {
                      handleDelete(d.id);
                    }}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>

                <td>
                  <Link to={`/PutRequest/${d.id}`}>
                    <button className="btn btn-success">Update</button>
                  </Link>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
};

export default GetRequest;
