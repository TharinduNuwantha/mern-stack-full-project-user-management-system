import React, { useEffect, useState } from 'react'
import { Button, Grid, Input, Typography } from "@mui/material"
import './UserForm.css';

export const UserForm = ({addUser,editUser,submit,data,isedit}) => {
  const [id, setId] = useState(0);
  const [name, setName] = useState('');


  useEffect(()=>{
    if(!submit){
        setId(0);
        setName('');
    }
  },[submit]);

  useEffect(()=>{
    if(data?.id && data.id !==0){
        setId(data.id);
        setName(data.name);
    }
  },[data]);

  return (
    <Grid
        container
        spacing={2}
        className="user-form-container"
        sx={{
            display:'block',
            maxWidth: '500px',
            margin: '0 auto'
        }}
    >
        <Grid item xs={12}>
          <Typography className="user-form-title" component="h1">
            User Form
          </Typography>
        </Grid>

        <Grid item xs={12} className="form-grid-item">
            <Typography 
                className="form-label"
                component={'label'}
                htmlFor='id'
            >
                ID
            </Typography>
            <div className="form-input-container">
                <Input 
                    className="form-input"
                    type='number'
                    id='id'
                    name='id'
                    value={id}
                    onChange={e => setId(e.target.value)}
                    placeholder="Enter user ID"
                />
            </div>
        </Grid>

        <Grid item xs={12} className="form-grid-item">
            <Typography 
                className="form-label"
                component={'label'}
                htmlFor='name'
            >
                Name
            </Typography>
            <div className="form-input-container">
                <Input 
                    className="form-input"
                    type='text'
                    id='name'
                    name='name'
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="Enter user name"
                />
            </div>
        </Grid>

        <Grid item xs={12} sx={{ textAlign: 'center', marginTop: '2rem' }}>
            <Button className="submit-button" onClick={()=> isedit?editUser({id,name}) : addUser({id,name})}>
                {
                    isedit?'Edit':'Add User'
                }
            </Button>
        </Grid>
    </Grid>
  )
}