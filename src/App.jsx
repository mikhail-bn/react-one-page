//import { useState } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import AppHeader from './components/header';
import AppHero from './components/hero';
import AppAbout from './components/about';
import AppServices from './components/services';
import AppWorks from './components/works';
import AppTeam from './components/team'


export default function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <header id='header'>
        <AppHeader />
      </header>
      <main>
        <AppHero />
        <AppAbout />
        <AppServices />
        <AppWorks />
        <AppTeam />
      </main>
    </>
  )
}


