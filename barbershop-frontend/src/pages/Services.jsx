import styled from "styled-components"
import ButtonStandard from "../components/ButtonStandard"

const ContainerMain = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
    border: 1px solid red;
    padding: 15px;
    gap: 20px;
    `

const ContainerCreateService = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    height: 10%;
    width: 90%;
    justify-content: space-between;
    align-items: start;
    border: 1px solid red;
    padding: 15px;
`
const ContainerIntern = styled.div`
    display: flex;
    border-radius: 5px;
    height: 100%;
    width: 70%;
    justify-content: space-between;
    align-items: center;
    border: 1px solid red;
    padding: 15px;
`


const Settings = () => {
    return (
        <ContainerMain>
            <ContainerCreateService>
                <ButtonStandard text={"Cadastrar novo corte de cabelo"} />

            </ContainerCreateService>
            <ContainerIntern>
                teste
            </ContainerIntern>
        </ContainerMain>
    )
}

export default Settings