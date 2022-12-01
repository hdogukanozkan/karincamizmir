import { TiShoppingCart } from "react-icons/ti";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="navbar">
      <div className="nav">
        <img src="/images/logo.jpg" alt="test" draggable="false" />
        <h1 draggable="false">Karıncam İzmir Store</h1>
      </div>

      <div className="lists">
        <ul className="menu">
          <Link to={`/`}>
            <li>Anasayfa</li>
          </Link>
          <Link to={`/blog/`}>
            <li>Blog</li>
          </Link>
          <Link to={"/products/"}>
            <li>Products</li>
          </Link>
          <Link to={"/about/"}>
            <li>About</li>
          </Link>
          <Link to={"/contact/"}>
            <li>Contact</li>
          </Link>
        </ul>
        <div className="ShoppingCart">
          <TiShoppingCart size={40} />
          [0]
        </div>
      </div>
    </div>
  );
}

export default Header;
