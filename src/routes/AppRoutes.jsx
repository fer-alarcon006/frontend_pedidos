import { Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";

import Home from "../pages/Home";
import Products from "../pages/Products";
import Cart from "../pages/Cart";
import Contact from "../pages/Contact";

const AppRoutes = () => {
  return (
    <Routes>

      <Route path="/" element={
        <Layout>
          <Home />
        </Layout>
      } />

      <Route path="/productos" element={
        <Layout>
          <Products />
        </Layout>
      } />

      <Route path="/carrito" element={
        <Layout>
          <Cart />
        </Layout>
      } />

      <Route path="/acerca" element={
        <Layout>
          <Contact />
        </Layout>
      } />

    </Routes>
  );
};

export default AppRoutes;