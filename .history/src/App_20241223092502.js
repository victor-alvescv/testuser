import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Directory from "./pages/Directory";

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/' element={<Directory/>} />
        <Route path='/' element={<Selec/>} />
        <Route path='/' element={<Home/>} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
