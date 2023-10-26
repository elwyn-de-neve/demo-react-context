import { useContext } from "react";
import { AuthContext } from "../context/AuthContext.jsx";

const Login = () => {
  const { login } = useContext(AuthContext);
  return (
    <>
      <h1>Login</h1>
      <button type="button" onClick={login}>
        Login
      </button>
    </>
  );
};

export default Login;
