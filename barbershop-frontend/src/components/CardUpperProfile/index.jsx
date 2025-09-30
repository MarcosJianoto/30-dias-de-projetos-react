import styled from "styled-components"
import { MdHistory, MdOutlineSmsFailed } from 'react-icons/md';
import FotoProfile from "../../assets/foto.png"


const ContainerMain = styled.div`
    border: 1px solid red;    
    display: flex;
    flex: 1;
    justify-content: end;
    align-items: center;
    border-radius: 40px;
    height: 100%;
    border: 1px solid red;
`
const TitleCards = styled.h3`
    background-color: #1B1B1B;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid blue;
    width: 60px;
    height: 60px;
    margin-right: 10px;
`
const ImgProfile = styled.div`
    display: flex;
    border: 1px solid green;
    justify-content: center;
    align-items: center;
    
    img{
        width: 60px;
        height: 60px;
        border-radius: 100%;
    }
`


const CardCalendar = () => {
    return (
        <ContainerMain >
            <TitleCards>
                <MdHistory size={40} />
            </TitleCards>
            <ImgProfile>
                <img src={FotoProfile} />
            </ImgProfile>
        </ContainerMain>
    )
}

export default CardCalendar