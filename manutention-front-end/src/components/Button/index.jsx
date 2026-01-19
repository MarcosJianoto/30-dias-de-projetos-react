import styled from "styled-components"

const ButtonTop = styled.button`
  padding: 10px 16px;
  background-color: #282828;
  color: #fff;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;

  display: flex;
  align-items: center;

  width: fit-content;

  transition: background-color 0.2s ease, transform 0.1s ease;

  &:hover {
    background-color: #1e1e1e;
  }

  &:active {
    transform: scale(0.97);
  }

  &:disabled {
    background-color: #9fbce0;
    cursor: not-allowed;
  }
`;

const ButtonDefault = ({ text }) => {
  return (
    <ButtonTop>
      {text}
    </ButtonTop>
  )
}

export default ButtonDefault