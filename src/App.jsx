// import { useState } from 'react'
// import Account from "./components/Account"



function App() { // react is top to bottom unidirectional data flow
  // Hydration
  // 1. database-level (server) for now: localStorage
  //      - client / app-level
  //      - server-level
  // 2. state-level (component-level (e.g. root component, child component))
  // 3. prop-level (derived from parent component)

  // const accounts = [
  //   {id: 1, balance: 100},
  //   {id: 2, balance: 200},
  //   {id: 3, balance: 300},
  //   {id: 4, balance: 400},
  //   {id: 5, balance: 500},
  //   {id: 6, balance: 600},
  //   {id: 7, balance: 700},
  //   {id: 8, balance: 800},
  //   {id: 9, balance: 900},
  // ]

  // state
  // const array[first item, state variable, second item updater function] = useState hook ( initial value for the state variable)
  // const [isVisible, setIsVisible] = useState(true)

  console.log('Rerendering...')

  // event handlers
  // const toggleAccountList = () => {
  //   console.log('Toggling account list...')

  //   if (isVisible) {
  //     setIsVisible(false)
  //   } else setIsVisible(true)
  // }

  const reactClick = (e) => {
    console.log('on button click, react', e)
  }

  // jsx return
  return (
    <main>
      <button onClick={reactClick}>React Click me!</button>
      {/* <div>
        {accounts.map((account) => (
          <Account key={account.id} account={account} isVisible={isVisible} toggleAccountList={toggleAccountList} />
        ))}       
      </div> */}
    </main>
  )
}

export default App
