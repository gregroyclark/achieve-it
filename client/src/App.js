import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Footer from "./components/Layouts/Footer";
import Navbar from "./components/Layouts/Navbar";
import Wrapper from './components/Wrapper';
import Dashboard from "./components/Pages/Dashboard";
import Signup from "./components/Pages/Signup";
import { HashRouter as Router, Route} from "react-router-dom";


function App(){
    
         return(
             <>
            <div className= "App">
           <React.Fragment>
           <Router>
               <Wrapper>
      <CssBaseline />
      <Container maxWidth="lg">
      
      <Navbar/>
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/signup" component={Signup} />
      {/* <CalApp/> */}
      <Footer/>
      
    
      </Container>
      </Wrapper>
      </Router>
    </React.Fragment>
            </div>
            </>
        );
    
}






export default App;