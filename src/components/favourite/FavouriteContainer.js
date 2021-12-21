import { FavoriteRounded } from '@mui/icons-material'
import { Box, Grid, ListItemIcon, Paper, Typography } from '@mui/material'
import React from 'react'


export default function FavouriteContainer() {


    return (
        <Box my={4}>
            

            <Box  display="flex" alignItems="center" >
                <FavoriteRounded />
                <Typography sx={{ml: 1}} > Favourites </Typography>
            </Box>

            <Box my={2} >

                <Grid container >
                
                    <Grid xs={12} sm={6} md={4} >
                        <Box p={1}  >
                            <Paper sx={{p: 2 }} >
                                <Box display='flex' alignItems="center" justifyContent='space-between' >
                                    <Typography>
                                        Vegetables
                                    </Typography>
                                    <ListItemIcon>
                                        <img src="/images/fav/vegetable.png" alt="vegetable" />
                                    </ListItemIcon>


                                </Box>

                                
                                
                            </Paper>
                           
                        </Box>
                    </Grid>

                    <Grid xs={12} sm={6} md={4} >
                        <Box p={1}  >
                            <Paper sx={{p: 2 }} >
                                <Box display='flex' alignItems="center" justifyContent='space-between' >
                                    <Typography>
                                        Fruits
                                    </Typography>
                                    <ListItemIcon>
                                        <img src="/images/fav/fruit.png" alt="fruit" />
                                    </ListItemIcon>


                                </Box>

                                
                                
                            </Paper>
                           
                        </Box>
                    </Grid>

                    <Grid xs={12} sm={6} md={4} >
                        <Box p={1}  >
                            <Paper sx={{p: 2 }} >
                                <Box display='flex' alignItems="center" justifyContent='space-between' >
                                    <Typography>
                                        Wines
                                    </Typography>
                                    <ListItemIcon>
                                        <img src="/images/fav/wine.png" alt="wine" />
                                    </ListItemIcon>


                                </Box>

                                
                                
                            </Paper>
                           
                        </Box>
                    </Grid>

                    <Grid xs={12} sm={6} md={4} >
                        <Box p={1}  >
                            <Paper sx={{p: 2 }} >
                                <Box display='flex' alignItems="center" justifyContent='space-between' >
                                    <Typography>
                                        Gadgets
                                    </Typography>
                                    <ListItemIcon>
                                        <img src="/images/fav/gadget.png" alt="gadget" />
                                    </ListItemIcon>


                                </Box>

                                
                                
                            </Paper>
                           
                        </Box>
                    </Grid>

                    <Grid xs={12} sm={6} md={4} >
                        <Box p={1}  >
                            <Paper sx={{p: 2 }} >
                                <Box display='flex' alignItems="center" justifyContent='space-between' >
                                    <Typography>
                                        Movies
                                    </Typography>
                                    <ListItemIcon>
                                        <img src="/images/fav/film.png" alt="film" />
                                    </ListItemIcon>


                                </Box>

                                
                                
                            </Paper>
                           
                        </Box>
                    </Grid>

                    <Grid xs={12} sm={6} md={4} >
                        <Box p={1}  >
                            <Paper sx={{p: 2 }} >
                                <Box display='flex' alignItems="center" justifyContent='space-between' >
                                    <Typography>
                                        Programming Language
                                    </Typography>
                                    <ListItemIcon>
                                        <img src="/images/fav/code.png" alt="code" />
                                    </ListItemIcon>


                                </Box>

                                
                                
                            </Paper>
                           
                        </Box>
                    </Grid>

                    <Grid xs={12} sm={6} md={4} >
                        <Box p={1}  >
                            <Paper sx={{p: 2 }} >
                                <Box display='flex' alignItems="center" justifyContent='space-between' >
                                    <Typography>
                                        Brands
                                    </Typography>
                                    <ListItemIcon>
                                        <img src="/images/fav/app.png" alt="brand" />
                                    </ListItemIcon>


                                </Box>

                                
                                
                            </Paper>
                           
                        </Box>
                    </Grid>

                    <Grid xs={12} sm={6} md={4} >
                        <Box p={1}  >
                            <Paper sx={{p: 2 }} >
                                <Box display='flex' alignItems="center" justifyContent='space-between' >
                                    <Typography>
                                        Pets
                                    </Typography>
                                    <ListItemIcon>
                                        <img src="/images/fav/pawprint.png" alt="pet" />
                                    </ListItemIcon>


                                </Box>

                                
                                
                            </Paper>
                           
                        </Box>
                    </Grid>
                </Grid>


            </Box>

            
                
            
        </Box>
    )
}