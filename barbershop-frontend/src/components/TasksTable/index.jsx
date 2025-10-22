import { ThemeProvider, createTheme } from '@mui/material/styles';
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
    Stack,
    CssBaseline
} from "@mui/material";
import styled from 'styled-components';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

const ContainerMain = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    `
const TasksTable = () => {

    const agendaData = [
        {
            id: 1,
            serviceName: "Corte Masculino",
            barberName: "João",
            clientName: "Carlos",
            time: "09:00",
            status: "Confirmado"
        },
        {
            id: 2,
            serviceName: "Corte + Barba",
            barberName: "Pedro",
            clientName: "Rafael",
            time: "10:30",
            status: "Agendado"
        },
        {
            id: 3,
            serviceName: "Barba Completa",
            barberName: "João",
            clientName: "Bruno",
            time: "11:00",
            status: "Finalizado"
        },
        {
            id: 4,
            serviceName: "Sobrancelha",
            barberName: "Pedro",
            clientName: "Gustavo",
            time: "13:00",
            status: "Cancelado"
        },
    ];

    const getStatusColor = (status) => {
        switch (status) {
            case "Confirmado":
                return "success";
            case "Cancelado":
                return "error";
            case "Agendado":
                return "info";
            case "Finalizado":
                return "secondary";
            default:
                return "warning";
        }
    }


    return (
        <ContainerMain theme={darkTheme}>
            <TableContainer component={Paper} sx={{ width: '100%', maxHeight: '100%' }}>
                <Table stickyHeader sx={{ minWidth: 650 }}>
                    <TableHead>
                        <TableRow sx={{ backgroundColor: '#c4c4c4' }}>
                            <TableCell sx={{ fontWeight: 'bold' }}>Service Name </TableCell>
                            <TableCell sx={{ fontWeight: 'bold' }}>Barber Name</TableCell>
                            <TableCell sx={{ fontWeight: 'bold' }}>Client Name</TableCell>
                            <TableCell sx={{ fontWeight: 'bold' }}>Time: </TableCell>
                            <TableCell sx={{ fontWeight: 'bold' }}>Status: </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {agendaData.map((item) => (
                            <TableRow key={item.id}>
                                <TableCell>{item.serviceName}</TableCell>
                                <TableCell>{item.barberName}</TableCell>
                                <TableCell>{item.clientName}</TableCell>
                                <TableCell>{item.time}</TableCell>
                                <TableCell><Chip label={item.status} color={getStatusColor(item.status)} /></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </ContainerMain >
    );
};

export default TasksTable;
