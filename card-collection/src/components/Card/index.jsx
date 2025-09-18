import styled from "styled-components"

const ContainerCard = styled.div`
    width: calc(60% - 20%);
    max-width: 400px;
    height: 80px;
    min-height: 80px;
    border: 1px solid white;
    border-radius: 15px;
    align-items: center;
    display: flex;
`

const ContainerIntern = styled.div`
    
    width: 50px;
    height: 50px;
    border: 1px solid white;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;   
    position: relative;
    left: 10px;    
`

const ContainerText = styled.div`

    width: 200px;
    height: 50px;
    border: 1px solid white;    
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    left: 15px;
    color: white;
    padding: 5px;
`

const Card = ({ image, title, text }) => {
    return (
        <ContainerCard>
            <ContainerIntern>
                {image}
            </ContainerIntern>
            <ContainerText>
                {title}
                {text}
            </ContainerText>
        </ContainerCard>
    )
}

export default Card