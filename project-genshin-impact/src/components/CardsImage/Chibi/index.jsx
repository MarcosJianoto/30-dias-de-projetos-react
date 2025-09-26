import styled from "styled-components"
import { MdAdd } from "react-icons/md";

const CardChibi = styled.section`
    display: flex;
    border: 2px solid #b9b9b9;
    border-radius: 25px;
    height: 130px;
    width: 130px;
    justify-content: space-between;
    align-items: center;
    max-width: 100%;
    overflow: hidden;
    background-color: #3490AA;
    
    img{

        width: 100%;
        height: 100%;
    }
`
const ContainerChibi = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 160px;
    width: 160px;
    border: 1px solid green;
    position: relative;
`

const Circle = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    border-radius: 100%;
    background-color: white;
    width: 40px;
    height: 40px;
    box-shadow: 5px 4px 10px rgba(0, 0, 0, 0.3);
    position: absolute;
    top: 0;
    left: 0;

`

const Chibi = ({ img }) => {
    return (

        <ContainerChibi>
            <Circle>
                <MdAdd size={40} color="black" />
            </Circle>
            <CardChibi>
                <img src={img} />
            </CardChibi>
        </ContainerChibi>


    )
}

export default Chibi