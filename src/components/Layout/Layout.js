import style from './style.module.css'

const Layout = ({ title, descr, urlBg, colorBg }) => {
  return (
    <section
      className={style.root}
      style={{
        backgroundImage: `url(${urlBg})`,
        backgroundColor: colorBg ? '#333' : 'none',
      }}
    >
      <div className={style.wrapper}>
        <article>
          <div className={style.title}>
            <h3>{title}</h3>
            <span className={style.separator}></span>
          </div>
          <div className={style.desc.full}>
            <p>{descr}</p>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Layout
