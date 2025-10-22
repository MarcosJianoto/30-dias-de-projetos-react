import { ThemeProvider, createTheme } from '@mui/material/styles';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Chip,
    IconButton,
    Stack,
    CssBaseline,
    Box,
    Typography,
    Paper,
    Button,
    FormGroup,
    FormControlLabel,
    Checkbox,
} from "@mui/material";
import styled from 'styled-components';
import Schedule from '../components/Schedule';


const ContainerMain = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    `


const Settings = () => {

    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
        },
    });



    const getStatusBarber = (status) => {
        switch (status) {
            case "Trabalhando":
                return "success";
            case "Saiu":
                return "error";
            default:
                return "warning"
        }
    }

    const historyData = [
        { id: 1, barber: "Junior", status: "Trabalhando" },
    ];




    return (
        <Box
            display="flex"
            flexDirection="column"
            borderRadius={1}
            height="100%"
            width="100%"
            justifyContent="flex-start"
            alignItems="flex-start"
        >
            <Typography variant="h5"
                gutterBottom
                sx={{
                    display: 'flex',
                    fontWeight: 'bold',
                    height: '40px',
                    backgroundColor: '#1B1B1B',
                    width: '100%',
                    alignItems: 'center',
                    justifyContent: 'start',
                    pl: '10px',
                    borderRadius: '5px'
                }}>
                Barber Settings
            </Typography>

            <Box
                display="flex"
                borderRadius={1}
                height="100%"
                width="100%"
                justifyContent="flex-start"
                alignItems="flex-start"
                gap={3}
            >
                {/* ---- Barbers and Notifications box ---- */}
                <Box
                    display="flex"
                    flexDirection="column"
                    borderRadius={1}
                    height="100%"
                    width="50%"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    gap={3}>
                    <Paper
                        elevation={2}
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            borderRadius: 1,
                            width: "100%",
                            height: "50%",
                            p: 2,
                        }}
                    >
                        <Box
                            display="flex"
                            borderRadius={1}
                            alignItems="center"
                            justifyContent="center"
                            backgroundColor="#1b1b1b"
                        >

                            <Box
                                width="50%"
                            >
                                <Typography
                                    variant="h6"
                                    sx={{ color: "white", p: 1, borderRadius: 1 }}
                                >
                                    Barbers
                                </Typography>
                            </Box>
                            <Box
                                display="flex"
                                justifyContent={"end"}
                                width="50%"

                            >
                                <Button variant="outlined">New Barber</Button>
                            </Box>
                        </Box>

                        <Box mt={2}>
                            <ContainerMain theme={darkTheme}>
                                <TableContainer component={Paper} sx={{ maxHeight: '100%' }}>
                                    <Table stickyHeader>
                                        <TableHead>
                                            <TableRow>
                                                <TableCell sx={{ fontWeight: 'bold' }}>Id</TableCell>
                                                <TableCell sx={{ fontWeight: 'bold' }}>Barber</TableCell>
                                                <TableCell sx={{ fontWeight: 'bold' }}>Status</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {historyData.map((item) => (
                                                <TableRow key={item.id}>
                                                    <TableCell sx={{ width: 20 }}>{item.id}</TableCell>
                                                    <TableCell>{item.barber}</TableCell>
                                                    <TableCell><Chip label={item.status} color={getStatusBarber(item.status)} /></TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </ContainerMain >
                        </Box>
                    </Paper>

                    {/* ---- Notifications ---- */}
                    <Paper
                        elevation={2}
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            borderRadius: 1,
                            width: "100%",
                            height: "50%",
                            p: 2,
                        }}
                    >
                        <Typography
                            variant="h6"
                            sx={{ backgroundColor: "#1B1B1B", color: "white", p: 1, borderRadius: 1 }}
                        >
                            Notifications
                        </Typography>

                        <Box mt={2}>
                            <FormGroup>
                                <FormControlLabel
                                    control={<Checkbox />}
                                    label="Lembretes Automáticos"
                                />
                                <FormControlLabel
                                    control={<Checkbox />}
                                    label="Alerta de Cancelamento"
                                />
                                <FormControlLabel
                                    control={<Checkbox />}
                                    label="Envio via WhatsApp (alertas, Excel, etc.)"
                                />
                            </FormGroup>
                        </Box>
                    </Paper>
                </Box>

                {/* ---- Scheduling ---- */}
                <Paper
                    elevation={2}
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        borderRadius: 1,
                        width: "100%",
                        height: "100%",
                        p: 2,
                    }}
                >
                    <Typography
                        variant="h6"
                        sx={{ backgroundColor: "#1B1B1B", color: "white", p: 1, borderRadius: 1 }}
                    >
                        Agenda de disponibilidade da barbearia (dias trabalhos e feriados)
                    </Typography>

                    <Box mt={2}>
                        {/* <Typography>Intervalo padrão entre cortes (ex: 10 min).</Typography>
                        <Typography>Horário de funcionamento da barbearia.</Typography>
                        <Typography>Dias de folga / feriados.</Typography> */}
                        <Schedule />
                    </Box>
                </Paper>
            </Box >
        </Box >
    );
};

export default Settings;
