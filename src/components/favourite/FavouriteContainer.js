import { FavoriteRounded } from '@mui/icons-material'
import { Box, Grid, ListItemIcon, Paper, Typography } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import AddFavContext from '../../context/AddFavContext'
import { FetchContext } from '../../context/FetchContext'
import Favourites from './Favourites'
import FavouritesLoading from './FavouritesLoading'


export default function FavouriteContainer({url}) {



    const {authAxios} = useContext(FetchContext)
    const [favouriteThings, setFavouriteThings] = useState([])
    const [loading, setLoading] = useState(false)
    const [failed, setFailed] = useState(false)
    const {changed} = useContext(AddFavContext)


    useEffect(() => {
        setLoading(true)
        authAxios.get(url).then(res => {
            
            setFavouriteThings(res.data)
            setLoading(false)
        }).catch(err => {
            console.log(err)
        })

    }, [changed])


    return (
        <Box my={4} mx={1}>
            

            <Box  display="flex" alignItems="center" >
                <FavoriteRounded sx={{ml: 1}}/>
                <Typography sx={{ml: 1}} > Favourites </Typography>
            </Box>

            {
                loading ? <FavouritesLoading /> :
                failed ? <Typography> failed to load </Typography> :
                <Favourites favouriteThings={favouriteThings} />


            }

            
                
            
        </Box>
    )
}