import React,{useEffect,useState} from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
// import AddIcon from '@mui/icons-material/Add';
// import { createBox, createTheme } from '@mui/system';
import { Box } from '@mui/material';
// import BasicModal from '../../forms/add_user/Add_User';
import CustomizedDialogs from '../../components/dialog';
import AddUser from '../../forms/add_user/AddUser';
// import AddIcon from '@mui/material/Add'
import axios from 'axios';
// import { padding } from '@mui/system';
// import ContainerResponsive from '../container/ContainerResponsive';

// const rows: GridRowsProp = [
//   { id: 1, col1: 'Hello', col2: 'World' },
//   { id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
//   { id: 3, col1: 'MUI', col2: 'is Amazing' },
// ];

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID' },
    { field: 'fname', headerName: 'Fname', width: 100 },
    { field: 'lname', headerName: 'LName', width: 150 },
    { field: 'contact', headerName: 'Contact', width: 150 }
];

// const api = axios.create({
//   baseURL: process.env.REACT_APP_BASE_URL || "http://localhost:80/hris",
//  });

const UserList = () => {
  const [tableData, setTableData] = useState([])

  var nietos = [];
  useEffect(() => {
    axios({
      method: 'get',
      url:'http://localhost:80/hris/user_list',
      headers: {
        'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiMiIsInNpdGUiOiI1IiwiZnVsbF9uYW1lIjoiWWFzaXIgRmF5eWF6IiwidXNlcm5hbWUiOiJ5YXNpckBudG9jIiwiY29udGFjdCI6IjAzMjEzMTE1Nzg3Iiwicm9sZSI6IjgiLCJzdGF0dXMiOiIxIn0.GLGF8y0pmyhMQ1DRcU0La72_26gBsOZjFjMCsKXl5F0',
      }
    }
    )
      .then(function (response) {
        console.log(response.data);
        response.data.forEach(element => {
          if(element.employee_type === '4'){
            nietos.push({'id':element.id,'fname':element.fname,'lname':element.lname,'contact':element.contact})
          }
        }
          );
        // response.data.forEach(()nietos.push({'id':response.data.id,'fname':response.data.fname,'lname':response.data.lname,'employee_type':'Consultant'}));
        setTableData(nietos);
      });

    },[])


    console.log(tableData)
    return (
    <>
  <div style={{height:500, width: '100%', marginBottom:'2px' }}>
  <Box sx={{marginLeft:'97%', position: "absolute",bottom:'325px',right:'22px'}}>
      <CustomizedDialogs size='small'>
      <AddUser/>
      </CustomizedDialogs>

    </Box>
    <DataGrid rows={tableData} columns={columns} />
  </div>
    </>
  )
}

export default UserList