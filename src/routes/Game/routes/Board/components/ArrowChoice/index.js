import cn from 'classnames'

import s from './style.module.css'

const ArrowChoice = ({ side = 0 }) => {
  return (
    <div
      className={cn(s.arrow, {
        [s.rightSide]: side === 2,
        [s.leftSide]: side === 1,
      })}
    />
  )
}

export default ArrowChoice
