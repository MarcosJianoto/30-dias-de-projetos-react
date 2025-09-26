import styled from "styled-components"
import One from "../../assets/one.jpg"
import Two from "../../assets/two.jpg"
import OneChibi from "../../assets/onechibi.jpg"
import TwoChibi from "../../assets/twochibi.jpg"
import Search from "../Search"


import Card from "./Card"
import Chibi from "./Chibi"
import CardElements from "./CardElements"


const Section = styled.section`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    max-width: 100%;
    gap: 30px;
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
    justify-content: center;
`

const TitleArts = styled.h3`

    font-size: 30px;
    padding: 0;
    margin: 0;

    button{

        border-radius: 15px;
        padding: 5px;
        width: 100%;
        box-sizing: border-box;
        margin-top: 20px;
    }
`
const RecenteSearches = styled.h5`

    font-size: 20px;
    padding: 0;
    margin: 0;

    button{

        border-radius: 15px;
        padding: 5px;
        width: 100%;
        box-sizing: border-box;
        margin-top: 20px;
    }
`

const ContainerSearch = styled.div`
    height: 100%;
    width: 200px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 0;
    margin: 0 auto;
    justify-content: center;
    align-items: left;
`
const ContainerChibis = styled.div`
    height: 100%;
    width: 150px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 0;
    align-items: center;
    justify-content: center;

`
const ContainerWhatever = styled.div`
    height: 100%;
    width: 300px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 0;
    align-items: center;
    justify-content: center;


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

            <ContainerSearch>
                <RecenteSearches>
                    Recent searches
                </RecenteSearches>
                <Search search={"Xiao Build"} color={"#d96666"} />      {/* vermelho queimado suave */}
                <Search search={"Xiao CosPlay"} color={"#6699cc"} />   {/* azul suave */}
                <Search search={"Xiao Ads"} color={"#cc6699"} />       {/* rosa/vinho claro */}
                <Search search={"Xiao Official Art"} color={"#66b38f"} /> {/* verde água suave */}
                <Search search={"Xiao Fan Art"} color={"#808080"} />   {/* cinza médio */}
            </ContainerSearch>

            <ContainerChibis>
                <Chibi img={OneChibi} />
                <Chibi img={TwoChibi} />
            </ContainerChibis>

            <ContainerWhatever>
                <CardElements img={TwoChibi} title={"Element Ameno"} text={"No universo de Genshin Impact, cada personagem possui um Elemento único, como Pyro, Hydro ou Anemo, que  estratégias cada combate dinâmico e criativo."} />
                <CardElements img={TwoChibi} title={"Element Ameno"} text={"No universo de Genshin Impact, cada personagem possui um Elemento único, como Pyro, Hydro ou Anemo, que  estratégias cada combate dinâmico e criativo."} />
                <CardElements img={TwoChibi} title={"Element Ameno"} text={"No universo de Genshin Impact, cada personagem possui um Elemento único, como Pyro, Hydro ou Anemo, que  estratégias cada combate dinâmico e criativo."} />
            </ContainerWhatever>

        </Section>

    )
}

export default CardsImage