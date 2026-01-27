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

  return (
    <>
      <Overlay onClick={closeModal} />
      <ModalBox>
        'teste'
      </ModalBox>
    </>
  );
};



export default Modal