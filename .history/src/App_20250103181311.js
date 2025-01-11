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
      <AppContent/>
    </Router>
  </Provider>
  );
}


function AppContent() {
  const location = useLocation();
  const showBackground = location.pathname === '/' || location.pathname === '/signin';
  const [cartValue, setCartValue] = useState([]);

  const cartQuantity = cartValue.map((itme) => {

  })

  useEffect(() => {
    console.log(cartValue)
  }, [cartValue]);

return (
  <>
  <div className={showBackground ? "background_container" : ''}>
      <Nav items={cartQuantity}/>
    <div className="App">
      <Routes>
        <Route path='/' element={<Home className="home_page"/>} />
        <Route path='/signin' element={<Signin/>} />
        <Route path='/search' element={<Directory/>} />
        <Route path='/movie/:movieId' element={<Selected cart={cartValue} setCart={setCartValue}/>} />
        <Route path='/cart' element={<CartCheckout cart={cartValue}/>} />
      </Routes>
    </div>
      </div>
    <Footer/>
  </>

)

}

export default App;
