import { data } from "autoprefixer";
import { useEffect } from "react";
import { useState } from "react";
import Cart from "../Cart/Cart";

const Carts = () => {
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((data) => setCarts(data));
  }, []);

  return (
    <div className="flex-1">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {carts.map((cart) => (
          <Cart cart={cart} key={cart.id} />
        ))}
      </div>
    </div>
  );
};

export default Carts;
