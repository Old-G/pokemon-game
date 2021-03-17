import style from './style.module.css'
import cn from 'classnames'

const Layout = ({ title, urlBg, colorBg, children }) => {
  return (
    <section
      className={style.root}
      style={{
        backgroundImage: urlBg ? `url(${urlBg})` : colorBg,
        backgroundColor: colorBg ? '#ffffffaa' : 'none',
      }}
    >
      <div className={style.wrapper}>
        <article>
          <div className={style.title}>
            <h3>{title}</h3>
            <span className={style.separator}></span>
          </div>
          <div className={cn(style.desc, style.full)}>{children}</div>
        </article>
      </div>
    </section>
  )
}

export default Layout
