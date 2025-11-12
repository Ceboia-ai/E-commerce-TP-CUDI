import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import HomePage from './Pages/HomePage';
import SignUpPage from './Pages/SignUpPage';
import LogInPage from './Pages/LogInPage';
import Navbar from './Components/Navbar';

const App = () => {
  const [userLogin, setUserLogin] = useState(false);

  useEffect(() => {
    const storedLogin = localStorage.getItem("userLogin");
    if (storedLogin === "true") {
      setUserLogin(true);
    }
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/signup"
          element={!userLogin ? <SignUpPage /> : <Navigate to="/" />}
        />
        <Route
          path="/login"
          element={!userLogin ? <LogInPage setUserLogin={setUserLogin} /> : <Navigate to="/" />}
        />
      </Routes>
    </Router>
  );
};

export default App;
