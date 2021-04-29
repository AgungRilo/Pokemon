// import Layout, { Content, Footer, Header } from 'antd/lib/layout/layout';
// import Sider from 'antd/lib/layout/Sider';
// import React, { Component } from 'react';
// import pokemon from '../asset/pokemon.png';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { Button, Alert  } from 'antd';
// import swal from 'sweetalert'

// class DetailEdit extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {  }
//     }
//     render() { 
//         console.log("name poke", this.props.match.params.name);
//         return ( 
//             <>
//                 <Layout>
//                     {/* <Header className="border-shadow" style={{ backgroundColor: "white", display: "flex", flexDirection: "row" }}>
//                         <Link to="/">
//                             <div>
//                                 <img src={pokemon} alt="pokemon" width="130" height="100" style={{ marginTop: "0vh" }} />
//                             </div>
//                         </Link>
//                         <Link to="/">
//                             <div style={{ marginLeft: "60vw", marginRight: "10vw" }}>
//                                 <div style={{ textDecoration: "none", color: "black" }}>All Pokemon</div>
//                             </div>
//                         </Link>
//                         <Link to="/my-pokemon-list">
//                             <div>
//                                 <div style={{ textDecoration: "none", color: "black" }} >My Pokemon</div>
//                             </div>
//                         </Link>
//                     </Header> */}
//                     <center>
//                         <Content style={{ width: "100%", height: "100%" }}>
//                             <img src={this.state.img} alt="pokemon" width="130" height="100" style={{ marginTop: "0vh" }} />
//                             {/* <h1>{this.props.dataPokemon.name}</h1>
//                                 <Button onClick={()=>{this.savePoke()}} style={{cursor:"pointer"}}>Catch Pokemon</Button> */}
//                             {/* <h1>
//                                 Type
//                             </h1>
//                             <div style={{ display: 'flex', flexDirection: "row", width: "47vw", justifyContent: "space-between" }}>
//                                 {this.props.dataPokemon.filter(a => a.name === this.props.match.params.name).map((poke, idx) =>
//                                     <div key={idx}>
//                                         <div style={{ margin: "auto" }}>{poke.type.name}</div>
//                                     </div>
//                                 )}
//                             </div> */}

//                             {/* <h1>
//                                 Abilities
//                             </h1>
//                             <div style={{ display: 'flex', flexDirection: "row", width: "47vw", justifyContent: "space-between" }}>
//                                 {this.state.abilities.map((poke, idx) =>
//                                     <div key={idx}>
//                                         <div >{poke.ability.name}</div>
//                                     </div>
//                                 )}
//                             </div>
//                             <div className="ant-row" style={{ textAlign: 'center', rowGap: 0 }}>
//                                 <div className="ant-col ant-col-16 ant-col-offset-4">
//                                     <h4 className="ant-typography">Moves</h4>
//                                     <div className="ant-row" style={{ rowGap: 0 }}>
//                                         {this.state.moves.map((poke,idx)=>
//                                         <div key={idx} className="ant-col ant-col-12">
//                                             <span className="ant-typography">{poke.move.name}</span>
//                                         </div>
//                                         )}
                                        
//                                     </div>
//                                     </div>
//                             </div> */}
//                         </Content>
//                     </center>


//                 </Layout>
//             </>
//          );
//     }
// }
 
// //ketika mengambil data dari luar kelas
// const mapStateToProps = state => ({
//     dataPokemon: state.Poke.pokeon

// })
// //mengubah data kereducer
// const mapDispatchToProps = dispatch => {
//     return {
//         // deletePokemon: (data) => dispatch({ type: "DELETE_POKEMON", payload: data })
//     }
// }

// export default (connect(mapStateToProps, mapDispatchToProps))(DetailEdit);
