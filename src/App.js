import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Layout from './components/Layout/Layout'
import bg1 from './assets/bg1.jpg'

function App() {
  return (
    <div className='App'>
      <Header title={'Bonjour!'} descr={'guys'} />
      <Layout urlBg={bg1} title='This is Title' descr='This is Description' />
      <Layout colorBg title='This is Title' descr='This is Description' />
      <Layout urlBg={bg1} title='This is Title' descr='This is Description' />
      <Footer />
    </div>
  )
}

export default App
