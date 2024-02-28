import { useState } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import AppHeader from './components/header';
import AppHero from './components/hero';


export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header id='header'>
        <AppHeader />
      </header>
      <main>
        <AppHero />
      </main>
    </>
  )
}


