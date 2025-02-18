import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [title, setTitle] = useState('Default value');

  useEffect(() => {
    fetch("http://localhost:8080/helloworld")
        .then(response=>response=response.text())
        .then(text=> setTitle(text))
        .catch(error=>console.log("Error fetching hello ", error))
  }, [])

  return (
    <h1>React says  {title}</h1>
  )
}

export default App
