import Navbar from "components/navbar";
import BarChart from "components/navbar/BarChart";
import DataTable from "components/navbar/DataTable";
import DonutChart from "components/navbar/DonutChart";
import Footer from "components/navbar/Footer";

function App() {
  return (
    <>
      <div className="container">
        <Navbar />
        <h1 className="text-primary py-3">Dashboard de vendas</h1>
        <div className="row px-3">
          <div className="col-sm-6">
            <h5 className = "text-center text-secondary">Vendas</h5>
            <BarChart />
          </div>
          <div className="col-sm-6">
            <h5>Taxa de sucesso de vendas</h5>
            <DonutChart />
          </div>
        </div>
        <div className = "py-3">
        <h2 className = "text-primary">Vendas</h2>
        </div>
        <DataTable />
      </div>
      <Footer />
    </>
  );
}

export default App;
