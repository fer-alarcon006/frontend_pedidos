import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full fixed top-0 left-0 z-50 px-8 py-4 flex justify-between items-center bg-black/70 backdrop-blur-md text-white shadow-lg">

      {/* LOGO */}
      <Link to="/">
        <h1 className="text-2xl font-bold hover:text-orange-400 transition">
          Leños
        </h1>
      </Link>

      {/* MENÚ */}
      <div className="flex gap-6 text-sm md:text-base items-center">

        <Link to="/">Inicio</Link>

        <Link to="/productos">Productos</Link>

        <Link to="/contacto">Contacto</Link>

        <Link to="/carrito" className="text-xl">
          carrito
        </Link>

        {/* ADMIN */}
        <Link to="/login">
          <button className="bg-orange-500 px-3 py-1 rounded">
            Admin
          </button>
        </Link>

      </div>
    </nav>
  );
};

export default Navbar;