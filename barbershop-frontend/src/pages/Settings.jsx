import styled from "styled-components"


const ContainerMain = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    height: 100%;
    width: 100%;
    justify-content: start;
    align-items: start;
    `

const Notifications = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    height: 50%;
    width: 100%;
    align-items: start;
`
const Barbers = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    height: 50%;
    width: 100%;
    align-items: start;
`
const Scheduling = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    height: 50%;
    width: 100%;
    align-items: start;
`
const TitleSettings = styled.h1`
    background-color: #1B1B1B;
    font-size: 25px;
    width: 100%;
    padding: 0;
    margin: 0;
`


const Settings = () => {
    return (
        <ContainerMain>
            <Barbers>
                <TitleSettings>
                    Barbers
                </TitleSettings>
                <br />
                Nome
                <br />
                Horarios Disponíveis
            </Barbers>

            <Scheduling>
                <TitleSettings>
                    Agenda da barbearia
                </TitleSettings>
                <br />
                Intervalo padrão entre cortes (ex: 10 min).
                <br />
                Horário de funcionamento da barbearia.
                <br />
                Dias de folga / feriados.
            </Scheduling>

            <Notifications>
                <TitleSettings>
                    Notifications
                </TitleSettings>
                <br />
                Lembretes Automaticos
                <br />
                <br />
                Alerta de Cancelamento
                <br />
                <br />
                Envio via WhatsApp (alertas, por exemplo / Arquivo Excel)
                <br />
                <br />
                Lembretes Automaticos
                <br />
                <br />
            </Notifications>

        </ContainerMain>
    )
}

export default Settings