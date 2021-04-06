import { useHistory } from 'react-router-dom'
import s from './style.module.css'
import Header from '../../components/Header'
import Layout from '../../components/Layout'
import bg1 from '../../assets/bg1.jpg'

function HomePage() {
  const history = useHistory()

  const onClickButton = () => {
    history.push('/game')
  }

  return (
    <div className={s.App}>
      <Header
        title='Bonjour!'
        descr="let's begin"
        onClickButton={onClickButton}
      />
      <Layout urlBg={bg1} title='This is Title'>
        <p>
          In the game two players face off against one another, one side playing
          as "blue", the other as "red" on a 3x3 grid. Each player has five
          cards in a hand and the aim is to capture the opponent's cards by
          turning them into the player's own color of red or blue.
        </p>
        <p>
          In the game two players face off against one another, one side playing
          as "blue", the other as "red" on a 3x3 grid. Each player has five
          cards in a hand and the aim is to capture the opponent's cards by
          turning them into the player's own color of red or blue.
        </p>
      </Layout>

      <Layout urlBg={bg1} title='This is Title'>
        <p>
          In the game two players face off against one another, one side playing
          as "blue", the other as "red" on a 3x3 grid. Each player has five
          cards in a hand and the aim is to capture the opponent's cards by
          turning them into the player's own color of red or blue.
        </p>
        <p>
          In the game two players face off against one another, one side playing
          as "blue", the other as "red" on a 3x3 grid. Each player has five
          cards in a hand and the aim is to capture the opponent's cards by
          turning them into the player's own color of red or blue.
        </p>
      </Layout>
    </div>
  )
}

export default HomePage
