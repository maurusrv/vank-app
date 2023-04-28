import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {

  const firstName = "Tyler Durden"

  return (
    <main>
      <Header firstName={firstName} />
      Hello World!
      <Footer firstName={firstName} />
    </main>
  )
}

export default App
