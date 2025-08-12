import CardList from "@/components/CardList";
import { AppAreaChart } from "@/components/Charts/AppAreaChart";
import AppBarChart from "@/components/Charts/AppBarChart";
import { AppPieChart } from "@/components/Charts/AppPieChart";
import { columns } from "@/components/Table/Columns";
import { DataTable } from "@/components/Table/DataTable";
import ToDoList from "@/components/ToDoList";
import { data } from "@/constants";

const page = () => {
  return (
    <div className="px-2 max-sm:mr-7 flex flex-col gap-6" >
      <section className="dashboard-grid">
        <div className="dashboard-card xl:col-span-2 col-span-1">
          <AppBarChart />
        </div>
        <div className="dashboard-card">
          <CardList title="Latest Transactions" />
        </div>
        <div className="dashboard-card">
          <AppPieChart />
        </div>
        <div className="dashboard-card">
          <ToDoList />
        </div>
        <div className="dashboard-card xl:col-span-2 col-span-1">
          <AppAreaChart />
        </div>
        <div className="dashboard-card">
          <CardList title="Popular Content" />
        </div>
      </section>
      <section>
        <DataTable columns={columns} data={data} />
      </section>
    </div>
  );
};

export default page;
