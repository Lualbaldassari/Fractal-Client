import { BrowserRouter, Routes, Route } from "react-router-dom";
import Add from "./components/Add";
import AddOrder from "./components/AddOrder";
import LandingPage from "./components/LandingPage";
import Orders from "./components/Orders";
import Products from "./components/Products";
import Update from "./components/Update";
import UpdateOrder from "./components/UpdateOrder";




function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/add/" element={<Add />} />
          <Route path="/update/:id" element={<Update />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/addOrder/" element={<AddOrder />} />
          <Route path="/updateOrder/:id" element={<UpdateOrder />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
