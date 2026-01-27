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
  min-width: 300px;
  z-index: 1001;
  color: white;
`;


const Modal = ({ closeModal }) => {

  const [vehicle, setVehicle] = useState("");

  return (
    <>
      <Overlay onClick={closeModal} />
      <ModalBox>
        <h3>Criar nova manutenção</h3>
        <br />
        <p>Selecione o veículo do cliente: </p>
        <select value={vehicle} onChange={(e) => setVehicle(e.target.value)}>
          <option value="vehicle1">Veículo 1 - Placa ABC-1234</option>
          <option value="vehicle2">Veículo 2 - Placa DEF-5678</option>
          <option value="vehicle3">Veículo 3 - Placa GHI-9012</option>
          <option value="newVehicle">Novo veículo</option>
        </select>

        <br /><br />
        <Button variant="contained" color="primary" onClick={closeModal}>
          Confirmar
        </Button>

        {vehicle === "newVehicle" && (
          'teste'
        )}

      </ModalBox>
    </>
  );
};



export default Modal