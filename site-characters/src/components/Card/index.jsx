import styled from "styled-components"

const ContainerCard = styled.div`
    width: calc(60% - 20%);
    max-width: 400px;
    height: 80px;
    min-height: 80px;
    border-radius: 15px;
    align-items: center;
    display: flex;
    background-color: #242323;

`

const ContainerIcon = styled.div`
    
    width: 50px;
    height: 50px;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;   
    position: relative;
    left: 10px;
    background-color: ${props => props.color} ;
`

const ContainerText = styled.div`
    width: 200px;
    height: 50px;
    font-family: Arial, Helvetica, sans-serif;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    gap: 5px;
    position: relative;
    left: 15px;
    color: ${props => props.color};
    padding: 5px;
`

const ColorTitle = styled.h1`
    font-size: 15px;
    font-family: Arial, Helvetica, sans-serif;
    margin: 0;
`
const ColorText = styled.h2`
    font-size:12px;
    font-family: Arial, Helvetica, sans-serif;
    color: white;
    margin: 0;
`

const Card = ({ image, title, text, color }) => {
    return (
        <ContainerCard>
            <ContainerIcon color={color}>
                {image}
            </ContainerIcon>
            <ContainerText color={color}>
                <ColorTitle>{title}</ColorTitle>
                <ColorText>{text}</ColorText>
            </ContainerText>
        </ContainerCard>
    )
}

export default Card