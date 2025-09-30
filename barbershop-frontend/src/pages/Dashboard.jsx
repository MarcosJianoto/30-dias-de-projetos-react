import styled from "styled-components"
import { MdHistory, MdOutlineSmsFailed } from 'react-icons/md';
import MinorCard from '../components/MinorCard'

const ContainerMain = styled.div`
    display: flex;
    border-radius: 40px;
    height: 95vh;
    width: 65vw;
    border: 1px solid red;
    justify-content: space-between;
    gap: 20px;
    `

const Dashboard = () => {
    return (
        <ContainerMain>
            <MinorCard />
        </ContainerMain>
    )
}

export default Dashboard