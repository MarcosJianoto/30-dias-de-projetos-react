import styled from "styled-components"

const ContainerMain = styled.div`
    display: flex;
    border-radius: 5px;
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
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
            <ContainerIntern>
                teste
            </ContainerIntern>
        </ContainerMain>
    )
}

export default Settings