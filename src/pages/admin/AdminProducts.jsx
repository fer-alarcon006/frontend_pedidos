import { useEffect, useState } from "react";

const AdminProducts = () => {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({
    name: "",
    price: "",
    description: "",
    image: "",
    ingredients: "",
    offer: false,
    discount: 0
  });

  const API = "http://localhost:3001/api/v1/productos";

  const getProducts = () => {
    fetch(API)
      .then(res => res.json())
      .then(setProducts);
  };

  useEffect(() => {
    getProducts();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value
    });
  };

  const createProduct = () => {
    fetch(API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        ...form,
        price: Number(form.price),
        discount: Number(form.discount),
        ingredients: form.ingredients.split(",")
      })
    }).then(() => {
      getProducts();
    });
  };

  const deleteProduct = (id) => {
    fetch(`${API}/${id}`, {
      method: "DELETE"
    }).then(() => getProducts());
  };

  return (
    <div className="p-10">
      <h1 className="text-2xl mb-4">Admin Productos</h1>

      {/* FORM */}
      <div className="flex flex-col gap-2 mb-6">
        <input name="name" placeholder="Nombre" onChange={handleChange} className="border p-2"/>
        <input name="price" placeholder="Precio" onChange={handleChange} className="border p-2"/>
        <input name="description" placeholder="Descripción" onChange={handleChange} className="border p-2"/>
        <input name="image" placeholder="/imagen.jpg" onChange={handleChange} className="border p-2"/>
        <input name="ingredients" placeholder="Queso,Piña,Tocino" onChange={handleChange} className="border p-2"/>

        {/*  OFERTA */}
        <label>
          <input type="checkbox" name="offer" onChange={handleChange} />
          Tiene oferta
        </label>

        <input name="discount" placeholder="Descuento %" onChange={handleChange} className="border p-2"/>

        <button
          onClick={createProduct}
          className="bg-green-500 text-white p-2"
        >
          Crear Producto
        </button>
      </div>

      {/* LISTA */}
      {products.map((p) => (
        <div key={p._id} className="border p-3 mb-2 flex justify-between">
          <div>
            {p.name} - ${p.price}

            {p.offer && (
              <span className="ml-2 text-red-500">
                 {p.discount}% OFF
              </span>
            )}
          </div>

          <button
            onClick={() => deleteProduct(p._id)}
            className="bg-red-500 text-white px-3"
          >
            Eliminar
          </button>
        </div>
      ))}
    </div>
  );
};

export default AdminProducts;