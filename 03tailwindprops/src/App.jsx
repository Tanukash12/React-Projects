import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {

  return (
    <>
      <h4 className='bg-green-400 text-black p-4 rounded-xl '>Tailwind test</h4>

    <Card username="TeaKay" btn="Follow Me" />
    <Card username="Hurr" btn="View Profile"/>
    
    </>
  )
}

export default App
