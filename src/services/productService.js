const API = "http://localhost:3001/api/v1/productos";

export const getProducts = async () => {
  const res = await fetch(API);
  const data = await res.json();
  return data;
};