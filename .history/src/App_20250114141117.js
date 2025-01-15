import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import Home from "./pages/Home";
import Directory from "./pages/Directory";
import Selected from "./pages/Selected";
import CartCheckout from "./pages/CartCheckout";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";

import Nav from "./components/Navbar";
import Footer from "./components/Footer";

import { Provider } from "./components/ui/provider";

import "./App.css";

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
  const [totalCartQuant, setTotalCartQuant] = useState(0);
  const [search, setSearch] = useState("The Godfather");
  const [page, setPage] = useState(1);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser || null);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const totalQuantity = cartValue.reduce((acc, item) => acc + item.quantity, 0);
    setTotalCartQuant(totalQuantity);
  }, [cartValue]);

  return (
    <>
      <Nav quantity={totalCartQuant} user={user} />
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={<Home user={user} className="home_page" />}
          />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/search"
            element={
              <Directory
                search={search}
                setSearch={setSearch}
                page={page}
                setPage={setPage}
              />
            }
          />
          <Route
            path="/movie/:movieId"
            element={
              <Selected cart={cartValue} setCart={setCartValue} user={user} />
            }
          />
          <Route
            path="/cart"
            element={
              <CartCheckout
                cart={cartValue}
                setCart={setCartValue}
                setTotalQuant={setTotalCartQuant}
              />
            }
          />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
