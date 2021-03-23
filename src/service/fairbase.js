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

firebase.initializeApp(firebaseConfig)

export const fire = firebase

export const database = fire.database()

export default database
