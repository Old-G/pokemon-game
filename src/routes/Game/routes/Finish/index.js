import { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { FireBaseContext } from '../../../../context/firebaseContext'
import PokemonCard from '../../../../components/PokemonCard'
import s from './style.module.css'

import { PokemonContext } from '../../../../context/pokemonContext'

const FinishPage = () => {
  const history = useHistory()
  const firebase = useContext(FireBaseContext)
  const pokemonContext = useContext(PokemonContext)
  const [opponentPokemons, setOpponentPokemons] = useState(
    pokemonContext.opponentPokemons
  )

  const selectPokemon = (pokemon) => {
    setOpponentPokemons((prevState) =>
      prevState.map((item) => ({
        ...item,
        selected: item.id === pokemon.id,
      }))
    )
  }

  if (
    !Object.keys(pokemonContext.pokemons).length ||
    !Object.keys(pokemonContext.opponentPokemons)
  ) {
    history.replace('/game')
  }

  const clearContext = () => {
    pokemonContext.onClear()
    history.replace('/game')
  }

  const onClickFinishGame = () => {
    if (pokemonContext.gameResult !== 'player1') {
      clearContext()
    }

    const newPokemon = opponentPokemons.filter((item) => item.selected)
    if (newPokemon.length) {
      firebase.getOnePokemon(newPokemon[0].id).then((pokemonBD) => {
        if (!pokemonBD) {
          firebase.addPokemon(newPokemon[0], () => {
            clearContext()
          })
        } else {
          clearContext()
        }
      })
    }
  }

  return (
    <div className={s.page}>
      <div className={s.result}>
        {pokemonContext.gameResult === 'player1' && (
          <>
            <p>You WIN!</p>
            <p>Choose one card for your collection.</p>
          </>
        )}
        {pokemonContext.gameResult === 'player2' && (
          <>
            <p>You LOSE! HAHAHAHAHA</p>
            <p>Try once more</p>
          </>
        )}
        {pokemonContext.gameResult === 'draw' && (
          <>
            <p>It's a draw! Phhhhhh</p>
            <p>Try once more</p>
          </>
        )}
      </div>

      <div className={s.flex}>
        {Object.keys(pokemonContext.pokemons) &&
          Object.entries(pokemonContext.pokemons).map(([key, item]) => (
            <div key={key} className={s.root}>
              <PokemonCard
                key={key}
                uniqKey={key}
                id={item.id}
                name={item.name}
                img={item.img}
                type={item.type}
                values={item.values}
                isActive
              />
            </div>
          ))}
      </div>

      <div className={s.nextPage}>
        <button
          onClick={onClickFinishGame}
          disabled={
            pokemonContext.gameResult === 'player1' &&
            !opponentPokemons.filter((item) => item.selected).length
          }
        >
          END GAME
        </button>
      </div>

      <div className={s.flex}>
        {opponentPokemons &&
          opponentPokemons.map((item) => (
            <div
              key={item.id}
              className={s.root}
              onClick={() => selectPokemon(item)}
            >
              <PokemonCard
                id={item.id}
                name={item.name}
                img={item.img}
                type={item.type}
                values={item.values}
                isActive={true}
                isSelected={!!item.selected}
              />
            </div>
          ))}
      </div>
    </div>
  )
}

export default FinishPage
