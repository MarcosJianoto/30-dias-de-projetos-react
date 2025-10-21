import MinorCard from '../components/MinorCard'
import BigCard from "../components/BigCard";
import CardCalendar from "../components/CardCalendar";
import CardUpperProfile from "../components/CardUpperProfile";
import { AppBar, Toolbar, Box, Grid, Paper } from "@mui/material";

const Dashboard = () => {
    return (
        <Box sx={{ width: '100%', height: '100%', p: 0 }}>
            {/* AppBar superior com foto e notificações alinhados à direita */}
            <AppBar position="static" color="transparent" elevation={0}>
                <Toolbar>
                    <Box sx={{ flexGrow: 1 }} />
                    <CardUpperProfile />
                </Toolbar>
            </AppBar>
            <Grid container spacing={2} sx={{ mt: 1 }}>

                {/* Small cards row */}
                <Grid item xs={12}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6} md={3}>
                            <Paper elevation={1} sx={{ p: 2, height: '100%' }}>
                                <MinorCard title={'Faturamento dia'} />
                            </Paper>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Paper elevation={1} sx={{ p: 2, height: '100%' }}>
                                <MinorCard title={'Faturamento semana'} />
                            </Paper>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Paper elevation={1} sx={{ p: 2, height: '100%' }}>
                                <MinorCard title={'Faturamento mês'} />
                            </Paper>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Paper elevation={1} sx={{ p: 2, height: '100%' }}>
                                <MinorCard title={'Faturamento ano'} />
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>

                {/* Calendar */}
                <Grid item xs={12}>
                    <Paper elevation={1} sx={{ p: 2 }}>
                        <CardCalendar />
                    </Paper>
                </Grid>

                {/* Big cards row */}
                <Grid item xs={12}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <Paper elevation={1} sx={{ p: 2, height: '100%' }}>
                                <BigCard />
                            </Paper>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Paper elevation={1} sx={{ p: 2, height: '100%' }}>
                                <BigCard />
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Dashboard