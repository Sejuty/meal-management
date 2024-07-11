import Card from "../components/Card";
import Table from "../components/table/Table";
import user from "../constant/user.json";
import { numberOfMeal } from "../utils/helper";

const Dashboard = () => {
  const columns = ["Name", "Email", "Lunch", "Snack"];

  return (
    <div>
      <h1 className="text-red-500">Meal Management</h1>
      <Table columns={columns} data={user} />
      <div className="flex flex-wrap gap-4">
        <Card title="Lunch" content={numberOfMeal(user, "lunch")} />
        <Card title="Snack" content={numberOfMeal(user, "snack")} />
      </div>
    </div>
  );
};

export default Dashboard;
