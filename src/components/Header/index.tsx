import { useSelector } from 'react-redux'
import * as S from './styles'
import cesta from '../../assets/cesta.png'
import { paraReal } from '../Produto'
import { RootReducer } from '../../Redux/store'

const Header = () => {
  const itensCarrinho = useSelector(
    (state: RootReducer) => state.carrinho.itens
  )
  const itensFavorito = useSelector(
    (state: RootReducer) => state.favoritar.itens
  )
  const valorTotal = itensCarrinho.reduce((acc, item) => {
    acc += item.preco
    return acc
  }, 0)

  return (
    <S.Header>
      <h1>EBAC Sports</h1>
      <div>
        <span>{itensFavorito.length} favoritos</span>
        <img src={cesta} />
        <span>
          {itensCarrinho.length} itens, valor total: {paraReal(valorTotal)}
        </span>
      </div>
    </S.Header>
  )
}

export default Header
