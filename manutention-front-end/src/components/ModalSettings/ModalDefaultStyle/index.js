import styled from "styled-components";

export const ContainerMain = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 500px;
`;

export const DivTop = styled.div`
  flex: 1;
`;
export const DivMainBody = styled.div`
  flex: 5;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 7rem 0 7rem;
`;
export const Row = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`;

export const Checkbox = styled.input.attrs({ type: "checkbox" })`
  width: 16px;
  height: 16px;
`;

export const SettingRow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const SubRow = styled.div`
  margin-left: 24px;
  display: flex;
  align-items: center;
  gap: 8px;
  opacity: ${(props) => (!props.active ? "0.2" : "1")};
  pointer-events: ${(props) => (!props.active ? "none" : "auto")};
`;

export const NumberInput = styled.input.attrs({ type: "number" })`
  width: 60px;
`;
