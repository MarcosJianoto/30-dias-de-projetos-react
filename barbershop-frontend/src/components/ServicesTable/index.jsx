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


const getStatusColor = (status) => {
    switch (status) {
        case "Ativo":
            return "success";
        case "Inativo":
            return "error";
        default:
            return "warning"
    }
}

const ContainerMain = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    `

const ProductsTable = () => {

    const servicesData = [
        { id: 1, serviceName: "Corte Masculino", price: 40.00, duration: "30min", category: "Cabelo", status: "Ativo", date: "10/10/2025" },
        { id: 2, serviceName: "Corte + Barba", price: 60.00, duration: "45min", category: "Cabelo e Barba", status: "Ativo", date: "09/10/2025" },
        { id: 3, serviceName: "Barba Completa", price: 35.00, duration: "25min", category: "Barba", status: "Ativo", date: "08/10/2025" },
        { id: 4, serviceName: "Sobrancelha", price: 20.00, duration: "15min", category: "Estética", status: "Ativo", date: "07/10/2025" },
        { id: 5, serviceName: "Corte Infantil", price: 30.00, duration: "30min", category: "Cabelo", status: "Ativo", date: "06/10/2025" },
        { id: 6, serviceName: "Pigmentação Capilar", price: 80.00, duration: "50min", category: "Cabelo", status: "Inativo", date: "01/10/2025" },
    ];


    return (
        <ContainerMain theme={darkTheme}>
            <TableContainer component={Paper} sx={{ maxHeight: '80%' }}>
                <Table stickyHeader>
                    <TableHead>
                        <TableRow sx={{ backgroundColor: '#c4c4c4' }}>
                            <TableCell sx={{ fontWeight: 'bold' }}>Id</TableCell>
                            <TableCell sx={{ fontWeight: 'bold' }}>Service Name</TableCell>
                            <TableCell sx={{ fontWeight: 'bold' }}>Price</TableCell>
                            <TableCell sx={{ fontWeight: 'bold' }}>Categoria</TableCell>
                            <TableCell sx={{ fontWeight: 'bold' }}>Duration</TableCell>
                            <TableCell sx={{ fontWeight: 'bold' }}>Data</TableCell>
                            <TableCell sx={{ fontWeight: 'bold' }}>Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {servicesData.map((item) => (
                            <TableRow key={item.id}>
                                <TableCell sx={{ width: 20 }}>{item.id}</TableCell>
                                <TableCell>{item.serviceName}</TableCell>
                                <TableCell>{item.price}</TableCell>
                                <TableCell>{item.duration}</TableCell>
                                <TableCell>{item.category}</TableCell>
                                <TableCell>{item.date}</TableCell>
                                <TableCell><Chip label={item.status} color={getStatusColor(item.status)} /></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </ContainerMain >
    );
};

export default ProductsTable;
