import { Box, Chip, Typography } from '@mui/material'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { FetchContext } from '../../context/FetchContext'
import GuessLoading from './GuessLoading'
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { QuestionMarkOutlined } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';


export default function Guess(props) {

    const {currentThingTypeId} = props
    const {authAxios} = useContext(FetchContext)
    const [guess, setGuess] = useState({})
    const [words, setWords] = useState([])
    const [loading, setLoading] = useState(false)
    const [myGuess, setMyGuess] = useState('')
    const [btnLoading, setBtnLoading] = useState(false)


    const submitGuess = (e) => {
        e.preventDefault()

       console.log(myGuess)
    }


    const  Input = () => (
        <Paper
        component="form"
        onSubmit={submitGuess}
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: "100%" }}
        >
        
        <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Enter Your Guess"
            inputProps={{ 'aria-label': 'Enter Your Guess' }}
            autoFocus
            value={myGuess}
            onChange={(e) => {
                e.preventDefault()
              
                setMyGuess(e.target.value)
            }}
            
        />
        <LoadingButton loading={btnLoading} disableRipple  disableFocusRipple disableElevation type="submit" sx={{ p: '10px' }} aria-label="search">
            <QuestionMarkOutlined />

        </LoadingButton>

     
       
        </Paper>
    )




    useEffect(() => {
        setLoading(true)
        authAxios.get(`api/v1/guesses/${currentThingTypeId}`).then((res) => {
            console.log(res)
            const {guess} = res.data
            const {words} = guess
            setWords(words)
            setGuess(guess)

            setLoading(false)
        
        }).catch(err => {
            console.log(err)
        })

        return () => {
            console.log("i have finally cleaned up guess")
            setLoading(true)
        }
    }, [])

    return (
        <>
        {
            loading ? <GuessLoading /> :
        
        <Box my={5} display="flex" justifyContent="center" alignItems="center" flexDirection="column">

           
            <Box maxWidth={200} display="flex" justifyContent="center" >
                <img src={guess.thing_type_url} style={{maxWidth: "100%"}} />
            </Box>

            {words.length == 0 ? <Typography sx={{textTransform: "capitalize", my: 3}} > You Have Not guessed any word yet</Typography> :
            <Box width="60%" my={3} display="flex" justifyContent="center" flexWrap="wrap">
                <Chip label="Kiwi" variant="outlined" sx={{m: 2}} />
                <Chip label="Chips" variant="outlined" sx={{m: 2}} />
                <Chip label="Chips" variant="outlined" sx={{m: 2}} />
                <Chip label="Chips" variant="outlined" sx={{m: 2}} />
                <Chip label="Chips" variant="outlined" sx={{m: 2}} />
                <Chip label="Chips" variant="outlined" sx={{m: 2}} />
                <Chip label="Chips" variant="outlined" sx={{m: 2}} />
                <Chip label="Chips" variant="outlined" sx={{m: 2}} />
                <Chip label="Chips" variant="outlined" sx={{m: 2}} />
                <Chip label="Chips" variant="outlined" sx={{m: 2}} />
                <Chip label="Chips" variant="outlined" sx={{m: 2}} />
                <Chip label="Chips" variant="outlined" sx={{m: 2}} />
                <Chip label="Chips" variant="outlined" sx={{m: 2}} />
                
            </Box>}

            <Box my={3} >
                <Input />
            </Box>
           
        </Box>
        }
        </>
    )
}