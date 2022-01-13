import Search from "../../components/Search/Search";
import CardContainer from "../../components/CardContainer/CardContainer";
import Card from "../../components/Card/Card";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Home() {
  const [books, setbooks] = useState([]);

  const getData = async () => {
    await axios.get("/book/findMany").then((response) => {
      setbooks(response.data);
    });
  };

  useEffect(() => {
    getData();
  });

  return (
    <>
      <Search />
      <CardContainer title="Livros">
        {books.map((book) => (
          <Card
            key={book.id}
            image={book.imageUrl}
            name={book.name}
            price={book.price}
          />
        ))}
      </CardContainer>
    </>
  );
}
