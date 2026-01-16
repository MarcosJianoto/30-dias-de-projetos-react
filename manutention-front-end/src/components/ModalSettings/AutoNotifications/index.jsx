import { useState } from "react";
import styled from "styled-components";

const ContainerMain = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 500px;
`

const DivTop = styled.div`
  flex: 1;

`
const DivMainBody = styled.div`
  flex: 5;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 7rem 0 7rem;
  border: 1px solid red;
`

const DivBodyRight = styled.div`
  margin-left: 2rem;
  `

const Row = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`

const Checkbox = styled.input.attrs({ type: "checkbox" })`
  width: 16px;
  height: 16px;
`

const SettingRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const SubRow = styled.div`
  margin-left: 24px;
  display: flex;
  align-items: center;
  gap: 8px;
`
const NumberInput = styled.input.attrs({ type: "number" })`
  width: 60px;
`

const AutoNotifications = () => {

  const [enabled, setEnabled] = useState(false);
  const [days, setDays] = useState(0);

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
            <label>
              <input
                type="checkbox"
                checked={enabled}
                onChange={(e) => setEnabled(e.target.checked)}
              />
              Receber notificação antes da manutenção
            </label>
          </SettingRow>

          {enabled && (
            <SubRow>
              Dias de antecedência:
              <NumberInput
                min={1}
                value={days}
                onChange={(e) => setDays(e.target.value)}
              />
            </SubRow>
          )}


        </DivMainBody>
      </ContainerMain >
    </>
  );
};



export default AutoNotifications