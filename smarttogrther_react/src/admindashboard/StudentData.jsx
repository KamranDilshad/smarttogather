import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

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
          <table class="table table-bordered table-sm">
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
              </tr>
            </thead>
            <tbody>
              {student.map((user) => (
                <tr key={user.id}>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.email}</td>
                  <td>{user.gender}</td>
                  <td>{user.subjects}</td>
                  <td>
                    <button
                      className="bg-danger"
                      onClick={() => {
                        FunRemove(user._id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                  {/* <Link to={`/editStudent/${user._id}`}> */}
                    <td>
                      <button
                        class="bg-success"
                        onClick={() => {
                          FunEdit(user._id);
                        }}
                      >
                        Edit
                      </button>
                    </td>
                  {/* </Link> */}

                  <td>
                    <button class="bg-primary" onClick={() => {}}>
                      Block
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
