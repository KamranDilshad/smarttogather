import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CourseData = () => {
  const [course, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:8080/api/course/")
      .then((response) => setCourses(response.data.courses))
      .catch((error) => console.error("Error fetching data:", error))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const navigate = useNavigate();

  const FunRemove = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      axios
        .delete("http://localhost:8080/api/course/" + id)
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
    navigate("/editcourses/" + id);
  };

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <h1>Courses</h1>
          <table class="table table-bordered table-sm ">
            <thead class="table-success">
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>price</th>
                <th>image</th>

               <th>Delete</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              {course.map((courses) => (
                <tr key={courses.id}>
                  <td>{courses.title}</td>
                  <td>{courses.description}</td>
                  <td>{courses.price}</td>
                  <td>{courses.image}</td>

                  <td>
                    <button
                      type="button"
                      class="btn btn-danger"
                      onClick={() => {
                        FunRemove(courses._id);
                      }}
                    >
                      Delete
                    </button>
                  </td>

                  <td>
                    <button
                      type="button"
                      class="btn btn-success"
                      onClick={() => {
                        FunEdit(courses._id);
                      }}
                    >
                      Edit
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

export default CourseData;
