import Navbar from "../components/Navbar";
import { useCart } from "../context/CartContext";
import { useState } from "react";

const Checkout = () => {
  const { cart, clearCart } = useCart();

  const [form, setForm] = useState({
    nombre: "",
    telefono: "",
    direccion: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const pedido = {
      cliente: form.nombre,
      telefono: form.telefono,
      direccion: form.direccion,
      productos: cart,
      total: cart.reduce((acc, p) => acc + p.price, 0)
    };

    try {
      await fetch("http://localhost:3001/api/v1/pedidos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(pedido)
      });

      alert("Pedido enviado 🚀");
      clearCart();

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Navbar />

      <div className="p-10 max-w-lg mx-auto">
        <h1 className="text-3xl font-bold mb-5">Checkout</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

          <input
            type="text"
            name="nombre"
            placeholder="Nombre"
            onChange={handleChange}
            required
            className="border p-2 rounded"
          />

          <input
            type="text"
            name="telefono"
            placeholder="Teléfono"
            onChange={handleChange}
            required
            className="border p-2 rounded"
          />

          <input
            type="text"
            name="direccion"
            placeholder="Dirección"
            onChange={handleChange}
            required
            className="border p-2 rounded"
          />

          <button
            type="submit"
            className="bg-green-500 text-white p-2 rounded hover:bg-green-600"
          >
            Confirmar pedido
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;