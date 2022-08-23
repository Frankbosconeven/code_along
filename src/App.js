import TaskManager from "./components/TaskManager";
import Spinner from "./components/Spinner";
import Product from "./components/Product";
import ProductList from "./components/ProductList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/task-manager" task-manager element={<TaskManager />} />
          <Route path="/about" about element={<About />} />
          <Route path="/contact" contact element={<Contact />} />
        </Routes>
      </BrowserRouter>
      {/* <Product /> */}
    </div>
  );
};

export default App;