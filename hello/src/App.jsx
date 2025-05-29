import './App.css'
import Body from './components/Body'
import Header from './components/Header'
import { useState, useEffect } from 'react'

function App() {

  const [characters, setCharacters] = useState([])
    useEffect(() => {
        fetch('https://hp-api.onrender.com/api/characters')
        .then((res) => res.json())
        .then(setCharacters)
        .catch((err) => console.log('Erro na API:', err))
    },[])

  return (
    <>
      <Header />
      <Body characters={characters} />

    </>
  )
}

export default App