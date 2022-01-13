import { FaSearchPlus } from "react-icons/fa";
import { Container } from "./styles";

export default function Search() {
  return (
    <Container>
      <span>Procurar:</span>
      <form>
        <FaSearchPlus />
        <input
          type="text"
          placeholder="Procurar livros por título, autor, etc"
        ></input>
        <input type="submit" value="Encontre"></input>
      </form>
    </Container>
  );
}
