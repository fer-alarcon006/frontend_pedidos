import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {

  const precioFinal = product.offer
    ? product.price - (product.price * product.discount / 100)
    : product.price;

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition relative">

      {/* 🔥 BADGE OFERTA */}
      {product.offer && (
        <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
          🔥 {product.discount}% OFF
        </span>
      )}

      <Link to={`/producto/${product._id}`}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-40 object-cover"
        />
      </Link>

      <div className="p-4">
        <h2 className="font-bold text-lg">
          {product.name}
        </h2>

        {/* 💰 PRECIO */}
        {product.offer ? (
          <>
            <p className="line-through text-gray-400">
              ${product.price}
            </p>

            <p className="text-green-600 font-bold text-lg">
              ${precioFinal}
            </p>
          </>
        ) : (
          <p className="text-orange-500 font-bold">
            ${product.price}
          </p>
        )}

      </div>
    </div>
  );
};

export default ProductCard;