import { Container } from '../../styles'
import { Img } from './style'
export default function Imagem({src}) {
    return (
        
        <Container>
            <Img src={src}></Img>
        </Container>
    )
}