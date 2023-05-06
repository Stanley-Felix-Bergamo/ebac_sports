import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import initialState from './favorito.type'
import { Produto } from '../../App'

const favoritoSlice = createSlice({
  name: 'favorito',
  initialState,
  reducers: {
    favoritar: (state, action: PayloadAction<Produto>) => {
      const favoritos = action.payload

      if (state.itens.find((p) => p.id === favoritos.id)) {
        state.itens = state.itens.filter((p) => p.id !== favoritos.id)
      } else {
        state.itens.push(favoritos)
      }
    }
  }
})

export const { favoritar } = favoritoSlice.actions
export default favoritoSlice.reducer
