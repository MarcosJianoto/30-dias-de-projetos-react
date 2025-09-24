import styled from "styled-components"
import Logo from "../../assets/img/logo_marcosjianoto.jpg"

const PrincipalMain = styled.header`
    min-height: 90vh;
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

const Paragraph = styled.p`

    font-size: 20px;
    text-align: center;
    width: 65%;
    margin: 0 auto;
`

const BlockButtonsMain = styled.div`
    display: flex;
    font-size: 20px;
    margin: 0 auto;
    gap: 35px;
    padding: 20px 0px 50px 0px;
`

const PTButton = styled.button`
    display: flex;
    flex-direction: row;
    margin-top: 10px;
    border: 1.5px solid white ;
    border-radius: 30px;
    padding: 5px 20px;
    background-color: #94bbd3 ;
    color: white;
    transition: all 0.5s ease-in-out;

    &:hover{
        color: #ffffff;
        background-color: #203c4d;
        cursor: pointer;
        transform: scale(1.20);
    }
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
                <Paragraph>
                    Shrouded in mystery, a shadow emerges from the past. With eyes that hold untold stories and a presence that commands attention, they bring a power unlike any seen before.
                </Paragraph>
                <BlockButtonsMain>
                    <PTButton>
                        Description
                    </PTButton>
                    <PTButton>
                        Next for detail
                    </PTButton>
                </BlockButtonsMain>

            </PrincipalMain>



        </>
    )
}

export default Main