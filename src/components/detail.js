import Layout, { Content, Footer, Header } from 'antd/lib/layout/layout';
import Sider from 'antd/lib/layout/Sider';
import React, { Component } from 'react';
import pokemon from '../asset/pokemon.png';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button, Alert, Input  } from 'antd';
import swal from 'sweetalert'
import {  Space, Upload, Popconfirm } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { EditOutlined } from '@ant-design/icons';

class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemon: {},
            name: "",
            img: "",
            types: [],
            abilities: [],
            moves: [],
            edit:true,
            hidden:false,
        }
    }

     componentDidMount() {
        if (this.props.match.params.name) {
            axios.get(`https://pokeapi.co/api/v2/pokemon/${this.props.match.params.name}`)
                .then(res => {
                    const poke = res.data;
                    console.log(poke);
                    this.setState({
                        name: poke.forms[0].name,
                        img: poke.sprites.front_default,
                        types: poke.types,
                        abilities: poke.abilities,
                        moves: poke.moves
                    }, () => {
                        console.log(this.state.name);
                    })
                })
        }
    }

    savePoke(){
        let obj = this.state
        console.log("objek",obj);
        this.props.savePokemon(obj)
    }

    editPoke(){
        this.setState({
            edit:false,
            hidden:true
        })
    }
    cancelPoke(){
        this.setState({
            edit:true,
            hidden:false
        })
    }

    kondisi(name){
        let cek = this.props.dataNamaPoke.find(a => a.name === this.props.match.params.name)
        if (cek) {
            return true
        }else{
            return false
        }
    }

    render() {
        // console.log("data redux pokemon 1",this.props.dataPokemon);
        // console.log("data redux pokemon 2",this.props.dataNamaPoke);
console.log("edit",this.state.edit);
        return (
            <>
                <Layout>
                    <Header className="border-shadow" style={{ backgroundColor: "white", display:"flex",flexDirection:"row" }}>
                        <Link to="/">
                            <div>
                                <img src={pokemon} alt="pokemon" width="130" height="100" style={{ marginTop: "0vh" }} />
                            </div>
                        </Link>
                        <Link to="/">
                            <div style={{marginLeft:"60vw",marginRight:"10vw"}}>
                                <div style={{textDecoration:"none", color:"black"}}>All Pokemon</div>
                            </div>
                        </Link>
                        <div>
                            <div>My Pokemon</div>
                        </div>
                    </Header>
                    <center>

                        <Content style={{ width: "100%", height: "100%" }}>
                            <img src={this.state.img} alt="pokemon" width="130" height="100" style={{ marginTop: "0vh" }} />
                            {
                                this.kondisi() ? 
                                    this.props.dataNamaPoke.filter(a => a.name === this.props.match.params.name).map((poke, idx) =>
                                        <div key={idx}>
                                            <Space>
                                            <h1 hidden={this.state.hidden} >{poke.name}</h1>
                                            <EditOutlined hidden={this.state.hidden} onClick={()=>{this.editPoke()}} style={{ fontSize: '15px' }}/>
                                            <Input  hidden={this.state.edit} placeholder="Pokemon Name" /><Button hidden={this.state.edit} >Save</Button><Button hidden={this.state.edit} onClick={()=>{this.cancelPoke()}}>Cancel</Button>
                                            
                                            </Space>
                                            {/* <div style={{textAlign:"center"}}>
                                                

                                                <div style={{float:"center"}}>
                                                    <h1 >{poke.name}</h1>
                                                    
                                                </div>
                                                    <div style={{float:"right"}} >
                                                        <EditOutlined style={{ fontSize: '30px' }}/>
                                                    </div>
                                                
                                                
                                            </div> */}
                                        </div>
                                    )
                                :
                                <h1>{this.state.name}</h1>
                            }
                                <button onClick={()=>{this.savePoke()}} style={{cursor:"pointer"}}>Catch Pokemon</button>
                            <h1>
                                Type
                            </h1>
                            <div style={{ display: 'flex', flexDirection: "row", width: "47vw", justifyContent: "space-between" }}>
                                {this.state.types.map((poke, idx) =>
                                    <div key={idx}>
                                        <div style={{ margin: "auto" }}>{poke.type.name}</div>
                                    </div>
                                )}
                            </div>

                            <h1>
                                Abilities
                        </h1>
                            <div style={{ display: 'flex', flexDirection: "row", width: "47vw", justifyContent: "space-between" }}>
                                {this.state.abilities.map((poke, idx) =>
                                    <div key={idx}>
                                        <div >{poke.ability.name}</div>
                                    </div>
                                )}
                            </div>
                            <div className="ant-row" style={{ textAlign: 'center', rowGap: 0 }}>
                                <div className="ant-col ant-col-16 ant-col-offset-4">
                                    <h4 className="ant-typography">Moves</h4>
                                    <div className="ant-row" style={{ rowGap: 0 }}>
                                        {this.state.moves.map((poke,idx)=>
                                        <div key={idx} className="ant-col ant-col-12">
                                            <span className="ant-typography">{poke.move.name}</span>
                                        </div>
                                        )}
                                        
                                        
                                    </div>
                                    </div>
                            </div>

                            

                        </Content>
                    </center>


                </Layout>
            </>
        );
    }
}

//ketika mengambil data dari luar kelas
const mapStateToProps = state => ({
    dataPokemon: state.Poke,
    dataNamaPoke: state.Poke.pokeon

})
//mengubah data kereducer
const mapDispatchToProps = dispatch => {
    return {
        savePokemon: (data) => dispatch({ type: "SAVE_POKEMON", payload: data })
    }
}

export default (connect(mapStateToProps, mapDispatchToProps))(Detail);