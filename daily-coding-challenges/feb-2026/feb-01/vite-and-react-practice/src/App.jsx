import { useState } from 'react'
import axios from 'axios'
import './App.css'
import ChildComponent from './ChildComponent.jsx'
import CatFetcher from './CatFetcher.jsx'

function App() {

  const daysOfWeek = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
  const today = new Date()
  const currentDayName = daysOfWeek[today.getDay()]
  const threateningMessage = 'do not ever be alone'
  const handleAction = () => {
  console.log("clicked") }

  return (
    <>
      <ChildComponent 
      day={currentDayName}
      message={threateningMessage}
      iceCream={handleAction}
      />
      <CatFetcher 
      />
    </>
  )
}

export default App
