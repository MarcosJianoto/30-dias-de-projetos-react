import styled from "styled-components"
import { MdAdd } from "react-icons/md";

const CardElementsContainer = styled.div`
    display: flex;
    border-radius: 25px;
    height: 100px;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    max-width: 100%;
    overflow: hidden;
    background-color: #ffffff;
    
    img{
        width: 100px;
        height: 100px;
    }
`

const ContainerText = styled.div`

    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: left;
    padding: 10px;

`

const TitleCardWhatever = styled.p`

    font-size: 15px;
    padding: 0;
    margin: 0;
    margin-bottom: 5px;
    color: black;

`

const TextCardWhatever = styled.h3`

    font-size: 10px;
    padding: 0;
    margin: 0 auto;
    color: black;
`




const CardElements = ({ img, title, text }) => {
    return (

        <CardElementsContainer>
            <img src={img} alt="" />

            <ContainerText>
                <TitleCardWhatever>
                    {title}
                </TitleCardWhatever>
                <TextCardWhatever>
                    {text}
                </TextCardWhatever>
            </ContainerText>



        </CardElementsContainer>

    )
}

export default CardElements