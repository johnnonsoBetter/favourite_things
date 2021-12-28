
import {Avatar, Box, Chip, Container, Tooltip } from '@mui/material'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import HomeContext from '../context/HomeContext'
import MyNav from './profile/MyNav'




export default function TopbarNav() {


    const {totalScore} = useContext(HomeContext)


    return (
        <Container sx={{pr: 0, pl: 0}}>
            <Box display="flex" justifyContent="space-between" alignItems="center">
                
                <Box  display="flex"  width={180}>
                    <Link to='/' style={{textDecoration: 'none'}} > 
                        <img src="/images/logo.png" alt="logo" style={{maxWidth: "100%"}} />

                    </Link>
                   
                </Box>
                <Box display="flex" alignItems="center">


                    <Box  mr={2} >
                        <Link to='/users' style={{textDecoration: 'none'}} > 
                                <Tooltip title="users">
                                    <img src="/images/people.png" alt="people" />
                                </Tooltip>

                        </Link>
                    </Box>
                   
                    

                    <Box  >
                        
                        <MyNav />

                       
                    </Box>

                </Box>
            </Box>
        </Container>
    )
}