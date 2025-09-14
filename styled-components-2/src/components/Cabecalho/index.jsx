import styled from "styled-components"
import Logo from "../../../public/imgs/logo.png"

const HeaderEstilizado = styled.header`

padding: 60px 0;
display: flex;
justify-content: space-between;
img {
    max-width: 212px;
}
`

const Cabecalho = () => {
    return (
        <HeaderEstilizado>
            <img src={Logo} alt="logo SpaceApp" />


        </HeaderEstilizado>
    )
}

export default Cabecalho;