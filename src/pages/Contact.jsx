import { useState } from "react";
import Navbar from "../components/Navbar";

const Contact = () => {
  const [comentario, setComentario] = useState("");
  const [respuesta, setRespuesta] = useState("");

  const enviarComentario = async () => {
    try {
      const res = await fetch("http://localhost:3001/comentarios", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ comentario }),
      });

      const data = await res.json();
      setRespuesta(data.mensaje);
      setComentario(""); // limpia el textarea
    } catch (error) {
      console.error("Error:", error);
      setRespuesta("Error al enviar comentario");
    }
  };

  return (
    <div>
      <Navbar />

      <h1 className="text-3xl p-10">CONTACTO / COMENTARIOS</h1>

      <div className="p-10">
        <textarea
  id="comentario"
  name="comentario"
  className="border p-2 w-full"
  placeholder="Escribe tu comentario..."
  value={comentario}
  onChange={(e) => setComentario(e.target.value)}
/>  
        <button
          onClick={enviarComentario}
          className="mt-4 bg-blue-500 text-white px-4 py-2"
        >
          Enviar
        </button>

        {/* Respuesta del backend */}
        <p className="mt-4">{respuesta}</p>

        <p
  className="mt-4"
  dangerouslySetInnerHTML={{ __html: comentario }}
></p>
      </div>
    </div>
  );
};

export default Contact;