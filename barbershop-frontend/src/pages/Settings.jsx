import { Box, Typography, Paper } from "@mui/material";

const Settings = () => {
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
            <Typography variant="h5" gutterBottom sx={{ display: 'flex', fontWeight: 'bold', height: '40px', backgroundColor: '#1B1B1B', width: '100%', alignItems: 'center', justifyContent: 'start', pl: '10px' }}>
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
                <Box
                    display="flex"
                    borderRadius={1}
                    height="100%"
                    width="100%"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    gap={3}>

                    {/* ---- Barbers ---- */}
                    <Box
                        display="flex"
                        flexDirection="column"
                        borderRadius={1}
                        height="100%"
                        width="100%"
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
                            <Typography
                                variant="h6"
                                sx={{ backgroundColor: "#1B1B1B", color: "white", p: 1, borderRadius: 1 }}
                            >
                                Barbers
                            </Typography>

                            <Box mt={2}>
                                <Typography>Nome</Typography>
                                <Typography>Horários Disponíveis</Typography>
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
                                <Typography>Lembretes Automáticos</Typography>
                                <Typography mt={2}>Alerta de Cancelamento</Typography>
                                <Typography mt={2}>Envio via WhatsApp (alertas, Excel, etc.)</Typography>
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
                            Agenda da barbearia
                        </Typography>

                        <Box mt={2}>
                            <Typography>Intervalo padrão entre cortes (ex: 10 min).</Typography>
                            <Typography>Horário de funcionamento da barbearia.</Typography>
                            <Typography>Dias de folga / feriados.</Typography>
                        </Box>
                    </Paper>
                </Box>
            </Box>
        </Box>
    );
};

export default Settings;
