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
  margin-bottom: 0;
`;


const Modal = ({ closeModal }) => {

  const [customer, setCustomer] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");

  return (
    <>
      <Overlay onClick={closeModal} />
      <ModalBox>
        <h3>Cadastrar novo veículo</h3>
        <br />
        <Text>Selecione a marca do veículo: </Text>
        <select value={brand} onChange={(e) => setBrand(e.target.value)}>
          <option value="brand1">Toyota</option>
          <option value="brand2">Honda</option>
          <option value="brand3">Ford</option>
        </select>
        <Text>Selecione o modelo do veículo: </Text>
        <select value={model} onChange={(e) => setModel(e.target.value)}>
          <option value="model1">Corolla</option>
          <option value="model2">Civic</option>
          <option value="model3">Mustang</option>
        </select>
        <Text>Digite a placa do veículo sem traço ou espaços: </Text>
        <input type="text" placeholder="ABC1B34" />

        <br />
        <br />
        <br />

        <Text>Vincule o cliente ao veículo: </Text>
        <select value={customer} onChange={(e) => setCustomer(e.target.value)}>
          <option value="noClient">Sem cliente vinculado</option>
          <option value="customer1">Marcos Jianoto</option>
          <option value="customer2">Ana Souza</option>
          <option value="customer3">Carlos Lima</option>
        </select>

        <Button variant="contained" color="primary" onClick={closeModal}>
          Confirmar
        </Button>

      </ModalBox>
    </>
  );
};



export default Modal