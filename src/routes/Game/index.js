import { useState } from 'react'
import { Route, Switch, useRouteMatch } from 'react-router'
import StartPage from './routes/Start'
import BoardPage from './routes/Board'
import FinishPage from './routes/Finish'
import { PokemonContext } from '../../context/pokemonContext'

const GamePage = () => {
  const match = useRouteMatch()
  const [selectedPokemon, setSelectedPokemon] = useState([])
  const [opponentPokemons, setOpponentPokemons] = useState([])
  const [gameResult, setGameResult] = useState(null)
  const [currentPlayer, setCurrentPlayer] = useState(0)

  const onChangePokemon = (key, pokemon) => {
    setSelectedPokemon((prevState) => {
      if (prevState[key]) {
        const copyState = { ...prevState }
        delete copyState[key]

        return copyState
      }
      return {
        ...prevState,
        [key]: pokemon,
      }
    })
  }

  const onClickSetOpponentPokemons = (pokemons) => {
    setOpponentPokemons(pokemons)
  }

  const onClickSetGameResult = (result) => {
    setGameResult(result)
  }

  const onClickClear = () => {
    setSelectedPokemon([])
    setOpponentPokemons([])
    setGameResult(null)
    setCurrentPlayer(0)
  }

  return (
    <PokemonContext.Provider
      value={{
        pokemons: selectedPokemon,
        onChangePokemon: onChangePokemon,
        opponentPokemons: opponentPokemons,
        onSetOpponentPokemon: onClickSetOpponentPokemons,
        gameResult: gameResult,
        onSetGameResult: onClickSetGameResult,
        onClear: onClickClear,
        currentPlayer: currentPlayer,
        setCurrentPlayer: setCurrentPlayer,
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
