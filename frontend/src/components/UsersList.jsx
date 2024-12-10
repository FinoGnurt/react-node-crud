import { useEffect, useState } from "react";
import instance from "../config/axios";
import { useNavigate } from "react-router-dom";

function UsersList() {
  const [listForm, setListForm] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const { data } = await instance({ method: "get", url: "/get" });
      setListForm(data.rs);
    })();
  }, []);

  const handleDelete = async (id) => {
    await instance({ method: "delete", url: `/destroy/${id}` });
    setListForm(listForm.filter((el) => el.id !== id));
  };

  const handleUpdate = async (id) => {
    await instance({ method: "get", url: `/get_one/${id}` });
    navigate(`/form_update/${id}`);
  };
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>title</th>
            <th>description</th>
            <th>content</th>
            <th>button</th>
          </tr>
        </thead>
        <tbody>
          {listForm?.map((el) => (
            <tr key={el.id}>
              <td>{el.id}</td>
              <td>{el.title}</td>
              <td>{el.description}</td>
              <td>{el.content}</td>
              <td>
                <div>
                  <button onClick={() => handleUpdate(el.id)}>sua</button>
                  <button onClick={() => handleDelete(el.id)}>xoa</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UsersList;
