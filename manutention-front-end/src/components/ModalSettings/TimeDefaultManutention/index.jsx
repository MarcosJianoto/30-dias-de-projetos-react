import { ContainerMain, Checkbox, DivMainBody, DivTop, NumberInput, Row, SettingRow, SubRow } from "../ModalDefaultStyle";

const TimeDefaultManutention = () => {

  return (
    <>
      <ContainerMain>
        <DivTop>
          Auto Notifications
        </DivTop>
        <DivMainBody>
          <Row>
            <Checkbox />
            Notificações automáticas
          </Row>
          <Row>
            <Checkbox />
            Enviar para todos os veículos
          </Row>

        </DivMainBody>

        <button>
          teste
        </button>

      </ContainerMain >
    </>
  );
};



export default TimeDefaultManutention