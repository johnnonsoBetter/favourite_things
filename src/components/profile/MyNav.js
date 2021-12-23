import React, { useContext, useState } from 'react';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';

import Tooltip from '@mui/material/Tooltip';
import { LoadingButton } from '@mui/lab';
import { FavoriteRounded, LogoutRounded, VerifiedUserRounded } from '@mui/icons-material';
import {FetchContext} from '../../context/FetchContext'
import { AuthContext } from '../../context/AuthContext';
import { Link } from 'react-router-dom';
import { Button, Typography } from '@mui/material';
import { useHistory } from 'react-router-dom';


export default function MyNav() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const {authAxios} = useContext(FetchContext)
  const [loading, setLoading] = useState(false)
  const open = Boolean(anchorEl);
  const {logUserOut} = React.useContext(AuthContext)
  const history = useHistory()

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  const logout = () => {

    setLoading(true)
    authAxios.delete('api/v1/auth/sign_out').then((res) => {

        logUserOut()
        history.push('/login')
      
    }).catch(err => {
        setLoading(false)
    })

  }
 

//   React.useEffect(() => {

//     authAxios.get('api/v1/things/')
        
//         .then((res) => {
 
//           setThings(res.data)
         
 
//         }).catch(err => {
//             const {status} = err.response 
//             if (status === 401){
//                 setAuthState({})
//             }

            
//         })

//   }, [])


  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
       
        <Tooltip title="Me">
            <IconButton onClick={handleClick}>
                <img  src="/images/user.png" alt="profile" />
            </IconButton>
            
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        open={open}
       
        onClose={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
          <MenuItem disableRipple>
                <Link to='/' style={{textDecoration: 'none'}} > 
                    <Box display="flex"  alignItems="center"  >
                        <VerifiedUserRounded />
                        <Typography sx={{mx: 1}}> My Profile</Typography>
                    </Box>
                    
                </Link>
          </MenuItem>

          <MenuItem disableRipple>
                
                <Box display="flex" alignItems="center"  >
                    <LogoutRounded />
                    <LoadingButton loading={loading} onClick={logout} fullWidth sx={{mx: 1}}> Logout</LoadingButton>
                </Box>
          </MenuItem>
        
        
        
      </Menu>
    </React.Fragment>
  );
}

