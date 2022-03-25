import React from 'react'
import Intro from './components/Intro'
import Bugs from './components/Bugs'
import BountyWinners from './components/BountyWinners'
import Compaigns from './components/Compaigns'
import QandAList from './components/QandAList'
import { AppBar, Toolbar, Button, Typography} from '@mui/material'
import { Box } from '@mui/system'
import { Link } from 'react-router-dom'
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