import { useState, useEffect, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import PokemonCard from '../../../../components/PokemonCard'
import s from './style.module.css'

import { PokemonContext } from '../../../../context/pokemonContext'
import { getPokemonsAsync, selectPokemonsData } from '../../../../store/pokemon'

const StartPage = () => {
  const pokemonContext = useContext(PokemonContext)
  const pokemonsRedux = useSelector(selectPokemonsData)
  const history = useHistory()
  const dispatch = useDispatch()

  const [pokemons, setPokemons] = useState({})

  useEffect(() => {
    pokemonContext.setCurrentPlayer(0)

    dispatch(getPokemonsAsync())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    setPokemons(pokemonsRedux)
  }, [pokemonsRedux])

  const onClickCard = (key) => {
    const pokemon = { ...pokemons[key] }
    if (
      Object.keys(pokemonContext.pokemons).length >= 5 &&
      !(pokemon.selected === true)
    ) {
      return
    }

    pokemonContext.onChangePokemon(key, pokemon)

    setPokemons((prevState) => ({
      ...prevState,
      [key]: {
        ...prevState[key],
        selected: !prevState[key].selected,
      },
    }))
  }

  const onClickGameStart = () => {
    history.push('/game/board')
  }

  return (
    <>
      <div className={s.buttonWrap}>
        <button
          onClick={onClickGameStart}
          disabled={Object.keys(pokemonContext.pokemons).length !== 5}
        >
          Start Game
        </button>
      </div>

      <div className={s.flex}>
        {Object.entries(pokemons).map(
          ([key, { id, name, img, type, values, selected }]) => (
            <PokemonCard
              className={s.card}
              key={key}
              id={id}
              name={name}
              img={img}
              type={type}
              values={values}
              isActive={true}
              isSelected={selected}
              onClickCard={() => {
                if (
                  Object.keys(pokemonContext.pokemons).length < 5 ||
                  selected
                ) {
                  onClickCard(key)
                }
              }}
            />
          )
        )}
      </div>
    </>
  )
}

export default StartPage
