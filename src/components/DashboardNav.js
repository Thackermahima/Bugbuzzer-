import React, { useState} from 'react'
import { AppBar, Toolbar, Button, Typography} from '@mui/material'
import { Box } from '@mui/system'
import { Link } from 'react-router-dom'
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Hidden } from '@mui/material';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';

const DashboardNav = () => {
  const[open, setOpen] = useState(false)

  return (
<AppBar color='inherit' position='fixed' sx={{ height:'70px'}}>

<Toolbar >
  <Typography flexGrow={1}>
    <Link to = "/">
  <img src="BugBuzzer-Logo-Web.png" alt="logo"/>
  </Link>

  </Typography>
 <Hidden mdDown>
<Box >


<Link to="/Q&A" style={{ textDecoration: 'none' }}>
<Button style={{color:'black', fontWeight:'bold' ,textTransform:'capitalize'}} size='medium' variant='text'>
Q&A
</Button>
</Link>

<Button style={{color:'black', fontWeight:'bold' ,textTransform:'capitalize'}} size='medium' variant='text'>
Bounty Campaign
</Button>
<Button style={{color:'black', fontWeight:'bold' ,textTransform:'capitalize'}} size='medium' variant='text'>
Hire Experts  </Button>

<Link to="/Question-form" style={{ textDecoration: 'none' }}>
<Button variant="contained" size='small' style={{backgroundColor:"#D82148",textTransform:'capitalize',border:'2px solid #D82148', marginRight:'18px', fontWeight:'bold'}} sx={{borderRadius:2}}>Ask question</Button>
</Link>
</Box>
</Hidden> 


<Hidden mdUp>
<IconButton>
 <MenuIcon  onClick={() => setOpen(true)}/>
</IconButton>
</Hidden>
      </Toolbar>
      <SwipeableDrawer anchor='top' open={open} onOpen={ () => setOpen(true)} onClose={() => setOpen(false)}> 
      <Box  p ={2}>


<Link to="/Q&A" style={{ textDecoration: 'none' }}>
<Button style={{color:'black', fontWeight:'bold' ,textTransform:'capitalize'}} size='medium' variant='text'>
Q&A
</Button>
</Link>

<Button style={{color:'black', fontWeight:'bold' ,textTransform:'capitalize'}} size='medium' variant='text'>
Bounty Campaign
</Button>
<Button style={{color:'black', fontWeight:'bold' ,textTransform:'capitalize'}} size='medium' variant='text'>
Hire Experts  </Button>
<Link to="/Question-form"style={{ textDecoration: 'none' }} >
<Button variant="contained" size='small' style={{backgroundColor:"#D82148",textTransform:'capitalize',border:'2px solid #D82148', marginRight:'18px', fontWeight:'bold'}} sx={{borderRadius:2}}>Ask question</Button>
</Link>
</Box>



      </SwipeableDrawer>
 
</AppBar>    )
}

export default DashboardNav