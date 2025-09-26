import styled from "styled-components"
import { MdSearch } from "react-icons/md";



const SearchButton = styled.section`
    display: flex;
    border-radius: 10px;
    height: 10%;
    width: 100%;
    font-size: 20px;
    align-items: center;
    justify-content: left;
    background-color: ${(props) => props.color || "black"};
    `


const Search = ({ search, color }) => {
    return (

        <SearchButton color={color}>
            <MdSearch size={50} /> {search}
        </SearchButton>

    )
}

export default Search