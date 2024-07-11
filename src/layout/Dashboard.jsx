import { useState } from "react";
import Card from "../components/Card";
import Sidebar from "../components/Sidebar";
import Table from "../components/table/Table";
import user from "../constant/user.json";
import { numberOfMeal } from "../utils/helper";

const Dashboard = () => {
  const columns = ["ID", "Name", "Email", "Lunch", "Snack"];
  const menuItems = ["Dashboard", "About", "Services", "Logout"];

  const [data, setData] = useState(user)

  const handleDelete = (id) => {
    const newData = data.filter((item) => id !==item.id );
    setData(newData);
  };


  return (
    <div className="flex">
      <Sidebar menuItems={menuItems} />
      <div className="flex-grow p-4">
        <h1 className="text-2xl font-bold mb-4">Meal Management</h1>
        <Table columns={columns} data={data} className="p-5 w-fit" onDelete={handleDelete} />
        <div className="flex flex-wrap gap-4">
          <Card title="Lunch" content={numberOfMeal(data, "lunch")} />
          <Card title="Snack" content={numberOfMeal(data, "snack")} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
