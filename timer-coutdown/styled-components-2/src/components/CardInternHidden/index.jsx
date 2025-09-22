import styled from "styled-components"
import Github from "../../assets/img/github.png"
import Linkedin from "../../assets/img/linkedin.png"

const PrincipalDiv = styled.div`
    height: 300px;
    width: 200px;
`

const InternText = styled.div`
    color: white;
    height: 300px;
    width: 200px;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: space-between; /* separa topo e base do card */
    align-items: center;            /* centraliza horizontalmente */
    padding: 10px;
`

const SecondaryText = styled.h1`
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    font-size: 30px;
    color: white;
`

const ContainerIcons = styled.div`
    display: flex;
    justify-content: center; /* centraliza horizontalmente */
    align-items: center;
    gap: 10px;

    img{
        height: 30px !important;
        width: 30px !important;
        object-fit: contain;
    }
`

const Icon = styled.img`
    height: 30px !important;
    width: 30px !important;
    object-fit: contain;
`


const CardInternHidden = ({ open, name, github, linkedin, text }) => {
    return (
        <>
            {open &&
                (
                    <InternText>
                        <SecondaryText>
                            {name}
                        </SecondaryText>

                        {text}

                        <ContainerIcons>
                            <a href={github}>
                                <img src={Github} alt="" /></a>
                            <a href={linkedin}>
                                <img src={Linkedin} alt="" /></a>
                        </ContainerIcons>

                    </InternText>

                )}
        </>

        //<InternText></InternText>

    )
}

export default CardInternHidden