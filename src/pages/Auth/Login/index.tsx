import CustomButton from "../../../components/CustomButton";
import Logo from "../../../assets/Logo.png";
import { useIndex } from "./useIndex";

function Login() {
  const { handleLogin } = useIndex();

  return (
    <div className="min-h-screen flex items-center justify-center p-4 md:p-0">
      <div
        className={
          "max-w-md w-full p-5 mx-auto rounded-lg border bg-white shadow-2xl flex flex-col gap-5"
        }
      >
        <img src={Logo} className="w-40 h-16 mx-auto" alt="spotmkt logo" />
        <h1 className="text-2xl md:text-3xl text-center font-bold text-gray-800">
          Bem-vindo ao SPOT MKT
        </h1>
        <form onSubmit={handleLogin}>
          <p className="text-gray-800">E-mail</p>
          <input
            type="text"
            name="email"
            placeholder="Digite seu e-mail"
            className="w-full p-2 border border-gray-300 rounded mb-4 text-black"
            required
          />
          <p className="text-gray-800">Senha</p>
          <input
            type="password"
            name="password"
            placeholder="Digite sua senha"
            className="w-full p-2 border border-gray-300 rounded mb-4 text-black"
            required
          />
          <CustomButton title="Entrar" submit width="w-full" />
        </form>
      </div>
    </div>
  );
}

export default Login;
