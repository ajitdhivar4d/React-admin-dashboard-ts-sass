import { ReactElement, useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { Column } from "react-table";
import AdminSidebar from "../components/AdminSidebar";
import TableHOC from "../components/TableHOC";

interface DataType {
  user: string;
  amount: number;
  discount: number;
  quantity: number;
  status: ReactElement;
  action: ReactElement;
}

const columns: Column<DataType>[] = [
  { Header: "User", accessor: "user" },
  { Header: "Amount", accessor: "amount" },
  { Header: "Discount", accessor: "discount" },
  { Header: "Quantity", accessor: "quantity" },
  { Header: "Status", accessor: "status" },
  { Header: "Action", accessor: "action" },
];

const arr: DataType[] = [
  {
    user: "John Doe",
    amount: 2000,
    discount: 100,
    quantity: 5,
    status: <span className="green">Completed</span>,
    action: <Link to="/admin/transaction/agerg">Manage</Link>,
  },
  {
    user: "Jane Doe",
    amount: 1500,
    discount: 50,
    quantity: 10,
    status: <span className="orange">Pending</span>,
    action: <Link to="/admin/transaction/pending">Manage</Link>,
  },
  {
    user: "David Johnson",
    amount: 3000,
    discount: 200,
    quantity: 2,
    status: <span className="red">Cancelled</span>,
    action: <Link to="/admin/transaction/cancelled">Manage</Link>,
  },
];

const Transaction = () => {
  const [data] = useState<DataType>(arr);

  const Table = useCallback(
    TableHOC<DataType>(
      columns,
      data,
      "dashboard-product-box",
      "Transactions",
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

export default Transaction;
