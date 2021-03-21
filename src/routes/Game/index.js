import { useState, useEffect } from 'react'
import PokemonCard from '../../components/PokemonCard'
import s from './style.module.css'

import database from '../../service/fairbase'

const poke = {
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

function GamePage() {
  const [pokemons, setPokemons] = useState({})

  useEffect(() => {
    database.ref('pokemons').once('value', (snapshot) => {
      setPokemons(snapshot.val())
    })
  }, [])

  const onClickAdd = () => {
    const newKey = database.ref().child('pokemons').push().key
    database
      .ref('pokemons/' + newKey)
      .set(poke)
      .then(() =>
        setPokemons((prevState) => {
          return { ...prevState, [newKey]: poke }
        })
      )
    console.log(onClickAdd)
  }

  //

  const onClickCard = (newKey) => {
    setPokemons((prevState) => {
      return Object.entries(prevState).reduce((acc, [key, item]) => {
        const pokemon = { ...item }
        if (key === newKey) {
          pokemon.active = true
          database.ref('pokemons/' + key).update({ active: true })
        }

        acc[key] = pokemon

        return acc
      }, {})
    })
  }

  return (
    <div className={s.container}>
      <button onClick={onClickAdd}>ADD NEW POKEMON</button>
      <div className={s.flex}>
        {Object.entries(pokemons).map(
          ([key, { id, name, img, type, values, active }]) => (
            <PokemonCard
              key={key}
              newKey={key}
              id={id}
              name={name}
              img={img}
              type={type}
              values={values}
              onClickCard={onClickCard}
              isActive={active}
            />
          )
        )}
      </div>
    </div>
  )
}

export default GamePage
