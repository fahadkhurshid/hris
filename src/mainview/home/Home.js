import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { AppBar, Toolbar,IconButton,Typography, Tabs, Tab, Button, useMediaQuery,useTheme } from "@mui/material";
import ThreePIcon from '@mui/icons-material/ThreeP';
// import Logo from '../../assets/icons/logo.jpg';
import DrawerComp from '../drawer/DrawerComp';
// import UserList from '../users/UserList';
import ContainerResponsive from '../container/ContainerResponsive';
import AttandanceList from '../attandance/AttandanceList';

const PAGES = ["Users","Attendance","Remarks","Teams","Projects"]

const Home = () => {

  const navigate = useNavigate();
  const [value,setValue] = useState(0);

  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down('md'));
  console.log(isMatch);
  return (
    <>
        <AppBar position='static' sx={{background:'#063970'}}>
          <Toolbar>
            <IconButton size='large' edge='start' color='inherit' aria-label='Logo'>
              <ThreePIcon/>
            </IconButton>
            {
              isMatch ? (
                <>
                <Typography sx={{fontSize:'1.5rem', paddingLeft:'10%'}}>HR APP</Typography>
                <DrawerComp/>
                </>
              ):
              (
                <>
                <Typography variant='h6' component='div'>
              HR APP
            </Typography>
            <Tabs textColor='inherit' value={value} onChange={(e,value)=>setValue(value)} indicatorColor='secondary'>
              {
                PAGES.map((page,index) => (
                  <Tab key={index} label={page} />
                ))
              }
            </Tabs>
            <Button sx={{marginLeft:"auto"}} onClick={()=>navigate('login')} variant='contained'>Logout</Button>
                </>
              )
            }
          </Toolbar>
        </AppBar>
        { value === 0 && <ContainerResponsive name={value}></ContainerResponsive> }
      { value === 1 && <AttandanceList/>}
    </>
  )
}

export default Home