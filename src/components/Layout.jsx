import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="bg-gray-100 min-h-screen">
      
      <Navbar />

      <main className="pt-20">
        {children}
      </main>

    </div>
  );
};

export default Layout;