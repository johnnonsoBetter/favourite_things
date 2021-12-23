import { Box, Grid, IconButton, ListItemIcon, Paper, Stack, Typography } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { FetchContext } from '../../context/FetchContext'
import ProfileLoader from '../profile/ProfileLoader'
import InfiniteScroll from "react-infinite-scroll-component";
import { QuizRounded, ThumbUpAltRounded } from '@mui/icons-material'

// import React from "react";
// import { render } from "react-dom";
// import InfiniteScroll from "react-infinite-scroll-component";

const style = {
  height: 30,
  padding: 40,
  border: "1px solid green",
  margin: 6,
  
};

// class App extends React.Component {
//   state = {
//     items: Array.from({ length: 20 }),
//     page: 0
//   };

//   fetchMoreData = () => {
//     // a fake async api call like which sends
//     // 20 more records in 1.5 secs
//     console.log(this.state.page)
//     setTimeout(() => {
//       this.setState({
//         items: this.state.items.concat(Array.from({ length: 20 })),
//         page: this.state.page + 1
//       });
//     }, 1500);
//   };

//   render() {
//     return (
//       <div>
//         <h1>demo: react-infinite-scroll-component</h1>
//         <hr />
//         <InfiniteScroll
//           dataLength={this.state.items.length}
//           next={this.fetchMoreData}
//           hasMore={true}
//           loader={<h4>Loading...</h4>}
//         >
//           {this.state.items.map((i, index) => (
//             <div style={style} key={index}>
//               div - #{index}
//             </div>
//           ))}
//         </InfiniteScroll>
//       </div>
//     );
//   }
// }

// render(<App />, document.getElementById("root"));




export default function ThingtypeContainer () {

    const {authAxios} = useContext(FetchContext)
    const {id} = useParams()
    const [thing, setThing] = useState(null)
    const [thingTypes, setThingTypes] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalThingType, setTotalThingType] = useState(0)
    


    const fetchMoreData = () => {
        console.log("fethching")
        authAxios.get(`api/v1/things/${id}`, {params: {page: page}}).then(res => {
            console.log(res)

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
            console.log(res)

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

        
            <Paper sx={{p: 2}}>
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

            <Box my={3} display="flex" justifyContent="center" >
                {/* <Grid container >

                    <Grid xs={12} sm={6} >
                        <Box width={100}>
                            <img style={{maxWidth: "100%"}} src="https://halfyourplate-4kgxi1gvwldjzby.stackpathdns.com/wp-content/uploads/2015/01/avocado_small.jpg" />
                        </Box>
                    </Grid>
                </Grid> */}

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
               <Paper elevation={1} sx={{width: {xs: "45%", sm: "45%", md: "30%"}, margin: "2px"}} >

                <Box display="flex" m={1} justifyContent="space-between" >
                    
                        <ThumbUpAltRounded />

                        <QuizRounded />
                    


                   
                </Box>
               
                <Box display="flex" flexDirection="column" justifyContent="space-between"  >
                <Box display="flex" justifyContent="center" >
                    <Box   display="flex" justifyContent="center">
                        <img loading="lazy" style={{maxWidth: "100%"}} src={thing.url} />
                    </Box>

                </Box>
                

               


                </Box>
                </Paper>

                
         
           ))}
         </InfiniteScroll>
                      
            </Box>

          

        </Box>
    )
}