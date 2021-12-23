import { Box, Paper, Skeleton } from '@mui/material'
import React from 'react'



export default function ProfileLoader() {

    return (
       
            
                <Box display="flex" alignItems="center">
                   
                    <Skeleton variant="circular" sx={{mr: 2}} width={70} height={70} />
                    <Skeleton width="20%" variant="text"  />
                </Box>

          

    )

}