import Navbar from "components/navbar";
import DataTable from "components/navbar/DataTable";
import Footer from "components/navbar/Footer";

function App() {
  return (
    <>
      <div className="container">
        <Navbar />
        <h1 className="text-primary">Olá mundo!</h1>
        <DataTable />
      </div>
      <Footer />
    </>
  );
}

export default App;
