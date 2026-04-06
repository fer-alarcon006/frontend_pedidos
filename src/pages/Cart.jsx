import Navbar from "../components/Navbar";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useCart();

  // 📱 teléfono WhatsApp
  const phone = (import.meta.env.VITE_PHONE || "524182393017").replace(/\D/g, "");

  //  total
  const total = cart.reduce((acc, item) => acc + item.price, 0);

  const sendToWhatsApp = () => {
    let message = "Hola, quiero pedir:\n\n";

    cart.forEach((item) => {
      message += `🛒 ${item.name}\n`;
      message += `💲 $${item.price}\n`;
      message += `🧾 ${item.selectedIngredients?.join(", ") || "Sin extras"}\n\n`;
    });

    message += ` TOTAL: $${total}`;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div>
      <Navbar />

      <div className="pt-24 p-10">
        <h1 className="text-3xl font-bold mb-6">Carrito</h1>

        {cart.length === 0 && (
          <p className="text-gray-500">Tu carrito está vacío 😢</p>
        )}

        {cart.map((item, i) => (
          <div
            key={item._id || i}
            className="mb-4 border p-4 rounded flex justify-between items-center bg-white shadow"
          >
            <div>
              <h2 className="font-bold">{item.name}</h2>
              <p className="text-orange-500 font-semibold">${item.price}</p>

              <p className="text-sm text-gray-600">
                Ingredientes: {item.selectedIngredients?.join(", ") || "Sin extras"}
              </p>
            </div>

            <button
              onClick={() => removeFromCart(item._id || i)}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
            >
              Eliminar
            </button>
          </div>
        ))}

        {/* TOTAL */}
        {cart.length > 0 && (
          <div className="mt-6 flex justify-between items-center">
            <h2 className="text-xl font-bold">
              Total: ${total}
            </h2>

            <div className="flex gap-3">
              <button
                onClick={clearCart}
                className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
              >
                Vaciar
              </button>

              {/* WhatsApp */}
              <button
                onClick={sendToWhatsApp}
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
              >
                WhatsApp
              </button>

              {/* Checkout opcional */}
              <Link to="/checkout">
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
                  Checkout
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;