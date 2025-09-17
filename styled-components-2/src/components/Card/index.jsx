import styled from "styled-components"
import MenuHamburguer from "../MenuHamburguer"
import { useState } from "react"
import CardInternHidden from "../CardInternHidden"

const CardModal = styled.div`
    height: 400px;
    width: 250px;
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;

    overflow: hidden;
    border-radius: 20px;
    
    img {
    width: 250px;
    height: 400px;
    transition: transform 0.5s ease;
}
`

const ContentText = styled.div`
    position: absolute;
    bottom: 5px;
    left: 40px;

`

const PrincipalText = styled.h1`
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-weight: bold;
    font-size: 30px;
    color: white;

`

const SecondText = styled.h5`
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-weight: 100;
    font-size: 10px;
    color: white;
    margin: 2px;
`


const Card = ({ name, job, img, text, github, linkedin }) => {

    const [hovered, setHovered] = useState(false);
    const [open, setOpen] = useState(false);
    const [intern, setIntern] = useState(false);

    const desfocus = () => {
        return <img src={img}
            style={{
                transition: "transform 0.5s ease, filter 0.8s ease",
                transform: hovered ? "scale(1.1)" : "scale(1)",
                filter: open ? "blur(5px)" : "none"
            }} />
    }

    return (
        <>
            <CardModal onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} >

                {desfocus(open)}
                <MenuHamburguer open={open} setOpen={setOpen} />
                <CardInternHidden open={open} name={name} text={text} github={github} linkedin={linkedin} />
                <ContentText>
                    <PrincipalText>
                        {name}
                        <SecondText>
                            {job}
                        </SecondText>
                    </PrincipalText>
                </ContentText>
            </CardModal >

        </>
    )
}

export default Card