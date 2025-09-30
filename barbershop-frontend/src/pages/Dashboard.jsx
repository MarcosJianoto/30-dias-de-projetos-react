import styled from "styled-components"
import { MdHistory, MdOutlineSmsFailed } from 'react-icons/md';
import MinorCard from '../components/MinorCard'
import BigCard from "../components/BigCard";

const ContainerMain = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 40px;
    height: 100%;
    width: 70%;
    border: 1px solid red;
    margin: 0 auto;
    padding:0 ;
    gap: 20px;
    `
const ContainerMenuAndNotifications = styled.div`
    display: flex;
    border-radius: 40px 40px 0 0;
    height: 10vh;
    border: 1px solid red;
    justify-content: space-between;
    align-items: center;
`
const ContainerMinorCard = styled.div`
    display: flex;
    height: 20vh;
    border: 1px solid red;
    justify-content: space-between;
    align-items: center;
`
const Calendar = styled.div`
    display: flex;
    flex: 1;
    border: 1px solid red;
    justify-content: space-between;
    align-items: center;
`
const ContainerBigCard = styled.div`
    display: flex;
    border-radius: 0 0 40px 40px;
    flex: 1;
    border: 1px solid red;
    justify-content: space-between;
    align-items: center;
`

const Dashboard = () => {
    return (
        <ContainerMain>
            <ContainerMenuAndNotifications>
                testando 123
            </ContainerMenuAndNotifications>
            <ContainerMinorCard>
                <MinorCard />
                <MinorCard />
                <MinorCard />
                <MinorCard />
            </ContainerMinorCard>
            <Calendar>

            </Calendar>
            <ContainerBigCard>
                <BigCard />
            </ContainerBigCard>

        </ContainerMain>
    )
}

export default Dashboard