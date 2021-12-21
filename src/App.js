
import { Container, createTheme, ThemeProvider } from '@mui/material';
import {  Route, Switch } from 'react-router-dom';
import './App.css';
import AddType from './components/AddType';
import Home from './components/Home';
import { AuthProvider } from './context/AuthContext';
import { FetchProvider } from './context/FetchContext';


const theme = createTheme({
  typography: {
    fontFamily: [
      'Quicksand', 'sans-serif',
    ].join(','),
  },
});

function App() {
  return (
    <AuthProvider>
      <FetchProvider>
        <ThemeProvider theme={theme} >

          <Container >
              <Switch >
            
                <Route path="/add" render={() => <AddType />} />
                
                <Route path="/" render={() => <Home />} />
                
              </Switch>
          </Container>


        </ThemeProvider>
        

      </FetchProvider>
    </AuthProvider>
    
        

  );
}

export default App;


{/* <FetchProvider> 
              

<Route   path="/login" render={()=> ( <Login />) } />
<Route   path="/" render={()=>
    isAuthenticated() ? ( <AdminDashboard />) : <Redirect to="/login" />

} />


</FetchProvider> */}