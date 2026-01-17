import styled from "styled-components";
import AutoNotifications from "./ModalAutoNotifications";
import TimeDefaultManutention from "./TimeDefaultManutention";

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


const Modal = ({ type, closeModal }) => {

  const renderContent = () => {
    switch (type) {
      case 'auto-notifications':
        return <AutoNotifications />

      case 'chip':
        return <h2>Configurar chip do veículo</h2>;

      case 'frequency':
        return <TimeDefaultManutention />

      default:
        return null;
    }
  };

  return (
    <>
      <Overlay onClick={closeModal} />
      <ModalBox>
        {renderContent()}
      </ModalBox>
    </>
  );
};



export default Modal