import {Component} from 'react';
import './App.css';

import Title from './title';
import NavBar from './navbar';
import Banner from './banner';
import Container from './container';
import Swipper from './swipper';
import ButtonUp from './buttonup';

class App extends Component {
  render(){
    return <div>
     {/* <Swipper></Swipper>  */}

     <Title> </Title>
     <NavBar></NavBar>
     <Banner></Banner>
     <Container></Container>
     <ButtonUp></ButtonUp>
     
    </div>
  }
}

export default App;
