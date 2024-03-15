const SelectCart = ({ selectCart }) => {
  return (
    <div className="w-[300px]">
      <h2 className="text-center text-xl font-semibold">Selected Cart</h2>
      <div className="text-lg font-semibold flex justify-around mt-6">
        <h4>Name</h4>
        <h4>Price</h4>
      </div>
      {/* <h2 className="text-center text-sm font-semibold">{title}</h2>
      <h2 className="text-center text-sm font-semibold">{price}</h2> */}
      <div className="">
        {selectCart.map((cart) => (
          <div className="flex justify-around mt-6" key={cart.id}>
            <h2 className="text-center text-sm font-semibold">
              {cart.title.slice(0, 10)}
            </h2>
            <h2 className="text-center text-sm font-semibold">{cart.price}</h2>
            <button>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectCart;
