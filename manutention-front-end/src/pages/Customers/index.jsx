import { ThemeProvider, createTheme } from '@mui/material/styles';
import styled from "styled-components"
import ModalCustomer from '../../components/ModalCustomer'
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
import { useState } from 'react';

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

const customersData = [
    { id: 1, name: "Marcos Jianoto", phone: "(51) 99999-1111", email: "marcos@email.com" },
    { id: 2, name: "Ana Souza", phone: "(51) 98888-2222", email: "ana.souza@email.com" },
    { id: 3, name: "Carlos Lima", phone: "(51) 97777-3333", email: "carlos.lima@email.com" },
    { id: 4, name: "Juliana Ferreira", phone: "(51) 96666-4444", email: "juliana.ferreira@email.com" },
    { id: 5, name: "Rafael Gomes", phone: "(51) 95555-5555", email: "rafael.gomes@email.com" }
];

const ContainerMain = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    justify-content: space-between;
    align-items: top;
`

const Customers = () => {
    const [open, setOpen] = useState(false);

    const openModal = () => {
        setOpen(true);
    }

    const closeModal = () => {
        setOpen(false);
    }

    return (
        <ThemeProvider theme={darkTheme}>
            <ContainerMain>
                <TableContainer component={Paper} sx={{ maxHeight: '100%' }}>
                    <Table stickyHeader>
                        <TableHead>
                            <TableRow>
                                <TableCell>Id</TableCell>
                                <TableCell>Name </TableCell>
                                <TableCell>Phone</TableCell>
                                <TableCell>Email</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody >
                            {customersData.map((item) => (
                                <TableRow key={item.id} hover style={{ cursor: 'pointer' }} onClick={() => openModal('auto-notifications')}>
                                    <TableCell>{item.id}</TableCell>
                                    <TableCell>{item.name}</TableCell>
                                    <TableCell>{item.phone}</TableCell>
                                    <TableCell>{item.email}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>

                        {open && (
                            <ModalCustomer
                                closeModal={closeModal}
                            />
                        )}
                    </Table>
                </TableContainer>
            </ContainerMain >
        </ThemeProvider >
    )
}

export default Customers