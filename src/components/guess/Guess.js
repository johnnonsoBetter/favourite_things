import { Avatar, Box, Chip, Typography } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { FetchContext } from '../../context/FetchContext'
import GuessLoading from './GuessLoading'
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import { GppGoodRounded, QuestionMarkOutlined } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';
import { green } from '@mui/material/colors';
import HomeContext from '../../context/HomeContext';


export default function Guess(props) {

    const {currentThingTypeId, setOpenSnack, setInfo, info} = props
    const {authAxios} = useContext(FetchContext)
    const [guess, setGuess] = useState({})
    const [words, setWords] = useState([])
    const [loading, setLoading] = useState(false)
    const [myGuess, setMyGuess] = useState('')
    const [btnLoading, setBtnLoading] = useState(false)
    const {setTotalScore} = useContext(HomeContext)


    const submitGuess = (e) => {
        e.preventDefault()
        setBtnLoading(true)
        setOpenSnack(true)

        authAxios.post('api/v1/words', {guess_id: guess.id, content: myGuess}).then(res => {
            console.log(res)
            const {guess, score, total_score} = res.data
            const {words} = guess
            const newInfo = Object.assign({}, info)

            if (score === 0) {
                newInfo.message = "Opps, Couldn't Guess Any New Word, Score: " + score 
                newInfo.severity = 'warning'
               
            }else {

                if (guess.completed){
                    newInfo.message = "Wow You Succesfully Completed the Guess, Score: " + score 
                    newInfo.severity = 'success'

                }else{
                    newInfo.message = "Great, You Scored " + score 
                    newInfo.severity = 'info'
                    
                }

            }
            setTotalScore(total_score)
            setInfo(newInfo)
            setWords(words)
            setGuess(guess)
            
            setBtnLoading(false)
        }).catch(err => {
            console.log(err)
            setBtnLoading(false)
        })

    }


    const  Input = () => (
        <Paper
        component="form"
        onSubmit={submitGuess}
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: "100%" }}
        >
        
        <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder= {guess.completed ? "Guess Completed" : "Enter Your Guess"} 
            inputProps={{ 'aria-label': 'Enter Your Guess' }}
            autoFocus
            value={myGuess}
            disabled={guess.completed}
            onChange={(e) => {
                e.preventDefault()
              
                setMyGuess(e.target.value)
            }}
            
        />
        <LoadingButton disabled={guess.completed} loading={btnLoading} disableRipple  disableFocusRipple disableElevation type="submit" sx={{ p: '10px' }} aria-label="search">
            <QuestionMarkOutlined />

        </LoadingButton>

     
       
        </Paper>
    )




    useEffect(() => {
        setLoading(true)
        authAxios.get(`api/v1/guesses/${currentThingTypeId}`).then((res) => {
          
            const {guess} = res.data
            const {words} = guess
            setWords(words)
            setGuess(guess)

            setLoading(false)
        
        }).catch(err => {
            console.log(err)
        })

        return () => {
         
            setLoading(true)
            setGuess({})
            setWords([])
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

           

            {words.length === 0 ? <Typography sx={{textTransform: "capitalize", my: 3}} > You Have Not guessed any word yet</Typography> :
            <Box width="60%" my={3} display="flex" justifyContent="center" flexWrap="wrap">
                {
                    words.map((word) => (
                        <Chip label={word.content} key={word.id} variant="outlined" sx={{m: 2}} />
                    ))
                }
                
           
                
            </Box>}

            {
                guess.completed && 
            

            <Box my={3} >
                <Chip  label="Completed" variant="outlined" avatar={<Avatar sx={{backgroundColor: "white"}} ><GppGoodRounded sx={{color: green[300]}} /> </Avatar>} />
            </Box>

            }

            <Box my={3} >
                <Input  />
            </Box>
           
        </Box>
        }
        </>
    )
}