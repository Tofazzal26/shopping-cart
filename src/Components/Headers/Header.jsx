const Header = () => {
  return (
    <div className="mt-2">
      <div className="container mx-auto">
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <div role="button" className="btn btn-ghost lg:hidden"></div>
            </div>
            <a className="btn btn-ghost text-xl">Shopping</a>
          </div>
          <div className="navbar-center hidden lg:flex"></div>
          <div className="navbar-end">
            <a className="px-10 py-3 text-white font-semibold rounded-md cursor-pointer bg-[#1868d5]">
              Cart
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
