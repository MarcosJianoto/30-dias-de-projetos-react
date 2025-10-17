import styled from "styled-components"
import ProductsTable from "../components/ProductsTable"
import MenuProduct from "../components/ProductsTable/MenuProduct"

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

const ContainerMenuProduct = styled.div`
    display: flex;
    border-radius: 5px;
    height: 15%;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    border: 1px solid red;
    padding: 15px;
`

const Products = () => {
    return (
        <ContainerMain>
            <MenuProduct />
            <ProductsTable />
        </ContainerMain>
    )
}

export default Products