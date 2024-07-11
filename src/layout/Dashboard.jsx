import Card from "../components/Card";
import Sidebar from "../components/Sidebar";
import Table from "../components/table/Table";
import user from "../constant/user.json";
import { numberOfMeal } from "../utils/helper";

const Dashboard = () => {
  const columns = ["ID", "Name", "Email", "Lunch", "Snack"];
  const menuItems = ["Dashboard", "About", "Services", "Logout"];

  return (
    <div className="flex">
      <Sidebar menuItems={menuItems} />
      <div className="flex-grow p-4">
        <h1 className="text-2xl font-bold mb-4">Meal Management</h1>
        <Table columns={columns} data={user} className="p-5 w-fit" />
        <div className="flex flex-wrap gap-4">
          <Card title="Lunch" content={numberOfMeal(user, "lunch")} />
          <Card title="Snack" content={numberOfMeal(user, "snack")} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
