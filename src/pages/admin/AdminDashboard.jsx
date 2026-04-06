import { Link } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">Panel Admin</h1>

      <div className="flex gap-4">
        <Link to="/admin/productos">
          <button className="bg-orange-500 text-white p-3 rounded">
            Gestionar Productos
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AdminDashboard;