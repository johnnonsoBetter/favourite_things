import { FavoriteRounded } from '@mui/icons-material'
import { LoadingButton } from '@mui/lab'
import { Avatar, Box, Paper, Typography } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { FetchContext } from '../../context/FetchContext'
import FavouriteContainer from '../favourite/FavouriteContainer'
import AddFavourite from './AddFavourite'


export default function Profile() {

    const {authAxios} = useContext(FetchContext)
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false)
    const [failed, setFailed] = useState(false)
    const {id} = useParams()


    useEffect(() => {
        authAxios.get(`api/v1/users/${id}`).then(res => {
            console.log(res, "for user")
        }).catch(err => {
            console.log(err)
        })
    }, [])


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

                    
                    
                </Box>

               
            </Paper>

            {/* <FavouriteContainer /> */}
        </Box>
    )
}




