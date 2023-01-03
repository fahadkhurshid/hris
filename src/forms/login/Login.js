import * as React from 'react';
import {useNavigate} from 'react-router-dom';
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import TextField from '@mui/joy/TextField';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';
import axios from 'axios';

function ModeToggle() {
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = React.useState(false);

  // necessary for server-side rendering
  // because mode is undefined on the server
  React.useEffect(() => {
    setMounted(true);
    axios({
      method: 'post',
      url:'http://localhost:80/hris/login',
      data: {
        'username': 'yasir@ntoc',
        'password': '1234'
      }
    })
      .then(function (response) {
        console.log(response);
        // response.data.forEach(element => {
        //   if(element.employee_type === '4'){
        //     nietos.push({'id':element.id,'fname':element.fname,'lname':element.lname,'contact':element.contact})
        //   }
        // }

        // response.data.forEach(()nietos.push({'id':response.data.id,'fname':response.data.fname,'lname':response.data.lname,'employee_type':'Consultant'}));
        // setTableData(nietos);
      });
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Button
      variant="outlined"
      onClick={() => {
        setMode(mode === 'light' ? 'dark' : 'light');
      }}
    >
      {mode === 'light' ? 'Turn dark' : 'Turn light'}
    </Button>
  );
}



export default function Login() {
  const navigate = useNavigate();
  return (
    <CssVarsProvider>
      <ModeToggle/>
<Sheet
  sx={{
    width: 300,
    mx: 'auto', // margin left & right
    my: 4, // margin top & botom
    py: 3, // padding top & bottom
    px: 2, // padding left & right
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
    borderRadius: 'sm',
    boxShadow: 'md',
  }}
>
<Typography level="h4" component="h1">
    Welcome!
  </Typography>
  <Typography level="body2">Sign in to continue.</Typography>

  <TextField
  // html input attribute
  name="email"
  type="email"
  placeholder="yasirfayyaz@email.com"
  // pass down to FormLabel as children
  label="Email"
/>
<TextField
  name="password"
  type="password"
  placeholder="password"
  label="Password"
/>
<Button sx={{ mt: 1 /* margin top */ }} onClick={()=>navigate('/')}>
  Log in
</Button>
<Typography
  endDecorator={<Link href="/sign-up">Sign up</Link>}
  fontSize="sm"
  sx={{ alignSelf: 'center' }}
>
  Don't have an account?
</Typography>

</Sheet>
    </CssVarsProvider>
  );
}