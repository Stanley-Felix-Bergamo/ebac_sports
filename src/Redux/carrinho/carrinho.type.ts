import { Produto } from '../../App'

type CarrinhoState = {
  itens: Produto[]
}

const initialState: CarrinhoState = {
  itens: []
}

export default initialState
