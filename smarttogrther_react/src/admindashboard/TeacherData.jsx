import { useEffect, useState } from "react";
import axios from "axios";
import {  useNavigate } from "react-router-dom";

const TeacherData = () => {
  const [teacher, setteacher] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:8080/api/teachers/")
      .then((response) => setteacher(response.data.teachers))
      .catch((error) => console.error("Error fetching data:", error))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  // const FunRemove = (id) => {
  //   if (window.confirm("Are you sure you want to delet")) {
  //     fetch(
  //       "http://localhost:8080/api/teachers/"+id,
  //       {
  //         method: "DELETE",
  //       }
  //     )
  //       .then((response) => {
  //         console.log(response.json());
  //         window.location.reload();
  //       })

  //       .catch((err) => {
  //         console.log(err.message);
  //       });
  //   }
  // };
 
const FunRemove = (id) => {
  if (window.confirm("Are you sure you want to delete?")) {
    axios.delete("http://localhost:8080/api/teachers/"+ id)
      .then((response) => {
        console.log(response.data);   
        window.location.reload();
        
      })
      .catch((error) => {
        console.log(error.message);
      });
  }
};
const navigate = useNavigate();

const FunBlock = (id) => {
  if (window.confirm("Are you sure you want to make a change?")) {
    const updatedTeachers = teacher.map((user) => {
      if (user._id === id) {
        return {
          ...user,
          blocked: !user.blocked
        };
      }
      return user;
    });

    axios
      .put(`http://localhost:8080/api/teachers/${id}/block`, updatedTeachers)
      .then((response) => {
        console.log(response.data);
        setteacher(updatedTeachers);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }
};

const FunVerify = (id) => {
  if (window.confirm("Are you sure you want to make a change?")) {
    const updatedTeachers = teacher.map((user) => {
      if (user._id === id) {
        return {
          ...user,
          verified: !user.verified
        };
      }
      return user;
    });

    axios
      .put(`http://localhost:8080/api/teachers/${id}/verify`, updatedTeachers)
      .then((response) => {
        console.log(response.data);
        setteacher(updatedTeachers);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }
};




const FunEdit = (id) => {
  navigate("/editTeacher/" + id);
};

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <h1>Teachers</h1>
          <table class="table table-bordered table-sm">
            <thead class="table-success">
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Gender</th>
                <th>Subjects</th>
                <th>Degree</th>
                <th>Delete</th>
                <th>Edit</th>
                <th>Block</th>
                <th>Verified</th>
              </tr>
            </thead>
            <tbody>
              {teacher.map((user) => (
                <tr key={user.id}>
                  <td>{user.firstname}</td>
                  <td>{user.lastname}</td>
                  <td>{user.email}</td>
                  <td>{user.gender}</td>
                  <td>{user.subjects}</td>
                  <td>{user.degree}</td>
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

export default TeacherData;
