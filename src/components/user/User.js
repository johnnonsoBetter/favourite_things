import { FavoriteRounded } from '@mui/icons-material'
import { Avatar, Box, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import { useRouteMatch } from 'react-router-dom'
import { Link } from 'react-router-dom'

export default function User({user}) {

    const {name, id, total_fav, slug} = user
    const {path} = useRouteMatch()

    console.log(path)

    return (
        <Link style={{textDecoration: 'none'}} to={`${path}/${slug}`}>
            <Paper sx={{p: 2}} >
                <Stack alignItems="center" rowGap={2} >
                    <Avatar sx={{ width: 70, height: 70, textTransform: "uppercase"  }} >{name[0]}{name[1]}</Avatar>
                    <Typography sx={{textTransform: "uppercase"}} >{name}</Typography>
                    <Box display="flex"  >
                        <FavoriteRounded />
                        <Typography> {total_fav}</Typography>
                    </Box>
                </Stack>
            </Paper>
        </Link>
    )
}