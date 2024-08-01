import AdminSidebar from "../../components/AdminSidebar";
import { BarChart } from "../../components/Charts";

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

const BarCharts = () => {
  return (
    <div className="admin-container">
      <AdminSidebar />
      <main className="chart-container">
        <h1>Bar Charts</h1>
        <section>
          <BarChart
            data_1={[200, 444, 556, 354, 878, 455, 985]}
            data_2={[300, 144, 340, 658, 244, 768, 230]}
            title_1="Products"
            title_2="Users"
            bgColor_1={`hsl(200,70%,40%)`}
            bgColor_2={`hsl(50,90%,80%)`}
          />
          <h2>Top Selling Products & Top Customers</h2>
        </section>
        <section>
          <BarChart
            horizontal={true}
            data_1={[30, 25, 40, 45, 50, 35, 55, 60, 70, 65, 75, 80]}
            data_2={[]}
            title_1="Products"
            title_2=""
            bgColor_1={`hsl(200,70%,40%)`}
            bgColor_2=""
            labels={months}
          />
          <h2>Orders throughout the year</h2>
        </section>
      </main>
    </div>
  );
};

export default BarCharts;
