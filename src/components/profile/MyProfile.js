
import { Avatar, Box, Chip, Paper, Typography } from '@mui/material'
import React, { useContext, useState } from 'react'
import { AddFavContextProvider } from '../../context/AddFavContext'
import { AuthContext } from '../../context/AuthContext'
import HomeContext from '../../context/HomeContext'
import { abbreviateName } from '../../utils/tool'
import FavouriteContainer from '../favourite/FavouriteContainer'
import AddFavourite from './AddFavourite'


export default function MyProfile() {

    const [things, setThings] = useState([])
    const [changed, setChanged] = useState(false)
    const {userInfo} = useContext(AuthContext).authState 
    const {totalScore} = useContext(HomeContext)
    const {name} = JSON.parse(userInfo)

 
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
                    p: 2,
                    mx: 1
                }} >

                    <Box display="flex" alignItems="center" justifyContent="space-between" >
                        <Box display="flex" alignItems="center">
                            <Avatar sx={{ width: 70, height: 70 }}  ><Typography sx={{textTransform: "uppercase"}}>{abbreviateName(name)}</Typography></Avatar>
                            <Typography  sx={{ml: 2}}>{name}</Typography>


                            <Box m={1} mr={3}>

                                <Chip variant="outlined" label={totalScore} avatar={<Avatar src="/images/dollar.png" alt="coin" />} />

                            </Box>
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




