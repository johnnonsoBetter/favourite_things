import { Box, Grid } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { FetchContext } from '../../context/FetchContext'
import User from './User'

export default function Users() {


    const {authAxios} = useContext(FetchContext)
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false)
    const [failed, setFailed] = useState(false)


    useEffect(() => {

        authAxios.get('api/v1/users').then(res => {
            setUsers(res.data)
            setLoading(false)
        }).catch(err => [
            
            console.log(err)
        ])

    }, [])
 

    return (
        <Box my={3}>
            

            <Grid container >
                
                {
                    users.map(user => {

                        return (
                            <Grid item xs={12} sm={6} md={4} key={user.id} >
                                <Box p={1} >
                                    <User user={user} />
                                </Box>
                            </Grid>
                        )
                    })
                }

            </Grid>
        </Box>
    )
}