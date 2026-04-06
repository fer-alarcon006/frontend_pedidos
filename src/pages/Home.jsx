import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

export default function Home() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/v1/productos")
      .then(res => res.json())
      .then(setProducts);
  }, []);

  // s OFERTAS
  const ofertas = products.filter(p => p.offer);

  // PRODUCTOS NORMALES
  const normales = products.filter(p => !p.offer);

  const enviarWhatsApp = (producto = "") => {
    const numero = "524182393017";
    const mensaje = `Hola, quiero información sobre ${producto || "sus productos"}`;
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
  };

  return (
    <div>

      {/* HERO */}
      <section className="relative h-[60vh] md:h-[70vh]">
        <img
          src="/banner.png"
          alt="banner"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-center text-white px-4">
          <h1 className="text-4xl font-bold mb-4">
            Leños ARTESANALES
          </h1>

          <button
            onClick={() => enviarWhatsApp()}
            className="bg-orange-500 px-6 py-3 rounded-full"
          >
            Pedir por WhatsApp
          </button>
        </div>
      </section>

      {/* OFERTAS */}
      <section className="py-10 bg-red-50">
        <h2 className="text-2xl font-bold text-center mb-6">
           Ofertas
        </h2>

        {ofertas.length === 0 && (
          <p className="text-center text-gray-500">
            No hay ofertas disponibles
          </p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
          {ofertas.map(p => (
            <ProductCard key={p._id} product={p} />
          ))}
        </div>
      </section>

      {/*  PRODUCTOS  */}
      <section className="py-10">
        <h2 className="text-2xl font-bold text-center mb-6">
          Productos
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
          {normales.map(p => (
            <ProductCard key={p._id} product={p} />
          ))}
        </div>
      </section>

      {/* WHATS FLOAT */}
      <button
        onClick={() => enviarWhatsApp()}
        className="fixed bottom-6 right-6 bg-green-500 text-white px-5 py-3 rounded-full shadow-lg"
      >
        WhatsApp
      </button>

    </div>
  );
}