
import styled from "styled-components"

const Body = styled.div`
    width: 100%;
    height: 100%;
    background-color: #0D0D0D;
    color: #fff;
`
const Grid = styled.div`
    height: 100%;
    display: grid;
    grid-template-columns: repeat(3,1fr);
    grid-template-rows: 1fr 5fr 1fr;
    gap: 12px;
`

const Card = styled.div`
    background-color: #282828;
    padding: 16px;
    border-radius: 8px;
`

const CardLarge = styled(Card)`
    grid-column: span 2;
`

const Dashboard = () => {
    return (
        <Body>
            <Grid>
                <Card>Dashboard</Card>
                <Card>Dashboard</Card>
                <Card>Dashboard</Card>
                <Card>Dashboard</Card>
                <CardLarge>Dashboard</CardLarge>
                <Card>Dashboard</Card>
                <Card>Dashboard</Card>
                <Card>Dashboard</Card>
            </Grid>
        </Body>
    )
}

export default Dashboard