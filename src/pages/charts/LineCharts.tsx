import AdminSidebar from "../../components/AdminSidebar";
import { LineChart } from "../../components/Charts";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const LineCharts = () => {
  return (
    <div className="admin-container">
      <AdminSidebar />
      <main className="chart-container">
        <h1>Line Charts</h1>
        <section>
          <LineChart
            data={[200, 444, 556, 354, 878, 455, 985, 656, 754, 878, 555, 785]}
            label="Users"
            borderColor="rgb(53, 162, 255)"
            backgroundColor="rgba(53, 162, 255, 0.5)"
            labels={months}
          />
          <h2>Active Users</h2>
        </section>
        <section>
          <LineChart
            data={[450, 678, 356, 455, 678, 555, 885, 656, 455, 778, 755, 885]}
            label="Products"
            borderColor="rgb(224, 255, 51)"
            backgroundColor="rgba(224, 255, 51, 0.5)"
            labels={months}
          />
          <h2>Total Products (SKU)</h2>
        </section>
        <section>
          <LineChart
            data={[550, 478, 756, 355, 678, 555, 685, 856, 655, 878, 855, 985]}
            label="Revenue"
            borderColor="rgb(164, 73, 53)"
            backgroundColor="rgba(255, 87, 51, 0.5)"
            labels={months}
          />
          <h2>Total Revenue (SKU)</h2>
        </section>
        <section>
          <LineChart
            data={[350, 578, 456, 555, 678, 655, 785, 756, 555, 878, 655, 885]}
            label="Discount"
            borderColor="rgb(75, 53, 164)"
            backgroundColor="rgba(209, 77, 198, 0.5)"
            labels={months}
          />
          <h2>Discount Allotted</h2>
        </section>
      </main>
    </div>
  );
};

export default LineCharts;
