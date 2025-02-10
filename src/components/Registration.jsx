import React, { useState } from "react";
import styled from "styled-components";

const RegistrationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px 0;
`;

const Input = styled.input`
  padding: 15px;
  width: 100%;
  max-width: 350px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1.1em;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #3498db;
  }
`;

const Button = styled.button`
  padding: 15px 25px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1.1em;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #2980b9;
    transform: scale(1.03);
  }
`;

function Registration({ setNome, setFeedback }) {
  const [inputNome, setInputNome] = useState("");

  const handleInscrever = () => {
    setNome(inputNome);
    setFeedback(`Obrigado, ${inputNome}, por se inscrever!`);
  };

  return (
    <RegistrationContainer>
      <Input
        type="text"
        placeholder="Digite seu nome"
        value={inputNome}
        onChange={(e) => setInputNome(e.target.value)}
      />
      <Button onClick={handleInscrever}>Inscrever-se</Button>
    </RegistrationContainer>
  );
}

export default Registration;