import { useState } from "react";
import Carts from "./Components/Carts/Carts";
import Header from "./Components/Headers/Header";
import SelectCart from "./Components/SelectCart/SelectCart";
import "./index.css";

function App() {
  const [selectCart, setSelectCart] = useState([]);

  const handleCartAdd = (cart) => {
    const isExisted = selectCart.find((idx) => idx.id == cart.id);
    const newCart = [...selectCart, cart];
    if (!isExisted) {
      setSelectCart(newCart);
      console.log(isExisted);
    }
  };

  return (
    <>
      <div className="poppins-font">
        <Header />
        <div className="flex mt-6 gap-4 container mx-auto">
          <Carts handleCartAdd={handleCartAdd} />
          <SelectCart selectCart={selectCart} />
        </div>
      </div>
    </>
  );
}

export default App;
