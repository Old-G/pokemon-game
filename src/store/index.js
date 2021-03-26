import { configureStore } from '@reduxjs/toolkit'
import counterReduser from './counter'
import pokemonsReducer from './pokemon'

export default configureStore({
  reducer: {
    counter: counterReduser,
    pokemons: pokemonsReducer,
  },
})
