import { useEffect } from "react";
import Navbar from "../../components/navbar/navbar";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct, removeProduct } from "../../redux/selectedProductSlice";
import { useParams } from "react-router-dom";

import "./ProductDetails.css";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.selectedProduct.selectedProduct);
  console.log(product);
  useEffect(() => {
    dispatch(removeProduct()); // Reset the selected product state before fetching a new one.
    dispatch(fetchProduct(id));
  }, []);
  return (
    <>
      <Navbar />
      {product.length === 0 && <div>...Loading</div>}
      <div className="details-con">
        <div className="img-con">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="pro-img"
          />
        </div>
        <div className="info-con">
          <h2>{product.title}</h2>
          {product.brand && <h4>Brand: {product.brand}</h4>}
          <h4
            className={
              product.availabilityStatus === "In Stock" ? "stock" : "in-stock"
            }
          >
            {product.availabilityStatus}
          </h4>
          <p>{product.description}</p>
          <h3>Price: ${product.price}</h3>
          <p>Return policy: {product.returnPolicy}</p>
          <button type="button" className="cart-btn size">
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
