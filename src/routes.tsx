import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Login from "./pages/Auth/Login";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />

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
