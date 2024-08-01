import { ReactElement, useCallback, useState } from "react";
import AdminSidebar from "../components/AdminSidebar";
import TableHOC from "../components/TableHOC";
import { Column } from "react-table";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

interface DataType {
  photo: ReactElement;
  name: string;
  price: number;
  stock: number;
  action: ReactElement;
}

const columns: Column<DataType>[] = [
  { Header: "Photo", accessor: "photo" },
  { Header: "Name", accessor: "name" },
  { Header: "Price", accessor: "price" },
  { Header: "Stock", accessor: "stock" },
  { Header: "Action", accessor: "action" },
];

const img2 =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTGfOlD41QhRq9lef0kQjObeiMb9Vd59kMcD4lc1iP5NQ9fDVrl8DbI5nTzruX9O0PLdQ&usqp=CAU";
const img =
  "https://cdn.pixabay.com/photo/2016/11/19/18/06/feet-1840619_640.jpg";

const arr: DataType[] = [
  {
    photo: <img src={img} alt="Shoes" />,
    name: "Puma Shoes Air Jordan Cook Nigga 2023",
    price: 999,
    stock: 20,
    action: <Link to="/admin/product/rweevfv">Manage</Link>,
  },
  {
    photo: <img src={img2} alt="Shoes" />,
    name: "Puma Shoes Air Jordan Cook Nigga 2023",
    price: 1999,
    stock: 20,
    action: <Link to="/admin/product/rweevfv">Manage</Link>,
  },
  {
    photo: <img src={img} alt="Shoes" />,
    name: "Puma Shoes Air Jordan Cook Nigga 2023",
    price: 999,
    stock: 20,
    action: <Link to="/admin/product/rweevfv">Manage</Link>,
  },
  {
    photo: <img src={img2} alt="Shoes" />,
    name: "Puma Shoes Air Jordan Cook Nigga 2023",
    price: 1999,
    stock: 20,
    action: <Link to="/admin/product/rweevfv">Manage</Link>,
  },
  {
    photo: <img src={img} alt="Shoes" />,
    name: "Puma Shoes Air Jordan Cook Nigga 2023",
    price: 999,
    stock: 20,
    action: <Link to="/admin/product/rweevfv">Manage</Link>,
  },
  {
    photo: <img src={img2} alt="Shoes" />,
    name: "Puma Shoes Air Jordan Cook Nigga 2023",
    price: 1999,
    stock: 20,
    action: <Link to="/admin/product/rweevfv">Manage</Link>,
  },
  {
    photo: <img src={img} alt="Shoes" />,
    name: "Puma Shoes Air Jordan Cook Nigga 2023",
    price: 999,
    stock: 20,
    action: <Link to="/admin/product/rweevfv">Manage</Link>,
  },
  {
    photo: <img src={img2} alt="Shoes" />,
    name: "Puma Shoes Air Jordan Cook Nigga 2023",
    price: 1999,
    stock: 20,
    action: <Link to="/admin/product/rweevfv">Manage</Link>,
  },
  {
    photo: <img src={img} alt="Shoes" />,
    name: "Puma Shoes Air Jordan Cook Nigga 2023",
    price: 999,
    stock: 20,
    action: <Link to="/admin/product/rweevfv">Manage</Link>,
  },
  {
    photo: <img src={img2} alt="Shoes" />,
    name: "Puma Shoes Air Jordan Cook Nigga 2023",
    price: 1999,
    stock: 20,
    action: <Link to="/admin/product/rweevfv">Manage</Link>,
  },
  {
    photo: <img src={img} alt="Shoes" />,
    name: "Puma Shoes Air Jordan Cook Nigga 2023",
    price: 999,
    stock: 20,
    action: <Link to="/admin/product/rweevfv">Manage</Link>,
  },
  {
    photo: <img src={img2} alt="Shoes" />,
    name: "Puma Shoes Air Jordan Cook Nigga 2023",
    price: 1999,
    stock: 20,
    action: <Link to="/admin/product/rweevfv">Manage</Link>,
  },
  {
    photo: <img src={img} alt="Shoes" />,
    name: "Puma Shoes Air Jordan Cook Nigga 2023",
    price: 999,
    stock: 20,
    action: <Link to="/admin/product/rweevfv">Manage</Link>,
  },
  {
    photo: <img src={img2} alt="Shoes" />,
    name: "Puma Shoes Air Jordan Cook Nigga 2023",
    price: 1999,
    stock: 20,
    action: <Link to="/admin/product/rweevfv">Manage</Link>,
  },
  {
    photo: <img src={img} alt="Shoes" />,
    name: "Puma Shoes Air Jordan Cook Nigga 2023",
    price: 999,
    stock: 20,
    action: <Link to="/admin/product/rweevfv">Manage</Link>,
  },
  {
    photo: <img src={img2} alt="Shoes" />,
    name: "Puma Shoes Air Jordan Cook Nigga 2023",
    price: 1999,
    stock: 20,
    action: <Link to="/admin/product/rweevfv">Manage</Link>,
  },
];

const Products = () => {
  const [data] = useState(arr);

  const Table = useCallback(
    TableHOC<DataType>(
      columns,
      data,
      "dashboard-product-box",
      "Products",
      true,
    ),
    [],
  );

  return (
    <div className="admin-container">
      <AdminSidebar />
      <main>{Table()}</main>
      <Link to="/admin/product/new" className="create-product-btn">
        <FaPlus />
      </Link>
    </div>
  );
};

export default Products;
