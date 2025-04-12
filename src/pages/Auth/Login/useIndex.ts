import { useNavigate } from "react-router-dom";

export const useIndex = () => {
  const navigate = useNavigate();
  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    if (email === "spotmkt" && password === "123") {
      localStorage.setItem("token", "token");
      navigate("/home");
      console.log("Login");
    } else {
      alert("E-mail ou senha incorretos");
      e.currentTarget.reset();
    }
  };

  return { handleLogin };
};
