import Button from "@mui/material/Button";
import { ContainerMain, Checkbox, DivMainBody, DivTop, Row } from "../ModalDefaultStyle";

const FrequencyManutentionDefault = ({ closeModal }) => {

  return (
    <>
      <ContainerMain>
        <DivTop>
          Frequência padrão de manutenção
        </DivTop>
        <DivMainBody>
          <Row>
            <Checkbox />
            Notificar validação por quilometragem?
          </Row>
          <Row>
            <Checkbox />
            Notificar validação por tempo?
          </Row>
        </DivMainBody>

        <Button onClick={closeModal}>Salvar</Button>

      </ContainerMain >
    </>
  );
};



export default FrequencyManutentionDefault