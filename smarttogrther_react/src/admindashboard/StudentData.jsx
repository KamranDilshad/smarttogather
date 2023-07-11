import { useEffect, useState } from "react";
import axios from "axios";
import {  useNavigate } from "react-router-dom";

const StudentData = () => {
  const [student, setStudent] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:8080/api/students")
      .then((response) => setStudent(response.data.students))
      .catch((error) => console.error("Error fetching data:", error))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const navigate = useNavigate();

  const FunRemove = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      axios
        .delete("http://localhost:8080/api/students/" + id)
        .then((response) => {
          console.log(response.data);
          window.location.reload();
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
  };

  const FunBlock = (id) => {
    if (window.confirm("Are you sure you want to make a change?")) {
      const updatedStudent = student.map((user) => {
        if (user._id === id) {
          return {
            ...user,
            blocked: !user.blocked
          };
        }
        return user;
      });
  
      axios
        .put(`http://localhost:8080/api/students/${id}/block`, updatedStudent)
        .then((response) => {
          console.log(response.data);
          setStudent(updatedStudent);
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
  };
  
  const FunVerify = (id) => {
    if (window.confirm("Are you sure you want to make a change?")) {
      const updatedStudent = student.map((user) => {
        if (user._id === id) {
          return {
            ...user,
            verified: !user.verified
          };
        }
        return user;
      });
  
      axios
        .put(`http://localhost:8080/api/students/${id}/verify`, updatedStudent)
        .then((response) => {
          console.log(response.data);
          setStudent(updatedStudent);
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
  };
  



  const FunEdit = (id) => {
    navigate("/editStudent/" + id);
  };

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <h1>Students</h1>
          <table class="table table-bordered table-sm ">
            <thead class="table-success">
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Gender</th>
                <th>Subjects</th>
                <th>Delete</th>
                <th>Edit</th>
                <th>Block</th>
                <th>Verified</th>
              </tr>
            </thead>
            <tbody>
              {student.map((user) => (
                <tr key={user.id}>
                  <td>{user.firstname}</td>
                  <td>{user.lastname}</td>
                  <td>{user.email}</td>
                  <td>{user.gender}</td>
                  <td>{user.subjects}</td>
                  <td>
                    <button
                      type="button" class="btn btn-danger" 
                      onClick={() => {
                        FunRemove(user._id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
              
                    <td>
                      <button
                   type="button" class="btn btn-success" 
                        onClick={() => {
                          FunEdit(user._id);
                        }}
                      >
                        Edit
                      </button>
                    </td>
                

                  <td>
                    <button  type="button" class="btn btn-primary" onClick={() => {FunBlock(user._id,);}}>
                      {user.blocked ?'Yes':"No" }
                    </button>
                  </td>
                  <td>
                    <button  type="button" class="btn btn-primary" onClick={() => {FunVerify(user._id,);}}>
                      {user.verified ?'Yes':"No" }
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </>
  );
};

export default StudentData;
