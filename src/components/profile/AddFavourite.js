import React, { useContext, useState } from 'react';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';

import { LoadingButton } from '@mui/lab';
import { DeleteRounded, FavoriteRounded, PlaylistAddRounded } from '@mui/icons-material';
import {FetchContext} from '../../context/FetchContext'
import { AuthContext } from '../../context/AuthContext';
import AddFavContext, { AddFavContextProvider } from '../../context/AddFavContext';

export default function AddFavourite() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  
  const [loading, setLoading] = useState(true)
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  const {authAxios} = useContext(FetchContext)
  const {setAuthState} = useContext(AuthContext)
  const {things, setThings} = useContext(AddFavContext)


  React.useEffect(() => {

    authAxios.get('api/v1/things/')
        
        .then((res) => {
 
          setThings(res.data)
         
 
        }).catch(err => {
            const {status} = err.response 
            if (status === 401){
                setAuthState({})
            }

            
        })

  }, [])


  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
       
        <Tooltip title="Add Favourite">
          <IconButton onClick={handleClick} size="small" sx={{ ml: 2 }}>
          <LoadingButton color="error" endIcon={<FavoriteRounded />} variant="outlined" >Add</LoadingButton>
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

          {
              things.map(thing => {
                const {added, id, name, img, favourite_thing_id} = thing
                return (

                    <MenuItem disableRipple key={id} > 
            
                        <Box width="100%" display="flex" justifyContent="space-between" alignItems="center" >
                        <ListItemIcon>
                            <img  src={`images/fav/${img}.png`}  alt={img} />
                        </ListItemIcon>
                        <Typography sx={{mx: 2}} textAlign="left"> {name}</Typography>
                        <FavButton isAdded={added} id={id} name={name} favourite_thing_id={favourite_thing_id} />
                        
                        </Box>
                    </MenuItem>
                   

                )
              })
          }
        
        
        
      </Menu>
    </React.Fragment>
  );
}



const FavButton = ({isAdded, id, favourite_thing_id, name}) => {

    const [added, setAdded] = useState(isAdded)
    const [loading, setLoading] = useState(false)
    const {things, setThings, changed, setChanged} = useContext(AddFavContext)
    const {authAxios} = useContext(FetchContext)


    

    const addFav = () => {

        setLoading(true)
        
       

        authAxios.post('api/v1/favourite_things', {favourite_thing: {thing_id: id}}).then(res => {
            console.log(res, "this is the response")
            const {data} = res
            const newThings = Object.assign([], things).map(thing => {
                console.log(thing.id == id, thing.name)
                if( thing.name == data.name ) {
                    return {name: thing.name, id: thing.id, added: true, img: thing.img, favourite_thing_id: data.id}
                }
                return {name: thing.name, id: thing.id, added: thing.added, img: thing.img, favourite_thing_id: thing.favourite_thing_id}
            })
            setThings(newThings)
            setLoading(false)
            setChanged(!changed)
        }).catch(err => {
            console.log(err)
            setLoading(false)
        })

        
        setAdded(true)
        
    }

    const removeFav = () => {

        if(favourite_thing_id === null)
            return
        setLoading(true)

        authAxios.delete(`api/v1/favourite_things/${favourite_thing_id}`).then(res => {
            const newThings = Object.assign(things, []).map(thing => {
                if( thing.name == name ) {
                    return {name: thing.name, id: thing.id, added: false, img: thing.img}
                }
                return {name: thing.name, id: thing.id, added: thing.added, img: thing.img, favourite_thing_id: thing.favourite_thing_id}
            })

            setThings(newThings)
            setLoading(false)
            setChanged(!changed)
        }).catch(err => {
            setLoading(false)
        })

        setAdded(false)
    }

    return (
        <>
        {
            added ?
            <LoadingButton onClick={removeFav}  variant="outlined" size="small" loading={loading} > <DeleteRounded /> </LoadingButton> :
            <LoadingButton onClick={addFav}  variant="outlined" size="small" loading={loading}> <PlaylistAddRounded /> </LoadingButton>
        }
        </>
    )
}