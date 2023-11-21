import "./App.css";
import Navbar from "./navbar";
import Header from "./header";
import CreditScene from "./framerText";
function App() {
  return (
    <section className="bg-color column">
      <div className="column">
        <Header></Header>
      </div>

      <div className="w-100 gap-10">
        <div>
          <Navbar></Navbar>
        </div>
        <div>
          <CreditScene BrUtal={"BRUTAL "}></CreditScene>
        </div>
      </div>
    </section>
  );
}

export default App;
