

import  React, { useContext, useEffect } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { useTheme } from '@mui/material/styles';
import { Box, Container, useMediaQuery } from '@mui/material';
import { CancelOutlined, CloseRounded } from '@mui/icons-material';
import { FetchContext } from '../../context/FetchContext';
import Guess from './Guess';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function GuessContainer(props) {
  const {open, setOpen, setOpenSnack, setInfo, info, currentThingTypeId} = props
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
 

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      
      <Dialog
        
        open={open}
        fullWidth
        fullScreen={matches ? false : true}
        TransitionComponent={Transition}
      >

        <Box  >
          

          <Box p={2} display="flex" justifyContent="flex-end">
            <IconButton onClick={handleClose}>
              <CloseRounded />
            </IconButton>
          </Box>

          <Box >
          
            <Box >
              <Typography textAlign="center"> Guess The Image Below</Typography>

              <Box >
              <Guess setInfo={setInfo} info={info} setOpenSnack={setOpenSnack} currentThingTypeId={currentThingTypeId} />
              </Box>
            </Box>




          </Box>
          




        </Box>
        
      </Dialog>
    </div>
  );
}
