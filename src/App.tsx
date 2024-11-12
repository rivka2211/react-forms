import { useState } from 'react'

import './App.css'
import OneTask from './component/OneTask'
import TaskList from './component/TaskList'

function App() {


  return (
    <>
      {/* <OneTask task={{
        id: '1',
        des: 'learn',
        date: new Date(7,11,2024)
      }}/> */}
      <TaskList/>
    </>
  )
}

export default App
