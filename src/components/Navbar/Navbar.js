import logo from "./logo.png";
import { Container, Logo, Links, List, ListItem } from "./styles";
import {
  FaRegQuestionCircle,
  FaHeart,
  FaRegUser,
  FaUserPlus,
  FaGamepad,
} from "react-icons/fa";

export default function Navbar() {
  return (
    <Container>
      <Logo>
        <a href="/">
          <img src={logo} alt="Bookstore" />
        </a>
      </Logo>
      <List>
        <li>
          <a href="/wishlist">
            <FaHeart />
            <span>Lista de Desejos</span>
          </a>
        </li>
        <li>
          <a href="/login">
            <FaRegUser />
            <span>Login</span>
          </a>
        </li>
        <li>
          <a href="/register">
            <FaUserPlus />
            <span>Criar conta</span>
          </a>
        </li>
        <li>
          <a href="/profile">
            <FaGamepad />
            <span>Perfil</span>
          </a>
        </li>
      </List>
    </Container>
  );
}
