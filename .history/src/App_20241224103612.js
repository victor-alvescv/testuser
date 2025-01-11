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


function App() {
  const location = useLocation();
  const showBackground = location.pathname === '/' || location.pathname === '/signin';

  return (
  <Provider>
    <Router>
  <div className={"background_container">
      <Nav/>
    <div className="App">
      <Routes>
        <Route path='/' element={<Home className="home_page"/>} />
        <Route path='/signin' element={<Signin/>} />
        <Route path='/search' element={<Directory/>} />
        <Route path='/movie/:id' element={<Selected/>} />
        <Route path='/cart' element={<CartCheckout/>} />
      </Routes>
    </div>
      </div>
    <Footer/>
    </Router>
  </Provider>
  );
}

export default App;
