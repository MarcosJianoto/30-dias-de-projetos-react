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
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

const SubRow = styled.div`
  margin-left: 24px;
  display: flex;
  align-items: center;
  gap: 8px;
  opacity: ${(props) => !props.active ? "0.2" : "1"} ;
  pointer-events: ${(props) => !props.active ? "none" : "auto"} ;
`
const NumberInput = styled.input.attrs({ type: "number" })`
  width: 60px;
`

const TimeDefaultManutention = () => {

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

        <button>
          teste
        </button>

      </ContainerMain >
    </>
  );
};



export default TimeDefaultManutention