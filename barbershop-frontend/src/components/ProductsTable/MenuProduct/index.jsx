import { Box, Typography, Button } from "@mui/material"
import AddIcon from "@mui/icons-material/Add";
import { IconButton } from "@mui/material";

import styled from "styled-components"

const ContainerMain = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    height: 15%;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    border: 1px solid red;
    padding: 15px;
    `

const MenuProduct = () => {
    return (
        <>
            <Box
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
            >
                <Typography variant="h4"> Product </Typography>
                <Box>
                    <Button variant="contained" startIcon={<AddIcon />}>
                        Adicionar novo produto
                    </Button>
                </Box>
            </Box>
        </>
    )
}

export default MenuProduct