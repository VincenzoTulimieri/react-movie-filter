// importazione file
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import films from './data/film'

function App() {

  return (
    <>
      <Header/>
      <Main filmsList= {films}/>
    </>
  )
}

export default App
