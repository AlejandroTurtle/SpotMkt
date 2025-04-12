import {
  Route,
  Routes,
  BrowserRouter as Router,
  Navigate,
} from "react-router-dom";
import Login from "./pages/Auth/Login";
import Home from "./pages/Comum/Home";

const HomeRoute = () => {
  const token = localStorage.getItem("token");
  return token ? <Home /> : <Navigate to="/" replace />;
};

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<HomeRoute />} />

        <Route
          path="*"
          element={
            <div className="text-3xl text-black flex items-center justify-center">
              404 Not Found
            </div>
          }
        />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
