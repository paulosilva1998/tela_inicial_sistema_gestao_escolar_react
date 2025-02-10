import React, { useState } from "react";
import EventList from "./components/EventList";
import Registration from "./components/Registration";
import Salchipao from "./components/Salchipao";
import GlobalStyle from "./GlobalStyle";
import styled from "styled-components";

const MainContainer = styled.div`
  background: #fff;
  padding: 40px;
  max-width: 800px;
  margin: 50px auto;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  text-align: center;
  color: #34495e;
  margin-bottom: 25px;
`;

const Description = styled.p`
  text-align: center;
  color: #7f8c8d;
  font-size: 1.2em;
  margin-bottom: 30px;
  line-height: 1.4;
`;

function App() {
  const [nome, setNome] = useState("");
  const [feedback, setFeedback] = useState("");

  const palestras = [
    { id: 1, titulo: "Palestra 1: Desenvolvimento Web", data: "28/10", horario: "10h00", local: "Online" },
    { id: 2, titulo: "Palestra 2: Segurança da Informação", data: "29/10", horario: "14h00", local: "Presencial" },
    { id: 3, titulo: "Palestra 3: Inteligência Artificial", data: "30/10", horario: "16h00", local: "Online" },
    { id: 4, titulo: "Salchipão do ADS", data: "31/10", horario: "12h00", local: "Presencial" }
  ];

  return (
    <MainContainer>
      <GlobalStyle />
      <Title>XV Jornada Acadêmica</Title>
      <Description>
        Participe da nossa XV Jornada Acadêmica que ocorrerá de 28 a 31 de Outubro.
      </Description>
      <Registration setNome={setNome} setFeedback={setFeedback} />
      {feedback && <p>{feedback}</p>}
      <EventList palestras={palestras} />
      <Salchipao />
    </MainContainer>
  );
}

export default App;