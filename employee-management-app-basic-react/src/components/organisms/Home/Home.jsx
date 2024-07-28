import React from 'react'
import './Home.scss'
import EmployeeListScreen from '../../molecules/EmployeeListScreen'

const Home = () => {
  return (
    <div className="home">
      <EmployeeListScreen />
    </div>
  )
}

export default Home