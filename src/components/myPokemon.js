import React, { Component } from 'react';
import Layout, { Content, Header } from 'antd/lib/layout/layout';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import pokemon from '../asset/pokemon.png';
import { Divider, Row, Col, Card, Button } from 'antd';
import { FileExcelOutlined } from '@ant-design/icons';

const { Meta } = Card;
class MyPokemon extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            pokemon : this.props.dataPokemon
         }
    }

    deletePoke(idx){
        let pokemonNew = this.props.dataPokemon
        this.props.deletePokemon({pokemonDelete : pokemonNew, index:idx})
        this.setState({
            pokemon : this.props.dataPokemon
        })

    }

    detailPoke(idx){

    }

    
    
    render() { 
        console.log(this.props.dataPokemon);
        return ( 
            <>
                <Layout>
                    
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
                        <Link to="/my-pokemon-list">
                            <div>
                                <div style={{ textDecoration: "none", color: "black" }} >My Pokemon</div>
                            </div>
                        </Link>
                    </Header>
                    <center>
                    
                        <Content style={{ border: "none" }}>
                            {/* <Divider orientation="left"></Divider> */}
                            <Row>
                                {this.state.pokemon.length === 0 ? 
                                    
                                    <div style={{height:"89.4vh"}}>
                                        <center>
                                            <img src=""/>
                                            <div style={{marginLeft:"48vw", marginTop:"30vh", display:"flex",flexDirection:"column"}}>
                                                <div>
                                                    <FileExcelOutlined style={{ fontSize: '100px' }}/>
                                                </div>
                                                <div style={{fontSize:"20px"}}>
                                                    No Data
                                                </div>

                                            </div>
                                        </center>
                                    </div>
                                    
                                    :

                                this.state.pokemon.map((pokemon, idx) =>
                                    <div key={idx}>
                                        <p></p>
                                        {/* <div style={{display:"flex", flexDirection:"row"}}> */}
                                        <Col className="gutter-row" span={19}>
                                            <Link to={`/pokemon-detail/${pokemon.name}`} >
                                                <Card
                                                    // onClick={() => { this.showModal(pokemon.name) }}
                                                    hoverable
                                                    style={{ width: 600, height: 700, margin: "0vh 2vh 2vh 0vh" }}

                                                    cover={<img alt="pokemon"
                                                        src={pokemon.image}
                                                    />}
                                                >
                                                    <center>
                                                        <Meta title={pokemon.name} description="Owned : 0" />

                                                    </center>
                                                </Card>
                                            <Button onClick={()=>{this.deletePoke(idx)}} style={{marginLeft:"8vw"}}>Relese</Button>
                                            </Link>
                                        </Col>
                                        <center>
                                        </center>

                                    </div>


                                )}
                                

                            </Row>
                            
                        </Content>
                    </center>
                </Layout>
            </>
         );
    }
}
 
//ketika mengambil data dari luar kelas
const mapStateToProps = state => ({
    dataPokemon: state.Poke.pokeon

})
//mengubah data kereducer
const mapDispatchToProps = dispatch => {
    return {
        deletePokemon: (data) => dispatch({ type: "DELETE_POKEMON", payload: data })
    }
}

export default (connect(mapStateToProps, mapDispatchToProps))(MyPokemon);
