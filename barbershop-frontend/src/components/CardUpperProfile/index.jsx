import styled from "styled-components"
import { MdNotifications, MdNotificationsOff, MdNotificationImportant } from 'react-icons/md';
import FotoProfile from "../../assets/foto.png"


const ContainerMain = styled.div`
    border: 1px solid red;    
    display: flex;
    flex: 1;
    justify-content: end;
    align-items: center;
    border-radius: 20px;
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
    width: 45px;
    height: 45px;
    margin-right: 10px;
`
const ImgProfile = styled.div`
    display: flex;
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
                <MdNotifications size={38} />
            </TitleCards>
            <ImgProfile>
                <img src={FotoProfile} />
            </ImgProfile>
        </ContainerMain>
    )
}

export default CardCalendar