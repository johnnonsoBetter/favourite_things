import { Box, Skeleton, Stack } from '@mui/material'
import React from 'react'


export default function GuessLoading() {

    return (
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" >
            
            
            <Box display="flex" justifyContent="center" >
                <Skeleton  sx={{mr: 2}} width={140} height={140} />
            </Box>

            <Box my={5} display="flex" justifyContent="space-around" >
                
                <Skeleton width={50} sx={{m: 1}} height={50} />
                <Skeleton width={50} sx={{m: 1}} height={50} />
                <Skeleton width={50} sx={{m: 1}} height={50} />
                
                
            </Box>
        </Box>
    )
}