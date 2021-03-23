import { useState, useEffect, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import PokemonCard from '../../../../components/PokemonCard'
import s from './style.module.css'

import { FireBaseContext } from '../../../../context/firebaseContext'
import { PokemonContext } from '../../../../context/pokemonContext'

const POKE = {
  abilities: ['keen-eye', 'tangled-feet', 'big-pecks'],
  base_experience: 122,
  height: 11,
  weight: 300,
  id: 17,
  img:
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/17.png',
  name: 'pidgeotto',
  stats: {
    hp: 63,
    attack: 60,
    defense: 55,
    'special-attack': 50,
    'special-defense': 50,
    speed: 71,
  },
  type: 'normal',
  values: {
    top: 7,
    right: 5,
    bottom: 1,
    left: 2,
  },
}

const StartPage = () => {
  const history = useHistory()
  const firebase = useContext(FireBaseContext)
  const pokemonContext = useContext(PokemonContext)
  console.log('PokemonContext:', pokemonContext)

  const [pokemons, setPokemons] = useState({})

  useEffect(() => {
    firebase.getPokemonsSocket((pokemons) => {
      setPokemons(pokemons)
    })
  }, [])

  // const onClickAdd = () => {
  //   const poke = POKE
  //   firebase.addPokemon(poke)

  //   console.log(onClickAdd)
  // }

  const onClickStart = () => {}

  const onSelected = () => {
    const selectedPokemons = []
    Object.entries(pokemons).forEach(([key, item]) => {
      if (!!item.selected) {
        selectedPokemons[key] = item
      }
    })
    if (!Object.keys(selectedPokemons).length) {
      return
    }
    pokemonContext.onChangePokemon(selectedPokemons)

    history.push('/game/board')
  }

  const onClickCard = (id) => {
    setPokemons((prevState) => {
      return Object.entries(prevState).reduce((acc, item) => {
        const pokemon = { ...item[1] }
        if (pokemon.id === id) {
          pokemon.active = !pokemon.active
        }

        acc[item[0]] = pokemon

        firebase.postPokemon(item[0], pokemon)

        return acc
      }, {})
    })
  }

  // const onClickCard = (newKey) => {
  //   database
  //     .ref('pokemons/' + newKey)
  //     .update({ active: true })
  //     .then(
  //       setPokemons((prevState) => {
  //         return Object.entries(prevState).reduce((acc, [key, item]) => {
  //           const pokemon = { ...item }

  //           acc[key] = key === newKey ? { ...pokemon, active: true } : pokemon

  //           return acc
  //         }, {})
  //       })
  //     )
  // }

  return (
    <div className={s.container}>
      <button onClick={onSelected}>Start Game</button>
      <div className={s.flex}>
        {Object.entries(pokemons).map(
          ([key, { id, name, img, type, values, active }]) => (
            <div
              key={key}
              className={s.root}
              onClick={() => {
                onClickCard(key)
              }}
            >
              <PokemonCard
                key={key}
                newKey={key}
                id={id}
                name={name}
                img={img}
                type={type}
                values={values}
                // onClickCard={onClickCard}
                isActive={active}
              />
            </div>
          )
        )}
      </div>
    </div>
  )
}

export default StartPage
