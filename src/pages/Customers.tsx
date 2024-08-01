import { ReactElement, useCallback, useState } from "react";
import AdminSidebar from "../components/AdminSidebar";
import { Column } from "react-table";
import TableHOC from "../components/TableHOC";
import { FaTrash } from "react-icons/fa";

interface DataType {
  avatar: ReactElement;
  name: string;
  email: string;
  gender: string;
  role: string;
  action: ReactElement;
}

const columns: Column<DataType>[] = [
  { Header: "Avatar", accessor: "avatar" },
  { Header: "Name", accessor: "name" },
  { Header: "Email", accessor: "email" },
  { Header: "Gender", accessor: "gender" },
  { Header: "Role", accessor: "role" },
  { Header: "Action", accessor: "action" },
];

const img =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfLGHDyWykVbmVtC3-4Vacocw_sV7XCOAZug&s";

const arr: DataType[] = [
  {
    avatar: <img src={img} alt="Baki" style={{ borderRadius: "50%" }} />,
    name: "John Doe",
    email: "john.doe@example.com",
    gender: "Male",
    role: "user",
    action: (
      <button>
        <FaTrash />
      </button>
    ),
  },
  {
    avatar: <img src={img} alt="Baki" style={{ borderRadius: "50%" }} />,
    name: "John Doe",
    email: "john.doe@example.com",
    gender: "Male",
    role: "user",
    action: (
      <button>
        <FaTrash />
      </button>
    ),
  },
  {
    avatar: <img src={img} alt="Baki" style={{ borderRadius: "50%" }} />,
    name: "John Doe",
    email: "john.doe@example.com",
    gender: "Male",
    role: "user",
    action: (
      <button>
        <FaTrash />
      </button>
    ),
  },
];

const Customers = () => {
  const [data] = useState(arr);

  const Table = useCallback(
    TableHOC<DataType>(
      columns,
      data,
      "dashboard-product-box",
      "Customers",
      true,
    ),
    [],
  );

  return (
    <div className="admin-container">
      <AdminSidebar />
      <main>{Table()}</main>
    </div>
  );
};

export default Customers;
