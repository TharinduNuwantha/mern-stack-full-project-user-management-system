import { UserForm } from '../UserFrom/UserForm'
import { Box } from '@mui/material';
import { UserTable } from '../UserTable/UserTable';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import React from 'react';


export const Users = () => {
 
  const [users,setUsers] = useState([]);
  const [submit,setSubmit] = useState(false);
  const [isedit,setIsEdit] = useState();
  const [selectedUser,setSelecttedUSer] = useState({});
  
  useEffect(()=>{
    getUsers();
    console.log("pakoo");
  },[]);

  const getUsers = () =>{
      axios.get('http://localhost:3002/api/users')
            .then(response => {
              console.log('mama run wenawa yakoo...');
              setUsers(response.data?.response || []);
            })
            .catch(error => {
              console.log(error);
            })  
     
  }

  
  const addUser = (data)=>{
    setSubmit(true);
    const payload = {
      id : data.id,
      name : data.name
    }
    axios.post('http://localhost:3002/api/createuser',payload)
    .then(()=>{
      getUsers();
      setSubmit(false);
      isedit(false);
    })
    .catch(error =>{
      console.error("axios error :( ",error);
    })
  }

    const editUser = (data)=>{
    setSubmit(true);
    const payload = {
      id : data.id,
      name : data.name
    }
    axios.post('http://localhost:3002/api/updateeuser',payload)
    .then(()=>{
      getUsers();
      setSubmit(false);
      isedit(true)
    })
    .catch(error =>{
      console.error("axios error :( ",error);
    })
  }
    
  return (
    <Box>
        <UserForm addUser={addUser} editUser={editUser} submit={submit} data={selectedUser} isedit={isedit}/>
        <UserTable rows={users}
          selectedUser={data=>{
            setSelecttedUSer(data);
            setIsEdit(true)
          }}
        />
    </Box>
  )
}
