import { FavoriteRounded } from '@mui/icons-material'
import { Avatar, Box, Paper, Stack, Typography } from '@mui/material'
import React from 'react'

export default function User({user}) {

    // const {name, id, total_fav, coin} = user
    return (
        <Box >
            <Paper sx={{p: 2}} >
                <Stack alignItems="center" >
                    <Avatar sx={{ width: 70, height: 70 }} >JN</Avatar>
                    <Typography sx={{my: 1}}>John Nonso</Typography>
                    <Box display="flex"  >
                        <FavoriteRounded />
                        <Typography> 7</Typography>
                    </Box>
                </Stack>
            </Paper>
        </Box>
    )
}