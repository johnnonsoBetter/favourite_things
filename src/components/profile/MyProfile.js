import { FavoriteRounded } from '@mui/icons-material'
import { LoadingButton } from '@mui/lab'
import { Avatar, Box, Paper, Typography } from '@mui/material'
import React, { useContext, useState } from 'react'
import { AddFavContextProvider } from '../../context/AddFavContext'
import { AuthContext } from '../../context/AuthContext'
import FavouriteContainer from '../favourite/FavouriteContainer'
import AddFavourite from './AddFavourite'


export default function MyProfile() {

    const [things, setThings] = useState([])
    const [changed, setChanged] = useState(false)
    const {userInfo} = useContext(AuthContext).authState 
    const {name, slug} = JSON.parse(userInfo)

    console.log()


    console.log("this is the userinfo", userInfo)
    
 
    return (
        <AddFavContextProvider

            value={{
          
                things,
                changed,
                setChanged: (c) => setChanged(c),
                setThings: (t) => setThings(t)
            }}
                    
        >
            <Box sx={{my: 5}}>
                <Paper sx={{
                    p: 2
                }} >

                    <Box display="flex" alignItems="center" justifyContent="space-between" >
                        <Box display="flex" alignItems="center">
                            <Avatar sx={{ width: 70, height: 70 }}  ><Typography sx={{textTransform: "uppercase"}}>{name[0]}{name[1]}</Typography></Avatar>
                            <Typography  sx={{ml: 2}}>{name}</Typography>
                        </Box>

                        <Box>
                            <AddFavourite />
                            
                        </Box>
                        
                    </Box>

                
                </Paper>

                <FavouriteContainer url="/api/v1/favourite_things" changed={changed}  />
            </Box>
        </AddFavContextProvider>
        
    )
}




