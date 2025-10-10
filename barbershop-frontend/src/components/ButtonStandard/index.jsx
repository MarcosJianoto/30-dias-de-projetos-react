import styled from "styled-components"
import { MdHistory, MdOutlineSmsFailed } from 'react-icons/md';


const ContainerButton = styled.button`
    background-color: #1B1B1B;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    width: 250px;
    height: 40px;
    padding: 15px;
    color: white;

    &:hover{
        cursor: pointer;
    }
`


const ButtonStandard = ({ text, onClick }) => {
    return (
        <ContainerButton onClick={onClick}>
            {text}
        </ContainerButton>
    )
}

export default ButtonStandard