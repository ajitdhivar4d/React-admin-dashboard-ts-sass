import { categories } from "../../assets/data.json";
import AdminSidebar from "../../components/AdminSidebar";
import { DoughnutChart, PieChart } from "../../components/Charts";

const PieCharts = () => {
  return (
    <div className="admin-container">
      <AdminSidebar />
      <main className="chart-container">
        <h1>Pie & Doughnut Charts</h1>
        <section>
          <div>
            <PieChart
              labels={["Processing", "Shipped", "Delivered"]}
              data={[13, 6, 12]}
              backgroundColor={[
                `hsl(200, 70%, 40%)`,
                `hsl(50, 90%, 80%)`,
                `hsl(340, 65%, 47%)`,
              ]}
              offset={[0, 0, 50]}
            />
          </div>
          <h2>Order fulfillment Ratio</h2>
        </section>

        <section>
          <div>
            <DoughnutChart
              labels={categories.map((i) => i.heading)}
              data={categories.map((i) => i.value)}
              backgroundColor={categories.map(
                (i) => `hsl(${i.value * 4}, ${i.value}%, 50%)`,
              )}
              legends={false}
              offset={[0, 0, 0, 80]}
            />
          </div>
          <h2>Product Categories Raio</h2>
        </section>

        <section>
          <div>
            <DoughnutChart
              labels={["In Stock", "Out of Stock"]}
              data={[40, 20]}
              backgroundColor={["hsl(291, 39%, 44%)", "hsl(183, 75%, 43%)"]}
              legends={false}
              offset={[0, 80]}
              cutout={"70%"}
            />
          </div>
          <h2>Stock Availability</h2>
        </section>

        <section>
          <div>
            <DoughnutChart
              labels={[
                "Marketing Cost",
                "Discount",
                "Burnt",
                "Production Cost",
                "Net Margin",
              ]}
              data={[40, 20, 30, 90, 30]}
              backgroundColor={[
                "hsl(291, 39%, 44%)",
                "hsl(183, 75%, 43%)",
                "hsl(30, 77%, 40%)",
                "hsl(340, 65%, 47%)",
                "hsl(200, 70%, 40%)",
              ]}
              legends={false}
              offset={[20, 30, 20, 30, 80]}
            />
          </div>
          <h2>Revenue Distribution</h2>
        </section>

        <section>
          <div>
            <PieChart
              labels={["Teenager(Below 20)", "Adult(20-40)", "Older(above 40"]}
              data={[20, 150, 70]}
              backgroundColor={[
                `hsl(200, 70%, 40%)`,
                `hsl(30, 77%, 40%)`,
                `hsl(340, 65%, 47%)`,
              ]}
              offset={[0, 0, 50]}
            />
          </div>
          <h2>Users Age Group</h2>
        </section>

        <section>
          <div>
            <DoughnutChart
              labels={["Admin", "Customers"]}
              data={[40, 180]}
              backgroundColor={["hsl(291, 39%, 44%)", "hsl(183, 75%, 43%)"]}
              offset={[0, 80]}
            />
          </div>
        </section>
      </main>
    </div>
  );
};

export default PieCharts;
