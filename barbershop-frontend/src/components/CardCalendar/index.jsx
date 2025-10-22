import styled from "styled-components"
import { MdHistory, MdOutlineSmsFailed } from 'react-icons/md';
import TasksTable from "../TasksTable";


const ContainerMain = styled.div`
    background-color: #1B1B1B;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    width: 100%;
    height: 100%;
    overflow-y: auto;
`
const ContainerSummary = styled.div`
    display: flex;
    width: 100%;
    flex: 1;
`
const TasksDay = styled.h1`
    font-size: 20px;
    margin: 0;
`


const CardCalendar = () => {
    return (
        <ContainerMain >
            <ContainerSummary>
                <TasksDay>
                    <TasksTable />
                </TasksDay>
            </ContainerSummary>
        </ContainerMain>
    )
}

export default CardCalendar