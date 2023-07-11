import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const PostNews = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:8080/api/news/")
      .then((response) => setNews(response.data))
      .catch((error) => console.error("Error fetching data:", error))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const navigate = useNavigate();

  const FunRemove = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      axios
        .delete("http://localhost:8080/api/news/" + id)
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
    navigate("/editnews/" + id);
  };
  const FunCreate = () => {
    navigate("/createNews/");
  };

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
        <div className="d-flex justify-content-between mb-2" >
          <h1>News</h1>
          <button
                      type="button"
                      class="btn btn-primary"
                      onClick={() => {
                        FunCreate();
                      }}
                    >
                      Create
                    </button>
                    </div>
          <table class="table table-bordered table-sm ">
            <thead class="table-success">
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Image</th>
                {/* <th>Create</th> */}
                <th>Delete</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              {news.map((data) => (
                <tr key={data.id}>
                  <td>{data.title}</td>
                  <td>{data.description}</td>
                  <td>{data.image}</td>
                  {/* <td>
                    <button
                      type="button"
                      class="btn btn-primary"
                      onClick={() => {
                        FunCreate(data._id);
                      }}
                    >
                      Create
                    </button>
                  </td> */}

                  <td>
                    <button
                      type="button"
                      class="btn btn-danger"
                      onClick={() => {
                        FunRemove(data._id);
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
                        FunEdit(data._id);
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

export default PostNews;
