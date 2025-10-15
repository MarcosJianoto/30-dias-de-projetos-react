import { Box, Typography } from "@mui/material";
import { DateCalendar, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { ptBR } from "date-fns/locale"; // opcional: deixa o calendário em português

const Schedule = () => {
    return (
        <Box display="flex" flexDirection="column" gap={2}>
            <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                borderRadius={1}
                color="white"
            >
                <Box display="flex" justifyContent="center" alignItems="center">
                    <Typography>Intervalo padrão entre cortes:</Typography>
                    <Box bgcolor="#1b1b1b" padding="20px 10px" mx="5px">
                        <Typography>15 min</Typography>
                    </Box>
                </Box>

                <Box display="flex" justifyContent="center" alignItems="center">
                    <Typography>Horário de atendimento:</Typography>
                    <Box bgcolor="#1b1b1b" padding="20px 10px" mx="5px">
                        <Typography>08:00 até 19:00</Typography>
                    </Box>
                </Box>
            </Box>

            {/* 📅 AQUI ENTRA O CALENDÁRIO */}
            <Box display={"flex"} bgcolor={'#1b1b1b'}>
                <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ptBR}>
                    <DateCalendar sx={{
                        "& .MuiTypography-root": { fontSize: "1.1rem" },
                        "& .MuiPickersDay-root": { fontSize: "1rem", width: 44, height: 44 },
                    }} />
                </LocalizationProvider>
            </Box>
        </Box>
    );
};

export default Schedule;
