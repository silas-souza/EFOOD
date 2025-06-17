import fundoImg from '../../assets/images/fundo.png'
import logo from '../../assets/images/logo.svg'
import banner from '../../assets/images/fundoperfil.png'

import { Imagem, Text, Banner, TextBanner, RestaurantName } from './styles'
import { Container } from '../../styles'
import { Link } from 'react-router-dom'

const HeaderPerfil = () => (
  <>
    <Imagem style={{ backgroundImage: `url(${fundoImg})` }}>
      <Text>Restaurantes</Text>
      <Link to="/">
        <img src={logo} alt="Efood" />
      </Link>
      <Text>0 produto(s) no carrinho</Text>
    </Imagem>
    <Banner
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4)), url(${banner})`
      }}
    >
      <Container>
        <TextBanner>Italiana</TextBanner>
        <RestaurantName>La Dolce Vita Trattoria</RestaurantName>
      </Container>
    </Banner>
  </>
)

export default HeaderPerfil
