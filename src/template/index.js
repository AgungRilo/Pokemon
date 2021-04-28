import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import Home from '../components/get';
import Detail from '../components/detail';
import Colection from '../components/myPokemon';

class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <>
                <Switch>
                    <Route exact path="/" component={props => <Home {...props}/>}/>
                    <Route path="/pokemon-detail/:name" component={props => <Detail {...props} />} />
                    {/* <Route path="/my-pokemon-list/" component={props => <Colection {...props} />} /> */}
                </Switch>  
            </>
         );
    }
}
 
export default Body;