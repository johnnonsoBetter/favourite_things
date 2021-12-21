
import { Container } from '@mui/material';
import {  Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';

function App() {
  return (
    <Container >
        <Routes >
          <Route path="/" element={<Home />} />
        </Routes>
    </Container>
        

  );
}

export default App;


{/* <FetchProvider> 
              

<Route   path="/login" render={()=> ( <Login />) } />
<Route   path="/" render={()=>
    isAuthenticated() ? ( <AdminDashboard />) : <Redirect to="/login" />

} />


</FetchProvider> */}