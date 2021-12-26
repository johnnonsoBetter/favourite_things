
import { Container, createTheme, ThemeProvider } from '@mui/material';
import { useContext } from 'react';
import {  Route, Switch } from 'react-router-dom';
import './App.css';
import AddType from './components/AddType';
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login'
import { AuthContext } from './context/AuthContext';
import { Redirect } from 'react-router-dom';



const theme = createTheme({
  typography: {
    fontFamily: [
      'Quicksand', 'sans-serif',
    ].join(','),
  },
});

function App() {

  const {isAuthenticated} = useContext(AuthContext)

  return (
    
        <ThemeProvider theme={theme} >

          <Container sx={{pr: 0, pl: 0}} >
              <Switch >
            
                <Route path="/add" render={() => <AddType />} />
                <Route path="/sign_up" render={() => <Signup />} />
                <Route path="/login" render={() => <Login />} />               
                <Route path="/" render={() => isAuthenticated() ? <Home /> : <Redirect to="/login" /> } />
                
              </Switch>
          </Container>


        </ThemeProvider>

  );
}

export default App;

