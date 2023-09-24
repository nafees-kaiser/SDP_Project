import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import style from './App.module.css' // Updated the import

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className={style.logo} alt="Vite logo" /> {/* Updated class name */}
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className={`${style.logo} ${style.react}`} alt="React logo" /> {/* Updated class names */}
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className={style.card}> {/* Updated class name */}
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className={style['read-the-docs']}> {/* Updated class name */}
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
