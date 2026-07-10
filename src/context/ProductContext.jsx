import { createContext, useState } from "react";

// create context: createContext()
export const ProductContext = createContext();  // empty tank

//create provider : a supercomponent
export const ProductProvider = ({ children }) => {

    // send a request to an api endpoint that returns all products inside inventory db table
    var response = [
        {
            id:1,
            productname: 'black glasses',
            qty: 2
        },{
            id:2,
            productname: 'yellow jean',
            qty: 5
        }
    ]

  const [products, setProducts] = useState(response);
  return (
    <ProductContext.Provider value={ {products, setProducts} }>
      {children}
    </ProductContext.Provider>
  );
}

