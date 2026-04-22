import { API_URL } from "../api/api";

const API = `${API_URL}/api/v1/productos`;

export const getProducts = async () => {
  try {
    const res = await fetch(API);

    if (!res.ok) {
      throw new Error("Error al obtener productos");
    }

    const data = await res.json();
    return data;

  } catch (error) {
    console.error("Error en getProducts:", error);
    return [];
  }
};