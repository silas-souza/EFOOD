import {
  ContainerFood,
  ImagemFood,
  TitleFood,
  DescriptionFood,
  StyledButton
} from './styles'
import Pizzaimg from '../../assets/images/pizza.png'

const Food = () => (
  <ContainerFood>
    <ImagemFood src={Pizzaimg} alt="Pizza" />
    <div>
      <TitleFood>Pizza Marguerita</TitleFood>
      <DescriptionFood>
        A clássica Marguerita: molho de tomate suculento, mussarela derretida,
        manjericão fresco e um toque de azeite. Sabor e simplicidade!
      </DescriptionFood>
      <StyledButton>Adicionar ao carrinho</StyledButton>
    </div>
  </ContainerFood>
)

export default Food
