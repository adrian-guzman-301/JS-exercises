import { useState } from 'react'

import './App.css'
import ChildComponent from './ChildComponent.jsx'

function App() {

  const daysOfWeek = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
  const today = new Date()
  const currentDayName = daysOfWeek[today.getDay()]
  const threateningMessage = 'do not ever be alone'

  return (
    <>
      <ChildComponent 
      day={currentDayName}
      message={threateningMessage}
      />
    </>
  )
}

export default App
