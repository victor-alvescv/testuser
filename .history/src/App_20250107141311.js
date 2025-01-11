import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Directory from "./pages/Directory";
import Selected from "./pages/Selected";
import CartCheckout from "./pages/CartCheckout";
import Nav from "./components/Navbar";
import Footer from "./components/Footer";
import './App.css';
import Signin from "./pages/Signin";
import { Provider } from './components/ui/provider'
import { useEffect, useState } from "react";

function App() {
  return (
    <Provider>
      <Router>
        <AppContent />
      </Router>
    </Provider>
  );
}

function AppContent() {
  const [cartValue, setCartValue] = useState([]);
  const [totalCartQuant, setTotalCartQuant] = useState(0); // Initialized to 0

  useEffect(() => {
    const totalQuant = cartValue.reduce((acc, item) => acc + item.quantity, 0);
    setTotalCartQuant(totalQuant);
  }, [cartValue]);

  return (
    <div className="App">
        <Nav quantity={totalCartQuant}/>
        <Routes>
          <Route path='/' element={<Home className="home_page" />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/search' element={<Directory/>} />
          <Route path='/movie/:movieId' element={<Selected cart={cartValue} setCart={setCartValue} />} />
          <Route path='/cart' element={<CartCheckout cart={cartValue} setCart={setCartValue} setTotalQuant={setTotalCartQuant} />} />
        </Routes>
      </div>
      <Footer />
   
  );
}

export default App;
