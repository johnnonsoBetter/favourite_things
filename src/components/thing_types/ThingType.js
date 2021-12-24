import { QuestionMarkOutlined, ThumbUpAltRounded } from '@mui/icons-material'
import { Badge, Box, IconButton, Paper } from '@mui/material'
import { grey, orange } from '@mui/material/colors'
import React, { useContext, useState } from 'react'
import { FetchContext } from '../../context/FetchContext'


export default function ThingType(props) {

    const {thingType, setOpen} = props
    const {url, total_likes, liked, id} = thingType
    const {authAxios} = useContext(FetchContext)
    const [isLiked, setIsLiked] = useState(liked)
    const [totalLikes, setTotalLikes] = useState(total_likes)

    const like = () => {
        
        const prevLiked = isLiked
        const prevTotalLikes = totalLikes

        const action = isLiked ? 'down' : 'up'
        setIsLiked(!isLiked)

        if (action === "up"){
            setTotalLikes(totalLikes + 1)
        }else{
            setTotalLikes(totalLikes - 1)
        }
            
        

        authAxios.put(`/api/v1/thing_types/${id}`,{action_type: action}).then(res => {
            console.log(res)
            const {like_status, total_likes} = res.data
            setIsLiked(like_status)
            setTotalLikes(total_likes)
        }).catch (err => {
            console.log(err)
            setOpen(true)
            setIsLiked(prevLiked)
            setTotalLikes(prevTotalLikes)
        })

    }


    const dislike = () => {


    }

    return (
        <Paper elevation={1} sx={{width: {xs: "45%", sm: "45%", md: "30%"}, margin: "2px"}} >

                <Box display="flex" m={1} justifyContent="space-between" >
                    
                        

                        <IconButton onClick={like} sx={{color: isLiked ? orange[600] : grey[500]}}  >
                            <Badge badgeContent={totalLikes} >
                            <ThumbUpAltRounded  />
                            </Badge>
                        </IconButton>
                        

                        <QuestionMarkOutlined />
                    


                   
                </Box>
               
                <Box display="flex" flexDirection="column" justifyContent="space-between"  >
                <Box display="flex" justifyContent="center" >
                    <Box   display="flex" justifyContent="center">
                        <img loading="lazy" style={{maxWidth: "100%"}} src={url} />
                    </Box>

                </Box>
                

               


                </Box>
                </Paper>
    )   
}