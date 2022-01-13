import { Container } from "./styles";
import { useEffect, useState } from "react";

export default function Profile(props) {
  const [user, setuser] = useState({});
  const [logged, setLogged] = useState(true);

  useEffect(() => {
    if (localStorage.token) {
        const token = localStorage.token;

        const config = {
            headers: {Authorization: `Bearer $`}
        }
    } 
  });

  return (
    <Container>
      <img
        src="https://yt3.ggpht.com/ytc/AKedOLTNDWSxPjRimdb7dmPRXSDnciDL3J1Z2CqkqCSU=s900-c-k-c0x00ffffff-no-rj"
        alt="Mario"
      />
      <h2>Sem dados do Perfil</h2>
    </Container>
  );
}
