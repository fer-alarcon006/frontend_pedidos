import { Routes, Route } from "react-router-dom";

// Layout
import Layout from "./components/Layout";

// 🌐 Páginas públicas
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import ProductDetail from "./pages/ProductDetail";
import Products from "./pages/Products"; // 🔥 IMPORTANTE

// 🔐 Auth
import Login from "./pages/Login";
import PrivateRoute from "./components/PrivateRoute";

// 🛠️ Admin
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminProducts from "./pages/admin/AdminProducts";

function App() {
  return (
    <Routes>

      {/* 🌐 PUBLICAS */}
      <Route path="/" element={
        <Layout>
          <Home />
        </Layout>
      } />

      {/* 🔥 ESTA ES LA QUE TE FALTABA */}
      <Route path="/productos" element={
        <Layout>
          <Products />
        </Layout>
      } />

      <Route path="/contacto" element={
        <Layout>
          <Contact />
        </Layout>
      } />

      <Route path="/carrito" element={
        <Layout>
          <Cart />
        </Layout>
      } />

      <Route path="/checkout" element={
        <Layout>
          <Checkout />
        </Layout>
      } />

      <Route path="/producto/:id" element={
        <Layout>
          <ProductDetail />
        </Layout>
      } />

      {/* LOGIN */}
      <Route path="/login" element={<Login />} />

      {/* 🔒 ADMIN */}
      <Route
        path="/admin"
        element={
          <PrivateRoute>
            <Layout>
              <AdminDashboard />
            </Layout>
          </PrivateRoute>
        }
      />

      <Route
        path="/admin/productos"
        element={
          <PrivateRoute>
            <Layout>
              <AdminProducts />
            </Layout>
          </PrivateRoute>
        }
      />

    </Routes>
  );
}

export default App;