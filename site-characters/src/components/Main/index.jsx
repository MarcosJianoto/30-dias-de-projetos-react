import styled from "styled-components"
import Logo from "../../assets/img/logo_marcosjianoto.jpg"

const PrincipalMain = styled.header`
    border: 1px solid white;
    display: flex;
    align-items: center ;
    justify-content: center;
    flex-direction: column;
    max-width: 100%;
    flex: 1;
`
const PrincipalText = styled.h1`
    display: flex;
    font-size: 100px;
    margin: 0 auto;
`

const SecundaryText = styled.h2`
    display: flex;
    font-size: 90px;
    margin: 0 auto;

`
const ThirdText = styled.h6`
    display: flex;
    font-size: 20px;
    margin: 0 auto;
`

const Main = () => {
    return (
        <>
            <PrincipalMain>

                <ThirdText>
                    NOW LIVE
                </ThirdText>

                <SecundaryText>
                    INTRODUCING
                </SecundaryText>

                <PrincipalText>

                    NEW CHARACTER
                </PrincipalText>


            </PrincipalMain>



        </>
    )
}

export default Main