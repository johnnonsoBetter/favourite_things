import { PeopleRounded, SportsEsportsRounded } from '@mui/icons-material'
import { Avatar, Box, Chip, Container, Stack, Tooltip, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'




export default function TopbarNav() {


    return (
        <Container>
            <Box display="flex" justifyContent="space-between">
                <Typography> Logo</Typography>
                <Box display="flex" alignItems="center">

                    <Box  m={1} mr={3}>

                        <Chip variant="outlined" label="900" avatar={<Avatar src="/images/dollar.png" />} />

                    </Box>

                    <Box m={1} mr={2} >
                        <Link to='/users' style={{textDecoration: 'none'}} > 
                                <Tooltip title="users">
                                    <img src="/images/people.png" alt="people" />
                                </Tooltip>

                        </Link>
                    </Box>
                   
                    

                    <Box m={1} >
                        <Link to='/game' style={{textDecoration: 'none'}} > 

                                <Tooltip title="profile">
                                    <img src="/images/user.png" alt="people" />
                                </Tooltip>

                        </Link>
                    </Box>

                </Box>
            </Box>
        </Container>
    )
}