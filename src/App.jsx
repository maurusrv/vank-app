import { useState } from 'react'
import FunctionalComponent from './components/FunctionalComponent'
import ClassicalComponent from './components/ClassicalComponent'

function App() {
  const [isFunctionalVisible, setIsFunctionalVisible] = useState(true)
  const [isClassicalVisible, setIsClassicalVisible] = useState(true)

  const toggleFunctional = () => setIsFunctionalVisible((prevState) => !prevState)
  const toggleClassical = () => setIsClassicalVisible((prevState) => !prevState)

  return (
    <div>
      <main style={{
        display: 'flex',
        justifyContent: 'space-between'
      }}>
        {isFunctionalVisible && <FunctionalComponent username="batman" />}
        {isClassicalVisible ? <ClassicalComponent username="joker" /> : null}
      </main>
      <div style={{ display: 'flex', justifyContent: 'space-between'}}>
        <button onClick={toggleFunctional}>Toggle Functional</button>
        <button onClick={toggleClassical}>Toggle Classical</button>
      </div>
    </div>
  )
}

export default App
