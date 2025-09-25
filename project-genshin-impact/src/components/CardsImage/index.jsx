import styled from "styled-components"
import One from "../../assets/one.jpg"
import Two from "../../assets/two.jpg"


import Card from "./Card"


const Section = styled.section`
    display: flex;
    border: 1px solid green;
    height: 40%;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    max-width: 100%;
    `

const SpaceCard = styled.div`
    display: flex;
    gap: 20px;
`

const ContainerCard = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 0;
`

const TitleArts = styled.h3`

    font-size: 30px;
    padding: 0;
    margin: 0;

    button{

        border: 1px solid black;
        border-radius: 15px;
        padding: 5px;
        width: 100%;
        box-sizing: border-box;
        margin-top: 20px;
    }


`

const CardsImage = () => {
    return (

        <Section>
            <ContainerCard>
                <TitleArts>
                    Artworks &gt;
                </TitleArts>

                <SpaceCard>
                    <Card img={One} />
                    <Card img={Two} />
                </SpaceCard>

                <TitleArts>
                    <button>View more</button>
                </TitleArts>


            </ContainerCard>



        </Section>

    )
}

export default CardsImage