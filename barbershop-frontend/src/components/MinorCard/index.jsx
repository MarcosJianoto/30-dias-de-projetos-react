import styled from "styled-components"
import { MdHistory, MdOutlineSmsFailed } from 'react-icons/md';


const ContainerMain = styled.div`
    background-color: #1B1B1B;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    height: 100%;
    width: 20vh;
    padding: 15px;
`

const ContainerTitle = styled.div`
   display: flex;
   width: 100%;
   height: 20%;
   justify-content: center;
   align-items: center;
   `

const ContainerSummary = styled.div`
   display: flex;
   width: 100%;
   height: 80%;
   justify-content: center;
   align-items: center;
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


const MinorCard = ({ title }) => {
    return (
        <ContainerMain >
            <ContainerTitle>
                <TitleCards>
                    {title}
                </TitleCards>
            </ContainerTitle>
            <ContainerSummary>
                <NumbersSummary>
                    100
                </NumbersSummary>
            </ContainerSummary>
        </ContainerMain>
    )
}

export default MinorCard