import { NavLink } from "react-router-dom";
import styled from "styled-components"
import Dashboard from "../Dashboard";
import ButtonDefault from "../Button";

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
    border-right: #474747 solid 1px ;
    border: 1px solid red;
`

const Header = styled.div`
    font-size: 25px;
`

const MenuButtons = styled.div`
    display: flex;
    border: 1px solid red;
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
                <ButtonDefault text={'Cadastrar veículo'} />
                <ButtonDefault text={'Cadastrar cliente'} />
                <ExportDate>
                    <ButtonDefault text={'Exportar dados '} />
                </ExportDate>
            </MenuButtons>
        </MenuTopContainer>
    )
}

export default MenuTop