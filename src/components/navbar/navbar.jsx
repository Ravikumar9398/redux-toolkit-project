import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="title">
        Ocean <span>Store</span>
      </h2>

      <ul className="nav-list">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Cart</li>
      </ul>
      <button type="button" className="login-btn ">
        Login
      </button>
    </nav>
  );
};

export default Navbar;
