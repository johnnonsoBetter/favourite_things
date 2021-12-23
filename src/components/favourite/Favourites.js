import { Box, Grid, ListItemIcon, Paper, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'


export default function Favourites(props) {

    const {favouriteThings} = props

    console.log(favouriteThings)

    return (
            <Box my={2} >
                <Grid container >
                    {
                        favouriteThings.map(fav => {

                            return (
                                <Grid xs={12} sm={6} md={4} key={fav.id} >
                                    <Box my={1} mx={1}  >
                                        <Link to={`/favourite_thing_types/${fav.slug}`} style={{textDecoration: 'none'}} >
                                        <Paper sx={{p: 2 }} >
                                            <Box display='flex' alignItems="center" justifyContent='space-between' >
                                                <Typography>
                                                    {fav.name}
                                                </Typography>
                                                <ListItemIcon>
                                                    <img src={`/images/fav/${fav.img}.png`} alt={fav.img} />
                                                </ListItemIcon>
                                            </Box>
                                        </Paper>
                                        </Link>
                                    </Box>
                                </Grid>
                            )
                        })
                    }

                </Grid>
            </Box>
    )
}