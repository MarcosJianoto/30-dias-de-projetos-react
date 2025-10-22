import MinorCard from '../components/MinorCard'
import BigCard from "../components/BigCard";
import CardCalendar from "../components/CardCalendar";
import CardUpperProfile from "../components/CardUpperProfile";
import { AppBar, Toolbar, Box, Grid, Paper } from "@mui/material";

const Dashboard = () => {
    return (
        <Box sx={{ width: '100%', height: '100%', p: 0, m: 0 }}>
            <Grid container spacing={2} sx={{ mt: 1 }}>

                {/* Small cards row */}
                <Grid item xs={12}>
                    <Grid container spacing={2} sx={{ px: 0 }}>
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
                <Grid item xs={12} sm={8} md={4} >
                    <Paper elevation={1} sx={{ p: 2, height: 420 }}>
                        <CardCalendar />
                    </Paper>
                </Grid>
                <Grid item xs={12} md={8} sm={4}>
                    <Paper elevation={1} sx={{ p: 2, height: '100%' }}>
                        <MinorCard title={'Notifications'} />
                    </Paper>
                </Grid>

                {/* Big cards row */}
                <Grid item xs={12}>
                    <Grid container spacing={2} sx={{ px: 0 }}>
                        <Grid item xs={12} md={8} sm={4}>
                            <Paper elevation={1} sx={{ p: 2, height: '100%' }}>
                                <MinorCard title={'Faturamento ano'} />
                            </Paper>
                        </Grid>
                        <Grid item xs={12} md={8} sm={4}>
                            <Paper elevation={1} sx={{ p: 2, height: '100%' }}>
                                <MinorCard title={'Faturamento ano'} />
                            </Paper>
                        </Grid>
                        <Grid item xs={12} md={8} sm={4}>
                            <Paper elevation={1} sx={{ p: 2, height: '100%' }}>
                                <MinorCard title={'Faturamento ano'} />
                            </Paper>
                        </Grid>
                        <Grid item xs={12} md={8} sm={4}>
                            <Paper elevation={1} sx={{ p: 2, height: '100%' }}>
                                <MinorCard title={'Faturamento ano'} />
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Dashboard