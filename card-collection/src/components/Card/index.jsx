import styled from "styled-components"

const ContainerCard = styled.div`
    width: 400px;
    height: 80px;
    border: 1px solid white;
    border-radius: 15px;
    align-items: center;
    justify-content: center;
    display: flex;
`

const ContainerIntern = styled.div`
    width: 60px;
    height: 60px;
    border: 1px solid white;
    border-radius: 15px;
    text-align: center;
    justify-content: center;    
    
`

const Card = () => {
    return (
        <ContainerCard>
            <ContainerIntern />
        </ContainerCard>
    )
}

export default Card