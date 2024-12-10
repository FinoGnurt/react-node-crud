import { useEffect, useState } from "react";
import instance from "../config/axios";
import { useNavigate, useParams } from "react-router-dom";

function UserForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [textSubmit, setTextSubmit] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      (async () => {
        const { data } = await instance.get(`/get_one/${id}`);
        setTitle(data.rs.title);
        setDescription(data.rs.description);
        setContent(data.rs.content);
      })();
    }
  }, [id]);

  const handleSubmit = async () => {
    if (!id) {
      await instance({
        method: "post",
        url: "/create",
        data: { title, description, content },
      });

      setTextSubmit(true);

      setTimeout(() => {
        setTextSubmit(false);
      }, 2000);

      setTitle("");
      setDescription("");
      setContent("");
    }
    if (id) {
      await instance({
        method: "put",
        url: `/put/${id}`,
        data: { title, description, content },
      });
    }

    navigate("/list_user");
  };
  return (
    <div>
      <div>
        <label>title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <label>description:</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <label>content:</label>
        <input
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button onClick={handleSubmit}>submit</button>
      </div>
      {textSubmit && <p>Da gui form thanh cong</p>}
    </div>
  );
}

export default UserForm;
