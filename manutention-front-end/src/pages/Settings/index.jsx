import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useState } from 'react';
import styled from "styled-components"
import ModalSettings from '../../components/ModalSettings'

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

const ContainerMain = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100%;
    text-align: center;
`
const TitleText = styled.h3`
    margin: 4rem 0 4rem 0;
    color: white;
    text-align: center;
`
const RowTop = styled.div`
    display: flex;
    justify-content: center; /* centraliza o conjunto */
    gap: 60px;
    margin-bottom: 60px;
`
const RowBottom = styled.div`
    display: flex;
    justify-content: center;
    gap: 60px;
`
const Card = styled.div`
    display: flex;
    color: white;
    background-color: #282828;
    padding: 16px;
    border-radius: 4px;
    min-height: 250px;
    width: 150px;
    display: flex;
    justify-content: center;
    align-items: end;
    border: 1px solid #474747;
    transition: 0.3s;

    &:hover{
        transform: scale(1.03);
        cursor: pointer;
    }
`
const Settings = () => {
    const [open, setOpen] = useState(false);
    const [modalType, setModalType] = useState(null)

    const openModal = (type) => {
        setModalType(type);
        setOpen(true);
    };

    const closeModal = () => {
        setOpen(false);
        setModalType(null);
    };


    return (
        <ThemeProvider theme={darkTheme}>
            <ContainerMain>
                <TitleText>
                    O que você gostaria de configurar?
                </TitleText>

                <RowTop>
                    <Card onClick={() => openModal('auto-notifications')}>
                        Notificações Automáticas
                    </Card>
                    <Card onClick={() => openModal('manual-notification')}>
                        Notificação Manual
                    </Card>
                </RowTop>

                <RowBottom>
                    <Card onClick={() => openModal('channel')}>
                        Canal de notificação
                    </Card>
                    <Card onClick={() => openModal('chip')}>
                        Chip do veículo
                    </Card>
                    <Card onClick={() => openModal('frequency')}>
                        Frequência padrão de manutenção
                    </Card>
                </RowBottom>

                {open && (
                    <ModalSettings
                        type={modalType}
                        closeModal={closeModal}
                    />
                )}
            </ContainerMain>
        </ThemeProvider>

    )
}

export default Settings