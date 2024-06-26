import { Link } from "react-router-dom";
import { useState } from "react";

import logoIMG from "../../assets/logo.jpg";
import { LayoutComponents } from "../../components/LayoutComponents";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <LayoutComponents>
      <form className="login-form">
        <span className="login-form-title">Modificação</span>

        <span className="login-form-title">
          <img src={logoIMG} alt="logo" />
        </span>

        <div className="wrap-input">
          <input
            className={email !== "" ? "has-val input" : "input"}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <span className="focus-input" data-placeholder="Email"></span>
        </div>

        <div className="wrap-input">
          <input
            className={password !== "" ? "has-val input" : "input"}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span className="focus-input" data-placeholder="Senha"></span>
        </div>

        <div className="container-login-form-btn">
          <button className="login-form-btn">Login</button>
        </div>

        <div className="text-center">
          <span className="Account">Não possui conta?</span>
          <Link className="register" to="/register">
            Criar conta
          </Link>
        </div>
      </form>
    </LayoutComponents>
  );
};
