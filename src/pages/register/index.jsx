import { useState } from "react";
import { Link } from "react-router-dom";
import { LayoutComponents } from "../../components/LayoutComponents";

import logoIMG from "../../assets/account.jpg";

export const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  return (
    <LayoutComponents>
      <form className="login-form">
        <span className="login-form-title">Criar Conta</span>

        <span className="login-form-title">
          <img src={logoIMG} alt="logo" />
        </span>

        <div className="wrap-input">
          <input
            className={name !== "" ? "has-val input" : "input"}
            type="email"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <span className="focus-input" data-placeholder="Nome"></span>
        </div>

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
          <button className="login-form-btn">Criar Conta</button>
        </div>

        <div className="text-center">
          <span className="Account">Já possui conta?</span>
          <Link className="register" to="/login">
            Login
          </Link>
        </div>
      </form>
    </LayoutComponents>
  );
};
