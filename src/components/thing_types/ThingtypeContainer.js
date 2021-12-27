import { Alert, Badge, Box, ListItemIcon, Paper, Snackbar, Typography } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { FetchContext } from '../../context/FetchContext'
import ProfileLoader from '../profile/ProfileLoader'
import InfiniteScroll from "react-infinite-scroll-component";
import ThingType from './ThingType'
import GuessContainer from '../guess/GuessContainer'
import ThingLoader from './ThingLoader'

export default function ThingtypeContainer () {

    const {authAxios} = useContext(FetchContext)
    const {id} = useParams()
    const [thing, setThing] = useState(null)
    const [thingTypes, setThingTypes] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalThingType, setTotalThingType] = useState(0)
    const [open, setOpen] = useState(false)
    const [openDialog, setOpenDialog] = useState(false)
    const [currentThingTypeId, setCurrentThingTypeId] = useState(-1)
    const [info, setInfo] = useState({severity: '', message: ''})


    const handleClose = () => {

        setOpen(false)
        const newInfo = Object.assign({}, info)
        newInfo.message = ''
        newInfo.severity = ''
        setInfo(newInfo)
    }
    


    const fetchMoreData = () => {
        console.log("fethching")
        authAxios.get(`api/v1/things/${id}`, {params: {page: page}}).then(res => {
           

            const {thing} = res.data
            const {thing_types, total_thing_types} = thing
            const newThings = Object.assign([], thingTypes)
            
            setThingTypes(newThings.concat(thing_types)) 
            setPage(page + 1)
            setTotalThingType(total_thing_types)
            
            
        }).catch(err => {
            console.log(err)
        })
    }

    


    useEffect(() => {

        authAxios.get(`api/v1/things/${id}`, {params: {page: page}}).then(res => {
          

            const {thing} = res.data
            const {thing_types} = thing
            setThingTypes(thing_types) 
            setThing(thing)
            setLoading(false)
            setPage(page + 1)


        }).catch(err => {
            console.log(err)
        })

        return () => {

        }
    }, [])

    return (
        <Box my={3} >
            <GuessContainer setInfo={setInfo} info={info} currentThingTypeId={currentThingTypeId} setInfo={setInfo}  setOpenSnack={setOpen} open={open} setCurrentThingTypeId={setCurrentThingTypeId} open={openDialog}  setOpen={setOpenDialog}  />
       
        <Snackbar open={open} anchorOrigin={{ vertical: 'top', horizontal: 'center' }} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={info.severity} sx={{ width: '100%' }}>
            {/* Failed To React To Thing, Please Try again */}
            {info.message}
        </Alert> 
        </Snackbar>

        
            <Paper sx={{p: 2, mx: 1}}>
                {
                    loading ?
                    <ProfileLoader /> :

                
                <Box display="flex" alignItems="center" justifyContent="space-between" >
                        <Box display="flex" alignItems="center">
                            <ListItemIcon>
                                <img src={`/images/fav/${thing.img}.png`} alt={thing.img} />
                            </ListItemIcon>
                            <Typography  sx={{ml: 2}}>{thing.name}</Typography>
                        </Box>
                    </Box>
                }
            </Paper>


            {


                loading ? 
            <ThingLoader /> :

            <Box my={3} display="flex" justifyContent="center" >
               
        <InfiniteScroll
           dataLength={totalThingType}
           next={fetchMoreData}
           hasMore={totalThingType !== thingTypes.length}
           
           style={{
               display: "flex",
               flexWrap: "wrap",
               justifyContent: "center"
           }}
           
         >
           {thingTypes.map((thing) => (
               
                <ThingType currentThingTypeId={currentThingTypeId} info={info}  setInfo={setInfo} setCurrentThingTypeId={setCurrentThingTypeId} setOpen={setOpen} setOpenDialog={setOpenDialog} openDialog={openDialog}  thingType={thing} key={thing.id} />
                
         
           ))}
         </InfiniteScroll>
                      
            </Box>
        }
          

        </Box>
    )
}