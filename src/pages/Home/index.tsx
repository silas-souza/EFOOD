import Footer from '../../components/Footer'
import Header from '../../components/Header'
import List from '../../components/List'

import sushiImg from '../../assets/images/sushi.png'
import italianaImg from '../../assets/images/italiana.png'

export type Restaurants = {
  foto: string
  infos: string[]
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: string
  descricao: string
  capa: string
}

const restaurantDetails: Restaurants[] = [
  {
    id: 1,
    avaliacao: '4.7',
    descricao:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    foto: sushiImg,

    infos: ['Destaque da semana', 'Japonesa'],

    titulo: 'Hioki Sushi',
    capa: sushiImg,
    destacado: true, // ✅ added
    tipo: 'Japonesa' // ✅ added
  },
  {
    id: 2,
    avaliacao: '5.1',
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    foto: italianaImg,
    infos: ['Italiana'],
    titulo: 'La Dolce Vita Trattoria',
    capa: italianaImg,
    destacado: false, // ✅ added
    tipo: 'Italiana'
  },
  {
    id: 3,
    avaliacao: '5.1',
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    foto: italianaImg,
    infos: ['Italiana'],
    titulo: 'La Dolce Vita Trattoria',
    capa: italianaImg,
    destacado: false, // ✅ added
    tipo: 'Italiana'
  },
  {
    id: 4,
    avaliacao: '5.1',
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    foto: italianaImg,
    infos: ['Italiana'],
    titulo: 'La Dolce Vita Trattoria',
    capa: italianaImg,
    destacado: false, // ✅ added
    tipo: 'Italiana'
  },
  {
    id: 5,
    avaliacao: '5.1',
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    foto: italianaImg,
    infos: ['Italiana'],
    titulo: 'La Dolce Vita Trattoria',
    capa: italianaImg,
    destacado: false, // ✅ added
    tipo: 'Italiana'
  },
  {
    id: 6,
    avaliacao: '4.5',
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    foto: italianaImg,
    infos: ['Italiana'],
    titulo: 'La Dolce Vita Trattoria',
    capa: italianaImg,
    destacado: false, // ✅ added
    tipo: 'Italiana'
  }
]

const Home = () => (
  <>
    <Header />
    <List restaurants={restaurantDetails} />
    <Footer />
  </>
)

export default Home
