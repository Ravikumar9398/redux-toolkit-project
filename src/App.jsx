import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import ProductDetails from "./pages/product-details/productDetails";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route path="/products/:id" Component={ProductDetails} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
