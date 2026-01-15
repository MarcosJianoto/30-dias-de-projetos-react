import { ThemeProvider, createTheme } from '@mui/material/styles';
import styled from "styled-components"

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
    border: 1px solid red;
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
    background-color: #282828;
    padding: 16px;
    border-radius: 4px;
    min-height: 350px;
    width: 220px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Settings = () => {
    return (
        <ThemeProvider theme={darkTheme}>
            <ContainerMain>
                <TitleText>
                    O que você gostaria de configurar?
                </TitleText>
                <RowTop>
                    <Card>Dashboard</Card>
                    <Card>Dashboard</Card>
                </RowTop>
                <RowBottom>
                    <Card>Dashboard</Card>
                    <Card>Dashboard</Card>
                    <Card>Dashboard</Card>
                </RowBottom>
            </ContainerMain >
        </ThemeProvider>
    )
}

export default Settings