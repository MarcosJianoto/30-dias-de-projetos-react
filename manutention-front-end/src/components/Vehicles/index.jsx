import { ThemeProvider, createTheme } from '@mui/material/styles';
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
    Stack,
    CssBaseline
} from "@mui/material";

const Body = styled.div`
    width: 100%;
    height: 100%;
    background-color: #282828;
    color: #fff;
`

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

const getStatusColor = (status) => {
    switch (status) {
        case "Ativo":
            return "success";
        case "Sem estoque":
            return "error";
        default:
            return "warning"
    }
}

const productsData = [
    { id: 1, productName: "Shampoo Antiqueda", value: 35.00, estoque: 12, date: "10/10/2025", status: "Ativo" },
    { id: 2, productName: "Pomada Modeladora", value: 25.00, estoque: 0, date: "05/10/2025", status: "Sem estoque" },
    { id: 3, productName: "Óleo para Barba", value: 45.00, estoque: 5, date: "07/10/2025", status: "Ativo" },
    { id: 4, productName: "Gel Fixador", value: 20.00, estoque: 2, date: "02/10/2025", status: "Ativo" },
    { id: 5, productName: "Tesoura Profissional", value: 120.00, estoque: 0, date: "01/10/2025", status: "Sem estoque" }
];

const ContainerMain = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    justify-content: space-between;
    align-items: center;
`

const Vehicles = () => {
    return (
        <ContainerMain theme={darkTheme}>
            <TableContainer component={Paper} sx={{ maxHeight: '80%' }}>
                <Table stickyHeader>
                    <TableHead>
                        <TableRow sx={{ backgroundColor: '#c4c4c4' }}>
                            <TableCell sx={{ fontWeight: 'bold' }}>Id</TableCell>
                            <TableCell sx={{ fontWeight: 'bold' }}>Product Name </TableCell>
                            <TableCell sx={{ fontWeight: 'bold' }}>Price</TableCell>
                            <TableCell sx={{ fontWeight: 'bold' }}>Estoque</TableCell>
                            <TableCell sx={{ fontWeight: 'bold' }}>Data do cadastro do produto</TableCell>
                            <TableCell sx={{ fontWeight: 'bold' }}>Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {productsData.map((item) => (
                            <TableRow key={item.id}>
                                <TableCell sx={{ width: 20 }}>{item.id}</TableCell>
                                <TableCell>{item.productName}</TableCell>
                                <TableCell>{item.value}</TableCell>
                                <TableCell>{item.estoque}</TableCell>
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

export default Vehicles