import { Container, LoginContainer, LostPass, Create } from "./styles";
import { useState } from "react";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(email);
    console.log(password);

    const login = {
      email: email,
      password: password,
    };
    axios.post("/auth/login", login).then((response) => {
      const tokenValue = response.data.token;
      localStorage.setItem("token", tokenValue);
    });
  };

  return (
    <Container>
      <h2>Login</h2>
      <LoginContainer>
        <form>
          <input
            type="text"
            placeholder="Endereço de e-mail"
            required
            onchange={(event) => setEmail(event.target.value)}
          />
          <input
            type="password"
            placeholder="Senha"
            required
            onchange={(event) => setPassword(event.target.value)}
          />

          <LostPass>
            <a href="!#">
              <span>Esqueceu sua senha?</span>
            </a>
            <input type="submit" value="Fazer login" />
          </LostPass>
        </form>

        <Create>
          <span>Ainda não possui conta?</span>
          <a href="/register">Criar uma conta</a>
        </Create>
      </LoginContainer>
    </Container>
  );
}
