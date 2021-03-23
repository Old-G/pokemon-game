import { useState } from 'react'
import { Route, Switch, useRouteMatch } from 'react-router'
import StartPage from './routes/Start'
import BoardPage from './routes/Board'
import FinishPage from './routes/Finish'
import { PokemonContext } from '../../context/pokemonContext'

const GamePage = () => {
  const [pokemon, setPokemon] = useState([])
  const match = useRouteMatch()

  const onChangePokemon = (val) => {
    setPokemon(val)
  }

  return (
    <PokemonContext.Provider
      value={{
        pokemon,
        onChangePokemon: onChangePokemon,
      }}
    >
      <Switch>
        <Route path={`${match.path}/`} exact component={StartPage} />
        <Route path={`${match.path}/board`} component={BoardPage} />
        <Route path={`${match.path}/finish`} component={FinishPage} />
      </Switch>
    </PokemonContext.Provider>
  )
}

export default GamePage
