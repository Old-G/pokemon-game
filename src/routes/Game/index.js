import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
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

  const onClickAdd = (objID, id, name, img, type, values, active) => {
    database.ref('pokemons/' + objID).set({
      id: id,
      name: name,
      img: img,
      type: type,
      values: values,
      isActive: active,
    })
    console.log(onClickAdd)
  }

  // const newKey = database.ref().child('pokemons').push().key
  // database.ref('pokemons/' + newKey).set(data)

  const onClickCard = (id) => {
    setPokemons((prevState) => {
      return Object.entries(prevState).reduce((acc, item) => {
        const pokemon = { ...item[1] }
        if (pokemon.id === id) {
          pokemon.active = true
        }

        acc[item[0]] = pokemon

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
