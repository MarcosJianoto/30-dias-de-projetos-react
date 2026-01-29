import styled from "styled-components"
import Button from "@mui/material/Button";
import { useState } from "react";
import ModalCreateVehicle from "../ModalCreateVehicle";
import ModalCreateCustomer from "../ModalCreateCustomer";

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
    const [open, setOpen] = useState(false);
    const [openCreateCustomer, setOpenCreateCustomer] = useState(false);

    const openModal = () => {
        setOpen(true);
    }

    const closeModal = () => {
        setOpen(false);
    }

    const openCreateCustomerModal = () => {
        setOpenCreateCustomer(true);
    }

    const closeCreateCustomerModal = () => {
        setOpenCreateCustomer(false);
    }

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
                <Button onClick={openModal}>Cadastrar Veículo</Button>
                <Button onClick={openCreateCustomerModal}>Cadastrar cliente</Button>
                <ExportDate>
                    <Button>Exportar dados</Button>
                </ExportDate>
            </MenuButtons>

            {open && (
                <ModalCreateVehicle
                    closeModal={closeModal}
                />
            )}
            {openCreateCustomer && (
                <ModalCreateCustomer
                    closeModal={closeCreateCustomerModal}
                />
            )}
        </MenuTopContainer>
    )
}

export default MenuTop