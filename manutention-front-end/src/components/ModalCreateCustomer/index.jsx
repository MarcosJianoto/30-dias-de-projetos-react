import { Button } from "@mui/material";
import { useState } from "react";
import styled from "styled-components";

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.9);
  z-index: 1000;
`;

const ModalBox = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #1e1e1e;
  padding: 24px;
  border-radius: 8px;
  min-width: 400px;
  z-index: 1001;
  color: white;
  border: 1px solid #444;
`;

const Text = styled.p`
  margin-bottom: 2px;
`;



const Modal = ({ closeModal }) => {

  const [customer, setCustomer] = useState("");
  const [vehicle, setVehicle] = useState("");

  return (
    <>
      <Overlay onClick={closeModal} />
      <ModalBox>
        <h3>Cadastrar novo cliente</h3>
        <br />

        <Text>Digite o nome do cliente: </Text>
        <input type="text" placeholder="Nome do cliente" />

        <Text>Digite o telefone do cliente: </Text>
        <input type="text" placeholder="Telefone do cliente" />

        <Text>Digite o email do cliente</Text>
        <input type="email" placeholder="Email do cliente" />

        <br />
        <br />
        <br />

        <Text>Vincule o carro ao cliente: </Text>
        <select value={vehicle} onChange={(e) => setVehicle(e.target.value)}>
          <option value="noVehicle">Sem carro vinculado</option>
          <option value="vehicle1">Honda Civic 2025</option>
          <option value="vehicle2">Toyota Corolla 2024</option>
          <option value="vehicle3">Ford Mustang 2023</option>
        </select>

        <Button variant="contained" color="primary" onClick={closeModal}>
          Confirmar
        </Button>

      </ModalBox>
    </>
  );
};



export default Modal