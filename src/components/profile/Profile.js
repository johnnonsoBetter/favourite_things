import { FavoriteRounded } from '@mui/icons-material'
import { LoadingButton } from '@mui/lab'
import { Avatar, Box, Paper, Typography } from '@mui/material'
import React from 'react'
import FavouriteContainer from '../favourite/FavouriteContainer'


export default function Profile() {

    return (
        <Box sx={{my: 5}}>
            <Paper sx={{
                p: 2
            }} >

                <Box display="flex" alignItems="center" justifyContent="space-between" >
                    <Box display="flex" alignItems="center">
                        <Avatar sx={{ width: 70, height: 70 }} >JN</Avatar>
                        <Typography  sx={{ml: 2}}>John Nonso</Typography>
                    </Box>

                    <Box>
                        <LoadingButton color="error" endIcon={<FavoriteRounded />} variant="outlined" >Add</LoadingButton>
                    </Box>
                    
                </Box>

               
            </Paper>

            <FavouriteContainer />
        </Box>
    )
}




