import styled from "styled-components"
import MenuHamburguer from "../MenuHamburguer"
import { useState } from "react"

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
}

img:hover{
    transform: scale(1.1);
    transition: transform 0.3s ease;
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

const Card = ({ name, job, img }) => {
    const [open, setOpen] = useState(false);


    return (
        <>
            <CardModal>
                <img src={img} />
                <MenuHamburguer open={open} setOpen={setOpen} >

                </MenuHamburguer>
                <ContentText>
                    <PrincipalText>
                        {name}
                        <SecondText>
                            {job}
                        </SecondText>
                    </PrincipalText>
                </ContentText>
            </CardModal>

        </>
    )
}

export default Card