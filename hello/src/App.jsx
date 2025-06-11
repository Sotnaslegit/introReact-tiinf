import './App.css'
import Body from './components/Body'
import Header from './components/Header'
import { useState, useEffect } from 'react'

function App() {

  const [searchTerm,setSearchTerm] = useState('')

  const [characters, setCharacters] = useState([])
    useEffect(() => {
        fetch('https://hp-api.onrender.com/api/characters')
        .then((res) => res.json())
        .then(setCharacters)
        .catch((err) => console.log('Erro na API:', err))
    },[])

    const filtredCharacters = characters.filter((char)=>
      char.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className='App'>
      <Header searchTerm = {searchTerm} setSearchTerm = {setSearchTerm}/>
      <Body characters={filtredCharacters} />

    </div>
  )
}

export default App