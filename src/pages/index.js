import { Routes, Route,  } from "react-router-dom";
import HomePage from "./HomePage";
import NotFound from "./NotFound";
import RouterWrapper from "./RouterWrapper";
import SingleProduct from "./SingleProduct";
import Products from "../components/Products";
import LoginPage from "./LoginPage";

function Pages() {
  return (
    <>
      <Routes>

        <Route path="/" element={<RouterWrapper />} > 
          <Route index element={<HomePage />} />
          <Route path="products/:id" element={<SingleProduct />} />
          <Route path="product" element={<Products />} />
          <Route path="login" element={<LoginPage />} />
        </Route>

        <Route path="*" element={<NotFound />} />

      </Routes>
    </>
  )
}

export default Pages