import { useNavigate } from "react-router-dom";

export const useIndex = () => {
  const navigate = useNavigate();

  const logOut = () => {
    localStorage.removeItem("token");
    console.log("Logout");
    navigate("/");
  };
  return { logOut };
};
