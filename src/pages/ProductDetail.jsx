import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();

  const [product, setProduct] = useState(null);
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3001/api/v1/productos")
      .then(res => res.json())
      .then(data => {
        console.log("ID URL:", id);
        const found = data.find(p => String(p._id) === String(id));
        setProduct(found);
      });
  }, [id]);

  const toggleIngredient = (ing) => {
    if (selectedIngredients.includes(ing)) {
      setSelectedIngredients(selectedIngredients.filter(i => i !== ing));
    } else {
      setSelectedIngredients([...selectedIngredients, ing]);
    }
  };

  if (!product) return <p className="p-10">Cargando producto...</p>;

  return (
    <div className="pt-20 w-full min-h-screen flex">

      {/* IMAGEN */}
      <div className="w-1/2 h-screen">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* INFO */}
      <div className="w-1/2 p-12 flex flex-col justify-center bg-white">

        <h1 className="text-4xl font-bold mb-4">
          {product.name}
        </h1>

        <p className="text-gray-600 mb-6 text-lg">
          {product.description}
        </p>

        {/* INGREDIENTES */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            Elige tus ingredientes:
          </h2>

          {(product.ingredients || []).map((ing, i) => (
            <label key={i} className="block">
              <input
                type="checkbox"
                onChange={() => toggleIngredient(ing)}
                className="mr-2"
              />
              {ing}
            </label>
          ))}
        </div>

        <p className="text-3xl font-bold text-orange-500 mb-6">
          ${product.price}
        </p>

        <button
          onClick={() => {
            addToCart({
              ...product,
              selectedIngredients
            });

            setShowMessage(true);
            setTimeout(() => setShowMessage(false), 2000);
          }}
          className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg"
        >
          Agregar al carrito
        </button>

      </div>

      {/* TOAST */}
      {showMessage && (
        <div className="fixed bottom-5 right-5 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg">
          Producto agregado con éxito
        </div>
      )}
    </div>
  );
};

export default ProductDetail;