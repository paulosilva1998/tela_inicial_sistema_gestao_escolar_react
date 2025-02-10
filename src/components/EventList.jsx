import React from "react";
import styled from "styled-components";

const ListContainer = styled.div`
  margin: 40px 0;
`;

const ListItem = styled.li`
  list-style: none;
  background-color: #ecf0f1;
  padding: 20px;
  margin: 15px 0;
  border-radius: 10px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
  }

  strong {
    color: #2c3e50;
  }
`;

function EventList({ palestras }) {
  return (
    <ListContainer>
      <h2>Lista de Palestras</h2>
      <ul>
        {palestras.map((palestra) => (
          <ListItem key={palestra.id}>
            <strong>{palestra.titulo}</strong> - {palestra.data} às {palestra.horario} ({palestra.local})
          </ListItem>
        ))}
      </ul>
    </ListContainer>
  );
}

export default EventList;