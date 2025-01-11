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

  
  return (
    <Provider>
    <Router>

    </Router>
  </Provider>
  );
}


function AppContent() {
  const location = useLocation();
  const showBackground = location.pathname === '/' || location.pathname === '/signin';


}

export default App;
