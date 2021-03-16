import s from './style.module.css'

function GamePage({ onChangePage }) {
  const onClickBack = () => {
    onChangePage && onChangePage('app')
  }

  return (
    <div>
      <h1>Game</h1>
      <button onClick={onClickBack}>GO TO HOME</button>
    </div>
  )
}

export default GamePage
