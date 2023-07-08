import { useEffect, useState } from "react";
import axios from "axios";

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
              </tr>
            </thead>
            <tbody>
              {teacher.map((user) => (
                <tr key={user.id}>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.email}</td>
                  <td>{user.gender}</td>
                  <td>{user.subjects}</td>
                  <td>{user.degree}</td>
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

                  <td>
                    <button
                      class="bg-success"
                      onClick={() => {
                       
                      }}
                    >
                      Edit
                    </button>
                  </td>
                  <td>
                    <button
                      class="bg-primary"
                      onClick={() => {
                       
                      }}
                    >
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

export default TeacherData;
