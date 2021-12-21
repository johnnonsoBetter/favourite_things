import { LoadingButton } from '@mui/lab'
import { Box, Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { publicFetch } from '../utils/fetch'

export default function AddType() {

    const [name, setName] = useState('')
    const [url, setUrl] = useState('')
    const [thingId, setThingId] = useState(-1)
    const [loading, setLoading] = useState(false)


    return (
        <>
            <form onSubmit={(e) => {
                e.preventDefault()
                setLoading(true)
                publicFetch.post('/api/v1/thing_types', {
                    thing_type: {name, url, thing_id: thingId}
                }).then((res) => {
                    console.log(res)
                    setLoading(false)
                    setName('')
                    setUrl('')
                }).catch(err => {
                    console.log(err)
                    setLoading(false)
                })
            }} >

                <Box p={3}>
                    <TextField placeholder="Enter anme" type='number' value={thingId} onChange={(e) => {
                        setThingId(e.target.value)
                    }}/>
                </Box>

                <Box p={3}>
                    <TextField placeholder="Enter anme" value={name} onChange={(e) => {
                        setName(e.target.value)
                    }}/>
                </Box>

                <Box p={3}>
                    <TextField placeholder="url" value={url} onChange={(e) => {
                        setUrl(e.target.value)
                    }} />
                </Box>


                <Box p={3}>
                    <LoadingButton loading={loading} type="submit" variant="outlined"> Add</LoadingButton>
                </Box>



            </form>
            






        </>
        
    )
}