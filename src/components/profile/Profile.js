import { FavoriteRounded } from '@mui/icons-material'
import { LoadingButton } from '@mui/lab'
import { Avatar, Box, Paper, Typography } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { FetchContext } from '../../context/FetchContext'
import { abbreviateName } from '../../utils/tool'
import FavouriteContainer from '../favourite/FavouriteContainer'
import Favourites from '../favourite/Favourites'
import FavouritesLoading from '../favourite/FavouritesLoading'
import AddFavourite from './AddFavourite'
import ProfileLoader from './ProfileLoader'


export default function Profile() {

    const {authAxios} = useContext(FetchContext)
    const [user, setUser] = useState(null) 
    const [favouriteThings, setFavouriteThings] = useState([])
    const [loading, setLoading] = useState(true)
    const [failed, setFailed] = useState(false)
    const {id} = useParams()

    useEffect(() => {
        authAxios.get(`api/v1/users/${id}`).then(res => {
            
            const {user} = res.data
            const {favourite_things} = user
            setUser(user)
            setFavouriteThings(favourite_things)
            setLoading(false)
        }).catch(err => {
            console.log(err)
        })
    }, [])


    return (
        <Box sx={{my: 5}}>
            <Paper sx={{
                p: 2,
                mx: 1
            }} >
                {
                    loading ?
                    <ProfileLoader /> :

                
                <Box display="flex" alignItems="center" justifyContent="space-between" >
                    <Box display="flex" alignItems="center">
                        <Avatar sx={{ width: 70, height: 70, textTransform: "uppercase" }} > {abbreviateName(user.name)} </Avatar>
                        <Typography  sx={{ml: 2}}>{user.name}</Typography>
                    </Box>
                </Box>

                }
               
            </Paper>

            {
                loading ?
                <FavouritesLoading /> : <Favourites favouriteThings={favouriteThings} />
            }

           
        </Box>
    )
}







