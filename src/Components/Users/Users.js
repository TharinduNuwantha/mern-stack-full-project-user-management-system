import { UserForm } from '../UserFrom/UserForm'
import { Box } from '@mui/material';
import { UserTable } from '../UserTable/UserTable';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';


export const Users = () => {
 
  const [users,setUsers] = useState([]);
  
  useEffect(()=>{
    getUsers();
  },[]);

  const getUsers = () =>{
      axios.get('http://localhost:3002/api/users')
            .then(response => {
              console.log(response.data.response);
              setUsers(response.data?.response || []);
            })
  }

  console.log("pakoo");
    
  return (
    <Box>
        <UserForm/>
        <UserTable rows={users}/>
    </Box>
  )
}
