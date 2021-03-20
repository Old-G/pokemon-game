import { useState, useEffect } from 'react'
import PokemonCard from '../../components/PokemonCard'
import s from './style.module.css'

import database from '../../service/fairbase'

function GamePage() {
  const [pokemons, setPokemons] = useState({})

  useEffect(() => {
    database.ref('pokemons').once('value', (snapshot) => {
      setPokemons(snapshot.val())
    })
  }, [])

  // const onClickAdd = (objID, id, name, img, type, values, active) => {
  //   database.ref('pokemons/' + objID).set({
  //     id: id,
  //     name: name,
  //     img: img,
  //     type: type,
  //     values: values,
  //     isActive: active,
  //   })
  //   console.log(onClickAdd)
  // }

  // const newKey = database.ref().child('pokemons').push().key
  // database.ref('pokemons/' + newKey).set(pokemons)

  // const onClickCard = (id) => {
  //   setPokemons((prevState) => {
  //     return Object.entries(prevState).reduce((acc, item) => {
  //       const pokemon = { ...item[1] }
  //       if (pokemon.id === id) {
  //         pokemon.active = true
  //       }

  //       acc[item[0]] = pokemon

  //       return acc
  //     }, {})
  //   })
  // }

  const onClickCard = (pokemonKey) => {
    setPokemons((prevState) => {
      return Object.entries(prevState).map(([key, item]) => {
        let active = false
        if (pokemonKey === key) {
          active = true
          database.ref('pokemons/' + key).update({ active: true })
        }
        return { ...item, active: active }
      })
    })
  }

  const onClickAdd = () => {
    const k = Math.round(Math.random() * (pokemons.length - 1))
    let newPokemon = pokemons[k] ?? pokemons[0]

    const newKey = database.ref().child('pokemons').push().key
    database.ref('pokemons/' + newKey).set(newPokemon)
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
