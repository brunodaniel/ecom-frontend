import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import { Container, Social } from "./styles";

export default function Footer() {
  return (
    <Container>
      <Social>
        <a href="/">
          <FaFacebookSquare />
        </a>
        <a href="/">
          <FaInstagramSquare />
        </a>
        <a href="/">
          <FaTwitterSquare />
        </a>
        <a href="/">
          <FaYoutubeSquare />
        </a>
      </Social>
    </Container>
  );
}
