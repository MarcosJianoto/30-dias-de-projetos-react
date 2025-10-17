import { Box, Typography, Button } from "@mui/material"
import AddIcon from "@mui/icons-material/Add";

const MenuProduct = () => {
    return (
        <>
            <Box
                display={'flex'}
                justifyContent={'space-between'}
                alignItems={'center'}
                width={'100%'}
            >
                <Typography variant="h4"> Product </Typography>
                <Box
                    display={'flex'}
                    justifyContent={'space-between'}
                    gap={'20px'}
                >
                    <Button variant="outlined" startIcon={<AddIcon />}>
                        Export
                    </Button>
                    <Button variant="contained" startIcon={<AddIcon />}>
                        Adicionar novo produto
                    </Button>
                </Box>
            </Box>
        </>
    )
}

export default MenuProduct