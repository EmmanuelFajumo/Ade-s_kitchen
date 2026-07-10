// /* eslint-disable react-refresh/only-export-components */
// import { createContext, useState, useContext, useCallback } from "react";

// const ProductContext = createContext();

// export const useProduct = () => {
//   const context = useContext(ProductContext);
//   if (!context) {
//     throw new Error("useProduct must be used within a ProductProvider");
//   }
//   return context;
// };

// export const ProductProvider = ({ children }) => {
//   const [products, setProducts] = useState([]);

//   // Fetch all products — currently uses mock data; swap with API call if needed
//   const fetchProducts = useCallback(() => {
//     // Replace this with an API fetch when backend is ready:
//     // const res = await fetch("/api/products");
//     // const data = await res.json();
//     const data = [
//       { id: 1, productname: "Dark glasses", qty: 2 },
//       { id: 2, productname: "DarkShades", qty: 10 },
//     ];
//     setProducts(data);
//   }, []);

//   // Add a product to the state
//   const addProduct = useCallback((product) => {
//     setProducts((prev) => [
//       ...prev,
//       { ...product, id: Date.now() }, // assign a unique id
//     ]);
//   }, []);

//   // Remove a product by its id
//   const removeProduct = useCallback((id) => {
//     setProducts((prev) => prev.filter((p) => p.id !== id));
//   }, []);

//   return (
//     <ProductContext.Provider
//       value={{ products, setProducts, fetchProducts, addProduct, removeProduct }}
//     >
//       {children}
//     </ProductContext.Provider>
//   );
// };

// export default ProductContext;