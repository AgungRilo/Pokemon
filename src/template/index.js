import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import Home from '../components/get';
import Detail from '../components/detail';
import Colection from '../components/myPokemon';
// import DetailColection from "../components/detailEdit"

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
                    <Route path="/my-pokemon-list" component={props => <Colection {...props} />} />
                    {/* <Route path="/my-pokemon-list/detail/:name" component={DetailColection} /> */}
                </Switch>  
            </>
         );
    }
}
 
export default Body;