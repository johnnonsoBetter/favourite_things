import { Box, Grid, Paper, Skeleton } from '@mui/material'
import React from 'react'


export default function FavouritesLoading() {

    const array = [1,2,3,4,5,6,7,8,9] 

    return (
        <Box my={2} >

            <Grid container >
        
                {
                    array.map(m => (
                        <Grid xs={12} sm={6} md={4} key={m} >
                            <Box p={1}  >
                                <Paper sx={{p: 2 }} >
                                    <Box display='flex' alignItems="center" justifyContent='space-between' >
                                        <Skeleton width="60%" variant="text" />
                                        <Skeleton variant="circular" width={40} height={40} />


                                    </Box>

                                </Paper>
                                
                            </Box>
                        </Grid>
                    ))
                }
            </Grid>
        </Box>
    )

}