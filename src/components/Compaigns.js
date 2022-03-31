import React from 'react'
import { Stack, Typography, Button , Container, Grid} from '@mui/material'
import {  Box } from '@mui/system'
import { Link } from 'react-router-dom'
const Compaigns = () => {
    
  return (
      <>

     <Container>
      <Typography variant='h4' fontWeight='bold'  mt={14} mb={-4}>
 Join <span style ={{color:'#D82148'}}>BugBounty</span> campaigns
</Typography>

<Grid container item justifyContent="flex-end"  mt={{md: 3, sm: 4, xs:4, lg:0}}>
<Button style ={{color:'#D82148', textTransform:'capitalize',border:'1px solid #D82148', marginRight:'8x',fontWeight:'bold'}} size = "small" variant="outlined"  sx={{borderRadius:2, mr:1}}>
view all
</Button>


 <Button variant="contained" size='small' style={{backgroundColor:"#D82148",textTransform:'capitalize',border:'2px solid #D82148', marginRight:'18px', fontWeight:'bold'}} sx={{borderRadius:2}}>Create Bugbounty</Button>
         </Grid>
         <Grid>

         <Stack direction="row" mt={4} flexWrap='wrap' justifyContent='space-between'>

<Box

sx={{
    height: '230px',
    width: '500px',
    border: '1px solid #D82148',
    background: '#FFFFFF',
    p: 1,
    m: 1,
}}
>
<Typography variant="subtitle1" fontStyle='bold' fontWeight= "700" ml={1} mb={1} mt={1}>Security Bounty report Challange by Polygon</Typography>
        <Typography variant="subtitle2" fontStyle='bold' fontWeight= "550" ml={1} mt={1}> Prize :<span style={{color:"#D82148" , fontWeight:"10"}}>  1000 USDC and polygon Dev NFT </span></Typography>
        <Typography variant="subtitle2" fontStyle='bold' fontWeight= "550" ml={1} mt={1}>Category :<span style={{ fontWeight:"10"}}>  Security | Functional | UI/UX </span></Typography>
        <Typography variant="subtitle2" fontStyle='bold' fontWeight= "550" ml={1} mt={1}>Duration : <span style={{ fontWeight:"10"}}> 10 March 2022 to 22 April 2022 </span></Typography>
<Link to = "Participate-form/*" style={{ textDecoration: 'none' }}>

<Button  size="medium" style={{fontSize:"11px", fontWeight:"bold", backgroundColor:"#D82148" ,color:'white', marginTop:'30px',textTransform:'capitalize'}}>Paticipate</Button>
</Link>

</Box>


<Box

sx={{
    height: '230px',
    width: '500px',
    border: '1px solid #D82148',
    background: '#FFFFFF',
    p: 1,
    m: 1,
}}
>
<Typography variant="subtitle1" fontStyle='bold' fontWeight= "700" ml={1} mb={1} mt={1}>Security Bounty report Challange by Polygon</Typography>
        <Typography variant="subtitle2" fontStyle='bold' fontWeight= "550" ml={1} mt={1}> Prize :<span style={{color:"#D82148" , fontWeight:"10"}}>  1000 USDC and polygon Dev NFT </span></Typography>
        <Typography variant="subtitle2" fontStyle='bold' fontWeight= "550" ml={1} mt={1}>Category :<span style={{ fontWeight:"10"}}>  Security | Functional | UI/UX </span></Typography>
        <Typography variant="subtitle2" fontStyle='bold' fontWeight= "550" ml={1} mt={1}>Duration : <span style={{ fontWeight:"10"}}> 10 March 2022 to 22 April 2022 </span></Typography>
        <Link to = "Participate-form/*" style={{ textDecoration: 'none' }}>
             <Button  size="medium" style={{fontSize:"11px", fontWeight:"bold", backgroundColor:"#D82148" ,color:'white', marginTop:'30px',textTransform:'capitalize'}}>Paticipate</Button>
</Link>
</Box>

<Box

sx={{
    height: '230px',
    width: '500px',
    border: '1px solid #D82148',
    background: '#FFFFFF',
    p: 1,
    m: 1,

}}
>
<Typography variant="subtitle1" fontStyle='bold' fontWeight= "700" ml={1} mb={1} mt={1}>Security Bounty report Challange by Polygon</Typography>
        <Typography variant="subtitle2" fontStyle='bold' fontWeight= "550" ml={1} mt={1}> Prize :<span style={{color:"#D82148" , fontWeight:"10"}}>  1000 USDC and polygon Dev NFT </span></Typography>
        <Typography variant="subtitle2" fontStyle='bold' fontWeight= "550" ml={1} mt={1}>Category :<span style={{ fontWeight:"10"}}>  Security | Functional | UI/UX </span></Typography>
        <Typography variant="subtitle2" fontStyle='bold' fontWeight= "550" ml={1} mt={1}>Duration : <span style={{ fontWeight:"10"}}> 10 March 2022 to 22 April 2022 </span></Typography>
        <Link to = "Participate-form/*" style={{ textDecoration: 'none' }}>
        <Button  size="medium" style={{fontSize:"11px", fontWeight:"bold", backgroundColor:"#D82148" ,color:'white', marginTop:'30px',textTransform:'capitalize'}}>Paticipate</Button>
</Link>
</Box>
<Box

sx={{
    height: '230px',
    width: '500px',
    border: '1px solid #D82148',
    background: '#FFFFFF',
    p: 1,
    m: 1,

}}
>
<Typography variant="subtitle1" fontStyle='bold' fontWeight= "700" ml={1} mb={1} mt={1}>Security Bounty report Challange by Polygon</Typography>
        <Typography variant="subtitle2" fontStyle='bold' fontWeight= "550" ml={1} mt={1}> Prize :<span style={{color:"#D82148" , fontWeight:"10"}}>  1000 USDC and polygon Dev NFT </span></Typography>
        <Typography variant="subtitle2" fontStyle='bold' fontWeight= "550" ml={1} mt={1}>Category :<span style={{ fontWeight:"10"}}>  Security | Functional | UI/UX </span></Typography>
        <Typography variant="subtitle2" fontStyle='bold' fontWeight= "550" ml={1} mt={1}>Duration : <span style={{ fontWeight:"10"}}> 10 March 2022 to 22 April 2022 </span></Typography>
        <Link to = "Participate-form/*" style={{ textDecoration: 'none' }}>
        <Button  size="medium" style={{fontSize:"11px", fontWeight:"bold", backgroundColor:"#D82148" ,color:'white', marginTop:'30px',textTransform:'capitalize'}}>Paticipate</Button>
</Link>
</Box>
</Stack>
</Grid>
</Container>
     </>


    )
}

export default Compaigns

