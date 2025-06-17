import { ContainerRest, Description, Infos } from './styles'
import estrelaImg from '../../assets/images/estrela.png'
import Tag from '../Tag'

type Props = {
  title: string
  image: string
  description: string
  classification: string
  infos: string[]
}

const Restaurant = ({
  description,
  image,
  title,
  classification,
  infos
}: Props) => (
  <ContainerRest>
    <img src={image} alt={title} />
    <Infos>
      {infos.map((info) => (
        <Tag size="big" key={info}>
          {info}
        </Tag>
      ))}
    </Infos>
    <div>
      <h3>{title}</h3>
      <span>
        {classification}
        <img src={estrelaImg} alt="Classificação" />
      </span>
    </div>
    <Description>{description}</Description>
    <Tag size="small">Saiba mais</Tag>
  </ContainerRest>
)

export default Restaurant
