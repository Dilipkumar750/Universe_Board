import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Admin from "./Pages/Admin";
import Login from "./Components/Login";
import Register from "./Components/Register";
import HomeLayout from "./layout/HomeLayout";
import AddProduct from "./Components/AddProduct/AddProduct";
import ListProduct from "./Components/ListProduct/ListProduct";
import Edit from "./Components/editProduct/Edit";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/home" element={<HomeLayout />}>
          <Route index element={<AddProduct />} />
          <Route path="listproduct" element={<ListProduct />} />
          <Route path="edit/:id" element={<Edit />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
