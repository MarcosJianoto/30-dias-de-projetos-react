import styled from "styled-components"
import {
    Box,
    Typography,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Chip,
    IconButton,
    Button,
    Stack
} from "@mui/material";

import { Visibility, Add } from "@mui/icons-material";

const ContainerMain = styled.div`
    display: flex;
    border-radius: 40px;
    height: 100%;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    border: 1px solid red;
    padding: 15px;
    `

const ContainerMenuHistory = styled.h1`

`

const historyData = [
    { id: 1, service: "Corte de Cabelo", barber: "João", value: 35.00, date: "10/10/2025", status: "Concluído" },
    { id: 2, service: "Barba", barber: "Pedro", value: 25.00, date: "08/10/2025", status: "Cancelado" },
    { id: 3, service: "Sobrancelha", barber: "Lucas", value: 15.00, date: "05/10/2025", status: "Concluído" },
];

const getStatusColor = (status) => {
    switch (status) {
        case "Concluído":
            return "success";
        case "Cancelado":
            return "error";
        default:
            return "warning"
    }
}

const History = () => {
    return (
        <ContainerMain>

            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow sx={{ backgroundColor: '#c4c4c4' }}>
                            <TableCell sx={{ fontWeight: 'bold' }}>Id</TableCell>
                            <TableCell sx={{ fontWeight: 'bold' }}>Serviço </TableCell>
                            <TableCell sx={{ fontWeight: 'bold' }}>Barbeiro</TableCell>
                            <TableCell sx={{ fontWeight: 'bold' }}>Valor</TableCell>
                            <TableCell sx={{ fontWeight: 'bold' }}>Data</TableCell>
                            <TableCell sx={{ fontWeight: 'bold' }}>Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {historyData.map((item) => (
                            <TableRow key={item.id}>
                                <TableCell>{item.id}</TableCell>
                                <TableCell>{item.service} </TableCell>
                                <TableCell>{item.barber}</TableCell>
                                <TableCell>{item.value}</TableCell>
                                <TableCell>{item.date}</TableCell>
                                <TableCell><Chip label={item.status} color={getStatusColor(item.status)} /></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>


        </ContainerMain >
    )
}

export default History