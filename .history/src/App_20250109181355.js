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
import Signup from "./pages/Signup";

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
  const [search, setSearch] = useState('The Godfather');
  const [page, setPage] = useState(1);

  useEffect(() => {
    const totalQuant = cartValue.reduce((acc, item) => acc + item.quantity, 0);
    setTotalCartQuant(totalQuant);
  }, [cartValue]);

  return (
    <>
    <Nav quantity={totalCartQuant}/>
    <div className="App">
        <Routes>
          <Route path='/' element={<Home className="home_page" />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/search' element={<Directory search={search} setSearch={setSearch}/>} />
          <Route path='/movie/:movieId' element={<Selected cart={cartValue} setCart={setCartValue} />} />
          <Route path='/cart' element={<CartCheckout cart={cartValue} setCart={setCartValue} setTotalQuant={setTotalCartQuant} />} />
        </Routes>
      </div>
      <Footer />
    </>
   
  );
}

export default App;