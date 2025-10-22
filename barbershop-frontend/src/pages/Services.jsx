import styled from "styled-components"
import ServicesTable from "../components/ServicesTable"
import MenuServices from "../components/ServicesTable/MenuServices"

const ContainerMain = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    height: 100%;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    overflow-y: hidden;
    `

const Services = () => {
    return (
        <ContainerMain>
            <MenuServices />
            <ServicesTable />
        </ContainerMain>
    )
}

export default Services