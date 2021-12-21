import { Box, Grid } from '@mui/material'
import React from 'react'
import User from './User'

export default function Users() {


    return (
        <Box my={3}>
            

            <Grid container >
                <Grid item xs={12} sm={6} md={4} >
                    <Box p={1} >
                    <User />
                    </Box>
                </Grid>

                <Grid item xs={12} sm={6} md={4} >
                    <Box p={1} >
                    <User />
                    </Box>
                </Grid>

                <Grid item xs={12} sm={6} md={4} >
                    <Box p={1} >
                    <User />
                    </Box>
                </Grid>

                <Grid item xs={12} sm={6} md={4} >
                    <Box p={1} >
                    <User />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}