import { Box } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { FetchContext } from '../../context/FetchContext'
import GuessLoading from './GuessLoading'



export default function Guess(props) {

    const {currentThingTypeId} = props
    const {authAxios} = useContext(FetchContext)
    const [guess, setGuess] = useState({})
    const [words, setWords] = useState([])
    const [loading, setLoading] = useState(false)




    useEffect(() => {
        authAxios.get(`api/v1/guesses/${currentThingTypeId}`).then((res) => {
            console.log(res)
            const {guess} = res.data
            setGuess(guess)
        }).catch(err => {
            console.log(err)
        })

        return () => {
            console.log("i have finally cleaned up guess")
        }
    }, [])

    return (
        <Box my={5} display="flex" justifyContent="center">
            {/* <Box maxWidth={200} >
                <img src={guess.thing_type_url} style={{maxWidth: "100%"}} />
            </Box> */}

            <GuessLoading />
            
        </Box>
    )
}