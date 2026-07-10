import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
// import Invento from './Invento.jsx'
// import { ProductProvider } from './context/ProductContext'
import Meal from './Meal.jsx'
//import './index.css' //side efect import: Importing the whole file from index.css
// import Blogger from './BLogger.jsx'
//mport Playground from './Playground.jsx'
//import App from './App.jsx'
// import Layout from './Layout.jsx'
// import Banking from './Banking'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Layout /> */}
    {/* a root component that shows blogger app */}
    {/* <Blogger /> */}
    {/* <Playground /> */}
    {/* <Banking /> */}

   {/* <ProductProvider>
     <Invento />
   </ProductProvider> */}

   <Meal />

  </StrictMode>,
)
