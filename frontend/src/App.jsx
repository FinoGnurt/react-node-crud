import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import UsersList from "./components/UsersList";
import UserForm from "./components/UserForm";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path="list_user" element={<UsersList />} />
          <Route path="form" element={<UserForm />} />
          <Route path="form_update/:id" element={<UserForm />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
