import React, { Component } from 'react';
import Layout, { Content, Header } from 'antd/lib/layout/layout';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import pokemon from '../asset/pokemon.png';

class MyPokemon extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <>
                <Layout>
                    <Header>
                    <Header className="border-shadow" style={{ backgroundColor: "white", display: "flex", flexDirection: "row" }}>
                        <Link to="/">
                            <div>
                                <img src={pokemon} alt="pokemon" width="130" height="100" style={{ marginTop: "0vh" }} />
                            </div>
                        </Link>
                        <Link to="/">
                            <div style={{ marginLeft: "60vw", marginRight: "10vw" }}>
                                <div style={{ textDecoration: "none", color: "black" }}>All Pokemon</div>
                            </div>
                        </Link>
                        <div>
                            <div>My Pokemon</div>
                        </div>
                    </Header>
                    </Header>
                    <Content>
                        
                    </Content>
                </Layout>
            </>
         );
    }
}
 
export default MyPokemon;