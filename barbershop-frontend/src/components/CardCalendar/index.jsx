import styled from "styled-components"
import { MdHistory, MdOutlineSmsFailed } from 'react-icons/md';


const ContainerMain = styled.div`
    background-color: #1B1B1B;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    width: 100%;
    min-height: 200px;
`
const TitleCards = styled.h3`
    display: flex;
    align-items: center;
    font-size: 20px;
`
const NumbersSummary = styled.h1`
    display: flex; 
    justify-content: center;
    align-items: center;
    font-size: 40px;
`


const CardCalendar = () => {
    return (
        <ContainerMain >
            <TitleCards>
                Agenda de atendimentos do dia
            </TitleCards>
            <NumbersSummary>
            </NumbersSummary>
        </ContainerMain>
    )
}

export default CardCalendar