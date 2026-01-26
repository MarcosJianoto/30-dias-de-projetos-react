import styled from "styled-components"
import Button from "@mui/material/Button";

const MenuTopContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 80px;
`

const MenuStyled = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #0D0D0D;
    color: #fff;
`

const Header = styled.div`
    font-size: 25px;
`

const MenuButtons = styled.div`
    display: flex;
    gap: 10px;
`

const Subtitle = styled.h4`
    margin: 4px 0 0 0;
    font-weight: 400;
    font-size: 15px;
    color: #ccc;
`

const ExportDate = styled.div`
    margin-left: 70px;
`

const MenuTop = () => {
    return (
        <MenuTopContainer>
            <MenuStyled>
                <Header>
                    Bem vindo, Marcos
                </Header>
                <Subtitle>
                    Verifique as notificações para o seu cliente.
                </Subtitle>
            </MenuStyled>
            <MenuButtons>
                <Button>Cadastrar Veículo</Button>
                <Button>Cadastrar cliente</Button>
                <ExportDate>
                    <Button>Exportar dados</Button>
                </ExportDate>
            </MenuButtons>
        </MenuTopContainer>
    )
}

export default MenuTop