import React from 'react'
import Intro from './components/Intro'
import Bugs from './components/Bugs'
import BountyWinners from './components/BountyWinners'
import Compaigns from './components/Compaigns'
import QandAList from './components/QandAList'
import DashboardNav from './components/DashboardNav'
const Dashboard = () => {
  return (
      <>
      <DashboardNav />
     <Intro />
     <Bugs />
     <Compaigns />
     <QandAList />
     <BountyWinners />

      </>   
 
    )
}

export default Dashboard