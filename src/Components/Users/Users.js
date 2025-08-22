import { UserForm } from '../UserFrom/UserForm'
import { Box } from '@mui/material';
import { UserTable } from '../UserTable/UserTable';

const users = [
    {
        id:1,
        name:'tharindu'
    },
    {
        id:2,
        name:'nuwantha'
    }
];

export const Users = () => {
 
  
    
  return (
    <Box>
        <UserForm/>
        <UserTable rows={users}/>
    </Box>
  )
}
