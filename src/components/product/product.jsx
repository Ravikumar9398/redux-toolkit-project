import { useEffect } from "react";
import { fetchData } from "../../redux/ProductSlice";

import { useDispatch, useSelector } from "react-redux";

import "./Product.css";
import { Link } from "react-router-dom";

const Product = () => {
  const data = useSelector((state) => state.products.products);

  const products = data;
  console.log(products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  return (
    <div className="product-con">
      <div className="product-header-con">
        <>
          <h1>Products</h1>
        </>
        <br />
        <div>
          <input type="search" placeholder="search for products" />
          <button className="button">Search</button>
        </div>
      </div>
      <p>Discover our wide selection of products</p>
      {products.length === 0 && <div>...Loading</div>}
      <ul className="list-con">
        {products.map((each) => (
          <li key={each.id} className="list-item">
            <Link to={`/products/${each.id}`}>
              <img src={each.thumbnail} alt={each.title} />
              <div className="item-details-con">
                <span className="product-name">{each.title}</span>
                <br />
                <span>${each.price}</span>
                <br />
                <span>{each.rating}</span>
              </div>

              <button className="cart-btn">Add to Cart</button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Product;
