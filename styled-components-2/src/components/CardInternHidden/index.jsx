import styled from "styled-components"

const InternText = styled.div`

    height: 300px;
    width: 200px;
    position: absolute;
    border: solid 1px white;
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    margin: 5px;

`

const CardInternHidden = ({ open }) => {
    return (
        <>
            {open &&
                (
                    <InternText>

                    </InternText>

                )}
        </>

        //<InternText></InternText>

    )
}

export default CardInternHidden