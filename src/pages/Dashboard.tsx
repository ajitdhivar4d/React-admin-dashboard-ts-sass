import { FiSearch } from "react-icons/fi";
import AdminSidebar from "../components/AdminSidebar";
import { FaRegBell } from "react-icons/fa";
import userImg from "../assets/userpic.png";
import { HiTrendingUp, HiTrendingDown } from "react-icons/hi";
import data from "../assets/data.json";
import { BarChart, DoughnutChart } from "../components/Charts";
import { BiMaleFemale } from "react-icons/bi";
import Table from "../components/DashboardTable";

const Dashboard = () => {
  return (
    <div className="admin-container">
      <AdminSidebar />
      <main className="dashboard">
        <div className="bar">
          <FiSearch />
          <input type="text" placeholder="Search for data, users, docs" />
          <FaRegBell />
          <img src={userImg} alt="usrImg" />
        </div>

        <section className="widget-container">
          <WidgetItem
            percent={30}
            amount={true}
            value="240000"
            heading="Revenue"
            color="rgb(255, 87, 51)" // Fiery Red
          />
          <WidgetItem
            percent={-40}
            value="400"
            heading="Users"
            color="rgb(88, 214, 141)" // Fresh Green
          />
          <WidgetItem
            percent={90}
            value="48000"
            heading="Transactions"
            color="rgb(52, 152, 219)" // Cool Blue
          />
          <WidgetItem
            percent={90}
            value="48000"
            heading="Transactions"
            color="rgb(155, 89, 182)" // Vibrant Purple
          />
        </section>

        <section className="graph-container">
          <div className="revenue-chart">
            <h2>Revenue & Transaction</h2>
            <BarChart
              data_1={[34, 23, 45, 67, 89, 56, 78]}
              data_2={[12, 67, 34, 78, 45, 89, 23]}
              title_1="Revenue"
              title_2="Transaction"
              bgColor_1="rgba(75, 192, 192, )"
              bgColor_2="rgba(255, 99, 132, 0.8)"
            />
          </div>
          <div className="dashboard-category">
            <h2>Inventory</h2>

            <div>
              {data.categories.map((i) => (
                <CategoryItem
                  key={i.heading}
                  heading={i.heading}
                  value={i.value}
                  color={`hsl(${i.value * 4},${i.value * 4}%,50%)`}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="transaction-container">
          <div className="gender-chart">
            <h2>Gender Raio</h2>
            <DoughnutChart
              labels={["Female", "Male"]}
              data={[12, 19]}
              backgroundColor={["hsl(340,82%,56%)", "rgba(53,162,235,0.8)"]}
              cutout={85}
            />
            <p>
              <BiMaleFemale />
            </p>
          </div>
          <Table data={data.transaction} />
        </section>
      </main>
    </div>
  );
};

interface WidgetItemProps {
  heading: string;
  value: string;
  percent: number;
  color: string;
  amount?: boolean;
}

const WidgetItem = ({
  heading,
  value,
  percent,
  color,
  amount = false,
}: WidgetItemProps) => (
  <article className="widget">
    <div className="widget-info">
      <p>{heading}</p>
      <h4>{amount ? `$${value}` : value}</h4>
      {percent > 0 ? (
        <span className="green">
          <HiTrendingUp /> +{percent}%{" "}
        </span>
      ) : (
        <span>
          <HiTrendingDown className="red" /> {percent}%{" "}
        </span>
      )}
    </div>

    <div
      className="widget-circle"
      style={{
        background: `conic-gradient( 
    ${color} ${(Math.abs(percent) / 100) * 360}deg,
    rgba(255,255,255,0) 0
      )`,
      }}
    >
      <span style={{ color }}>{percent}%</span>
    </div>
  </article>
);

interface CategoryItemProps {
  color: string;
  value: number;
  heading: string;
}

const CategoryItem = ({ color, heading, value }: CategoryItemProps) => (
  <div className="category-item">
    <h5>{heading}</h5>
    <div>
      <div style={{ backgroundColor: color, width: `${value}%` }}></div>
    </div>
    <span>{value}%</span>
  </div>
);

export default Dashboard;
