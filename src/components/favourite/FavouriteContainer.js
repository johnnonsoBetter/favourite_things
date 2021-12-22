import { FavoriteRounded } from '@mui/icons-material'
import { Box, Grid, ListItemIcon, Paper, Typography } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import AddFavContext from '../../context/AddFavContext'
import { FetchContext } from '../../context/FetchContext'
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
        <Box my={4}>
            

            <Box  display="flex" alignItems="center" >
                <FavoriteRounded />
                <Typography sx={{ml: 1}} > Favourites </Typography>
            </Box>

            {
                loading ? <FavouritesLoading /> :
                failed ? <Typography> failed to load </Typography> :

            
            

            <Box my={2} >

                <Grid container >

                    {
                        favouriteThings.map(fav => {

                            return (
                                <Grid xs={12} sm={6} md={4} key={fav.id} >
                                    <Box p={1}  >
                                        <Paper sx={{p: 2 }} >
                                            <Box display='flex' alignItems="center" justifyContent='space-between' >
                                                <Typography>
                                                    {fav.name}
                                                </Typography>
                                                <ListItemIcon>
                                                    <img src={`images/fav/${fav.img}.png`} alt={fav.img} />
                                                </ListItemIcon>


                                            </Box>

                                            
                                            
                                        </Paper>
                                    
                                    </Box>
                                </Grid>
                            )
                        })
                    }

                   {

                   }
                </Grid>


            </Box>
            }

            
                
            
        </Box>
    )
}