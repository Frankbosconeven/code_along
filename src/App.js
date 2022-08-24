import TaskManager from "./pages/TaskManager";
import Spinner from "./components/Spinner";
import Product from "./components/Product";
import ProductList from "./pages/ProductList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import NotFound from "./pages/NotFound";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/products/:productId" element={<ProductDetails />} />
          <Route path="/task-manager" element={<TaskManager />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      {/* <Product /> */}
    </div>
    
  );
}

export default App;
