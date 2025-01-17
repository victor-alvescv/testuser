import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Directory from "./pages/Directory";
import Selected from "./pages/Selected";
import CartCheckout from "./pages/CartCheckout";

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/' element={<Directory/>} />
        <Route path='/' element={<Selected/>} />
        <Route path='/' element={<CartCheckout/>} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
