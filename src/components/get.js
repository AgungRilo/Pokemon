import axios from 'axios';
import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Card, Row, Col, Divider, Layout, Modal, Button } from 'antd';
import pokemon from '../asset/pokemon.png';
import { Link } from 'react-router-dom';


const { Header, Footer, Sider, Content } = Layout;


const { Meta } = Card;
const style = { background: '#0092ff', padding: '8px 0' };


class Get extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemon: [],
            ability: null,
            result: null,
            tangkap: null,
            isModalVisible: false,
            name: "",
            img: ""
        }
    }

    handleChange = e => {
        this.setState({
            name: e.target.value
        });
    }

    showModal(name) {
        this.setState({
            isModalVisible: true
        })
        this.detailPokemon(name)
    }

    handleOk() {
        this.setState({
            isModalVisible: false
        })
    }

    handleCancel() {
        this.setState({
            isModalVisible: false
        })
    }


    async componentDidMount() {
        const res = await axios.get("https://pokeapi.co/api/v2/pokemon/")
        const results = res.data.results

        for (let i = 0; i < results.length; i++) {
            const detail = await axios.get(results[i].url)
            results[i].img = detail.data.sprites.front_default
        }
        this.setState({
            pokemon: results
        })

        console.log("tes", this.state.pokemon);

        // .then(res => {
        //     console.log(res);
        //     this.setState({
        //         pokemon: res.data.results,

        //     })





        // let api = "https://pokeapi.co/api/v2/pokemon/" + this.detailPokemon;

        // console.log(api);
        // axios.get(api)
        //     .then(res => {
        //         console.log(res);
        //         this.setState({
        //             tangkap: res.sprites.front_default
        //         })



        //     })
    }

    test() {
        alert("teset")
    }

    detailPokemon(name) {
        const cari = this.state.pokemon.findIndex((idx) => idx.name === name);
        const detail = this.state.pokemon[cari];
        console.log("cek nama", detail);
        this.setState({
            name: detail.name,
            img: detail.img
        })

    }

    render() {

        // console.log("ability", this.detailPokemon);
        console.log("Pokemon", this.state.pokemon);
        // console.log(object);
        return (
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

                            <Divider orientation="left"></Divider>
                            <Row>
                                {this.state.pokemon.map((pokemon, idx) =>
                                    <div key={idx}>
                                        <p></p>
                                        {/* <div style={{display:"flex", flexDirection:"row"}}> */}
                                        <Col className="gutter-row" span={19}>
                                            <Link to={`/pokemon-detail/${pokemon.name}`}>
                                                <Card
                                                    // onClick={() => { this.showModal(pokemon.name) }}
                                                    hoverable
                                                    style={{ width: 600, height: 700, margin: "0vh 2vh 2vh 0vh" }}

                                                    cover={<img alt="pokemon"
                                                        src={pokemon.img}
                                                    />}
                                                >
                                                    <center>
                                                        <Meta title={pokemon.name} description="Owned : 0" />

                                                    </center>
                                                </Card>
                                            </Link>
                                        </Col>

                                    </div>


                                )}


                            </Row>
                            
                        </Content>
                    </center>
                    
                </Layout>
        );
    }
}

export default Get;