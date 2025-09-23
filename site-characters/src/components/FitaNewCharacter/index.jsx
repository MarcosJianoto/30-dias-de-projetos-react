import styled from "styled-components"
import Logo from "../../assets/img/logo_marcosjianoto.jpg"

const DivPrincipal = styled.div`

    display: flex;
    gap: 40px;
    font-size: 25px;
    width: max-content;
    flex-wrap: nowrap;
    white-space: nowrap;
    margin: 0 auto;
    padding: 0;
    justify-content: center;

`


const FitaNewCharacter = () => {
    return (

        <DivPrincipal>
            <h6>UNLOCKED NEW CHARACTER</h6>
        </DivPrincipal>

    )
}

export default FitaNewCharacter