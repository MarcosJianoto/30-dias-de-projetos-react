import styled from "styled-components"


const CardMain = styled.section`
    display: flex;
    border-radius: 25px;
    height: 200px;
    width: 130px;
    justify-content: space-between;
    align-items: center;
    max-width: 100%;
    overflow: hidden;
    
    img{

        width: 100%;
        height: 100%;

    }
    `


const Card = ({ img }) => {
    return (

        <CardMain>
            <img src={img} />
        </CardMain>

    )
}

export default Card