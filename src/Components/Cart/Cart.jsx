const Cart = ({ cart, handleCartAdd }) => {
  const { category, description, image, price, title } = cart;
  return (
    <div>
      <div className="card bg-[#ffffff] h-[600px] shadow-xl ">
        <figure className="mt-4">
          <img className="w-[200px] h-[200px]" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl">{title.slice(0, 10)}</h2>
          <p>{description.slice(0, 40)}</p>
          <p className="text-xl font-semibold">{price} $</p>
          <p className="text-lg">{category}</p>
          <div className="card-actions justify-center">
            <button
              onClick={() => handleCartAdd(cart)}
              className="btn w-full btn-primary bg-[#1868d5] border-none"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
