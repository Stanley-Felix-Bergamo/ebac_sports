import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import carrinhoReducer from './carrinho/slice'
import favoritoReducer from './favorito/slice'

import api from '../services/api'

export const store = configureStore({
  reducer: {
    carrinho: carrinhoReducer,
    favoritar: favoritoReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>
