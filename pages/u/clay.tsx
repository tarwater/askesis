import YearlyGraph from "../../components/YearlyGraph";

const Dashboard = () => {
  return (
    <div className="flex flex-col items-center gap-8 p-4">
      <h1 className="text-center">Clay&apos;s page</h1>
      <YearlyGraph />
    </div>
  );
};

export default Dashboard;
