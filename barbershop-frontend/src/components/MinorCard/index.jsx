import styled from "styled-components"
import { MdHistory, MdOutlineSmsFailed } from 'react-icons/md';


const ContainerMain = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 40px;
    height: 20vh;
    width: 20vh;
    border: 1px solid white;
    padding: 15px;
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


const MinorCard = () => {
    return (
        <ContainerMain >
            <TitleCards>
                <MdOutlineSmsFailed size={30} color="#ED5F38" />Unread Messages
            </TitleCards>
            <NumbersSummary>
                10
            </NumbersSummary>
        </ContainerMain>
    )
}

export default MinorCard