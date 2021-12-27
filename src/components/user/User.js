import { FavoriteRounded } from '@mui/icons-material'
import { Avatar, Box, Paper, Stack, Typography } from '@mui/material'
import { red } from '@mui/material/colors'
import React from 'react'
import { useRouteMatch } from 'react-router-dom'
import { Link } from 'react-router-dom'
import {abbreviateName} from '../../utils/tool'

export default function User({user}) {

    const {name, total_fav, slug, score} = user
    const {path} = useRouteMatch()

    

    return (
        <Link style={{textDecoration: 'none'}} to={`${path}/${slug}`}>
            <Paper sx={{p: 2}} >
                <Stack alignItems="center" rowGap={2} >
                    <Avatar sx={{ width: 70, height: 70, textTransform: "uppercase"  }} >{abbreviateName(name)}</Avatar>
                    <Typography sx={{textTransform: "uppercase"}} >{name}</Typography>
                    <Box display="flex"  >
                        
                        <Stack  >
                            <FavoriteRounded sx={{color: red[400]}}/>
                             <Typography textAlign="center"> {total_fav}</Typography>

                        </Stack>

                        <Stack >
                             <img src="/images/dollar.png" alt="coin" />
                             <Typography textAlign="center" > {score}</Typography>

                        </Stack>
                        
                    </Box>
                </Stack>
            </Paper>
        </Link>
    )
}