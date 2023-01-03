import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Section from "./components/Section";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <Header />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <Sidebar />
          </div>
          <div className="col-8">
            <Section />
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default App;
