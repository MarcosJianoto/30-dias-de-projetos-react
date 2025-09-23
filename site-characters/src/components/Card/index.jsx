import styled from "styled-components"

const MainContainer = styled.h1`
    font-size: 30px;
    text-align: center;
    position: relative;
    height: 90vh;
`


const CardPhoto = styled.div`

    display: flex;
    height: 35vh;
    width: 20vw;
    border: 1px solid white;
    border-radius: 20px;
    margin: 0 auto;
    padding: 0;
    background: radial-gradient( #7cb7b9, #4d8183) ;


`
const LyrycsPhotoContainer = styled.div`

    height: 7vh;
    width: 20vw;
    border: 1px solid white;
    border-radius:0px 0px 20px 20px;
    position: absolute;
    bottom: 0px;
    background: radial-gradient( #7cb7b9, #4d7e80) ;


`


const Card = ({ img, name, title }) => {
    return (
        <MainContainer>

            Character to play

            <CardPhoto>
                <LyrycsPhotoContainer>


                </LyrycsPhotoContainer>

            </CardPhoto>

        </MainContainer>
    )
}

export default Card