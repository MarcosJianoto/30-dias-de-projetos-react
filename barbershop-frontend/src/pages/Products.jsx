import styled from "styled-components"
import ProductsTable from "../components/ProductsTable"

const ContainerMain = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    height: 100%;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    border: 1px solid red;
    padding: 15px;
    `

const Products = () => {
    return (
        <ContainerMain>
            teste
            <ProductsTable />
        </ContainerMain>
    )
}

export default Products