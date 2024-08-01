import { useState } from "react";
import AdminSidebar from "../../components/AdminSidebar";
import { orderItemType, orderType } from "../../types";
import { Link } from "react-router-dom";

const img =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW6KqNg5I0JSHOa309Aizxy1tm3oQaZmOGSw&s";
const orderItems: orderItemType[] = [
  {
    name: "Nike Shoes",
    photo: img,
    price: 2000,
    quantity: 8,
    _id: "ggfweurjvbrug",
  },
];

const TransactionManagement = () => {
  const [order, setOrder] = useState<orderType>({
    name: "Nobita",
    address: "near Super market behind Police station",
    city: "kusumoro",
    country: "Japan",
    state: "takasi",
    pinCode: 751692,
    status: "Processing",
    subtotal: 4000,
    discount: 1200,
    shippingCharges: 0,
    tax: 200,
    total: 4000 + 200 + 0 - 1200,
    orderItems,
    _id: "dkbortings",
  });

  const {
    _id,
    address,
    city,
    country,
    discount,
    name,
    pinCode,
    shippingCharges,
    state,
    status,
    subtotal,
    tax,
    total,
  } = order;

  const updateHandler = () => {
    setOrder((prev) => ({
      ...prev,
      status: prev.status === "Processing" ? "Shipped" : "Delivered",
    }));
  };

  return (
    <div className="admin-container">
      <AdminSidebar />
      <main className="product-management">
        <section style={{ padding: "2rem" }}>
          <h2>Order Items</h2>

          {order.orderItems.map(({ name, photo, price, quantity, _id }) => (
            <ProductCard
              key={_id}
              name={name}
              photo={photo}
              price={price}
              quantity={quantity}
              _id={_id}
            />
          ))}
        </section>

        <article className="shipping-info-card">
          <h1>Order Info</h1>
          <h5>User Info</h5>
          <p>Name: {name}</p>
          <p>Address : {`${address},${city},${state},${country},${pinCode}`}</p>

          <h5>Amount Info</h5>
          <p>Subtotal: {subtotal}</p>
          <p>Shipping Charges: {shippingCharges}</p>
          <p>Tax: {tax}</p>
          <p>Discount: {discount}</p>
          <p>Total: {total}</p>

          <h5>Status Info</h5>
          <p>
            Status:{" "}
            <span
              className={
                status === "Delivered"
                  ? "purple"
                  : status === "Shipped"
                  ? "green"
                  : "red"
              }
            >
              {status}
            </span>
          </p>

          <button onClick={updateHandler}>Process Order</button>
        </article>
      </main>
    </div>
  );
};

const ProductCard = ({ name, photo, price, quantity, _id }: orderItemType) => (
  <div className="transaction-product-card">
    <img src={photo} alt={name} />
    <Link to={`/product/${_id}`}>{name} </Link>
    <span>
      ${price} X ${quantity} = ${price * quantity}
    </span>
  </div>
);

export default TransactionManagement;
