import { useState } from "react";
import { ContainerMain, Checkbox, DivMainBody, DivTop, NumberInput, Row, SettingRow, SubRow } from "../ModalDefaultStyle";
import Button from "@mui/material/Button";

const AutoNotifications = ({ closeModal }) => {

  const [enabled, setEnabled] = useState(false);
  const [days, setDays] = useState(1);

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

          <SettingRow>
            <label style={{ cursor: 'pointer' }}>
              <input
                type='checkbox'
                checked={enabled}
                onChange={(e) => setEnabled(e.target.checked)}
              />
              Enviar notificação antes da manutenção
            </label>

            <SubRow active={enabled}>
              Dias de antecedência:
              <NumberInput
                min={1}
                value={days}
                onChange={(e) => setDays(e.target.value)}
              />
            </SubRow>
          </SettingRow>

        </DivMainBody>

        <Button onClick={closeModal}>Salvar</Button>


      </ContainerMain >
    </>
  );
};



export default AutoNotifications