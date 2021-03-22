import firebase from 'firebase/app'
import 'firebase/database'

const firebaseConfig = {
  apiKey: 'AIzaSyBhYnqiF5yecLEwmsHnwX3YTyLgfCsTgIA',
  authDomain: 'pokemon-game-670eb.firebaseapp.com',
  databaseURL: 'https://pokemon-game-670eb-default-rtdb.firebaseio.com',
  projectId: 'pokemon-game-670eb',
  storageBucket: 'pokemon-game-670eb.appspot.com',
  messagingSenderId: '52025650877',
  appId: '1:52025650877:web:4580323ac8699b598051d4',
}
class Firebase {
  constructor() {
    firebase.initializeApp(firebaseConfig)

    this.fire = firebase
    this.database = this.fire.database()
  }

  getPokemonsSocket = (callback) => {
    this.database.ref('pokemons').on('value', (snapshot) => {
      callback(snapshot.val())
    })
  }

  getPokemonsOnce = async () => {
    return await this.database
      .ref('pokemons')
      .once('value')
      .then((spanpshot) => spanpshot.val())
  }

  postPokemon = (key, pokemon) => {
    this.database.ref(`pokemons/${key}`).set(pokemon)
  }

  addPokemon = (poke, callback) => {
    const newKey = this.database.ref().child('pokemons').push().key
    this.database
      .ref('pokemons/' + newKey)
      .set(poke)
      .then(() => callback())
  }
}

export default Firebase
