import styled from "styled-components"

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;        // deixa o slide controlar a largura
  max-width: 250px;   // evita ficar gigante
  margin: 0 auto;
  position: relative;
  border-radius: 20px;
  overflow: hidden;

  border: ${(props) =>
        props.selected ? "1px solid gray" : "1px solid transparent"};
`;



const CardPhoto = styled.div`
  display: flex;
  height: 35vh;
  width: 100%;       // importante para o slider
  position: relative;
  background: radial-gradient(#2099AA, #4d8183);
  transition: all 0.5s ease-in-out;

  &:hover {
    cursor: pointer;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const CardImage = styled.img`
    
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease-in-out;

    ${CardPhoto}:hover & {
        transform: scale(1.05);
        cursor: pointer;
    }

`


const LyrycsPhotoContainer = styled.div`
  height: 6vh;
  width: 100%;       // importante para alinhar com o CardPhoto
  position: absolute;
  bottom: 0;
  background: radial-gradient(#2099AA, #11626d);
  opacity: 97%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;


const NameCharacter = styled.h3`
    font-size: 25px;   
    margin: 0 auto;
    padding: 0;

    text-shadow: 1px 1px 2px black;
`
const TitleCharacter = styled.h4`
    font-size: 13px;   
    margin: 0 auto;
    padding: 0;

    text-shadow: 1px 1px 2px black;
`

const Card = ({ img, name, title, selected = true }) => {
    return (
        <CardContainer selected={selected} >
            <CardPhoto>
                <CardImage src={img} alt={name} />
                <LyrycsPhotoContainer>
                    <NameCharacter>{name}</NameCharacter>
                    <TitleCharacter>{selected ? title : ""}</TitleCharacter>
                </LyrycsPhotoContainer>
            </CardPhoto>
        </CardContainer>
    );
};


export default Card