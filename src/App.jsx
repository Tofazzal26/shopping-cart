import Carts from "./Components/Carts/Carts";
import Header from "./Components/Headers/Header";
import SelectCart from "./Components/SelectCart/SelectCart";
import "./index.css";

function App() {
  return (
    <>
      <div className="poppins-font">
        <Header />
        <div className="flex mt-6 gap-4 container mx-auto">
          <Carts />
          <SelectCart />
        </div>
      </div>
    </>
  );
}

export default App;
