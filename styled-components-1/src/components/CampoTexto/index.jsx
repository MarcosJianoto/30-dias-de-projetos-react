import styled from "styled-components"
import Search from "../../../public/imgs/search.png"

const InputWraper = styled.div`
    position: relative;
    display: inline-block;
`

const InputText = styled.input`
    font-size: 20px;
    width: 602px;
    height: 56px;
    font-family: Arial, Helvetica, sans-serif;
    border-radius: 8px;
    border: none;
    box-shadow: inset 0 0 0 2px #7b78e5;
    padding-left:16px;

    &:focus{
        outline: none;
        box-shadow: inset 0 0 0 2px #3d3b77 ;
    }

`

const Icon = styled.img`
    position: absolute;
    right: 16px;
    top: 50%;
    transform: translateY(-50%);
    width: 32px;
    height: 32px;
`


const CampoTexto = () => {
    return (
        <InputWraper>
            <Icon src={Search} alt="icon search" />
            <InputText placeholder="O que você procura? " />
        </InputWraper>

    )
}

export default CampoTexto