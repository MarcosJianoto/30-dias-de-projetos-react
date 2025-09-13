import styled from "styled-components"
import Search from "../../../public/imgs/search.png"

const HeaderEstilizado = styled.header`

padding: 60px 0;
display: flex;
justify-content: space-between;

`

const Cabecalho = () => {
    return (
        <HeaderEstilizado>
            <img src={Search} alt="" />


        </HeaderEstilizado>
    )
}

export default Cabecalho;