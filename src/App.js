import React from 'react'
import { Container } from '@mui/material';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Bugs from './components/Bugs';
import Compaigns from './components/Compaigns';
import QandAList from './components/QandAList';
import BountyWinners from './components/BountyWinners';
import Footer from './components/Footer';
// import DetailBounties from './components/DetailBounties';
import DetailQandA from './components/DetailQandA';
import {
     Routes,
  Route,
}from "react-router-dom";
import DashBoard from './Dashboard'

const App = () => {
  return (
    <>

 {/* <Navbar /> */}

{/* <Intro />
<Bugs />
<Compaigns />
<QandAList />
<BountyWinners /> */}


<Container>

  <Routes>

          <Route path="Q&A/*" element={<DetailQandA />}/>

          <Route path="/" element={  <DashBoard />
}/>


           {/* <Route path="/bounty" element={<DetailBounties />} /> */}
        </Routes>
        </Container>

        <Footer />

 </>

    )
}

export default App

  
