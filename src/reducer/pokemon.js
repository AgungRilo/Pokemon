let defaultState = {
    pokeon:[]
}

const pokemon = (state = defaultState, action) => {
    switch (action.type) {
        case "SAVE_POKEMON":
            console.log("datanya : ", action.payload);
            let newData = {
                name: action.payload.name,
                image: action.payload.img,
                abilities: action.payload.abilities,
                types:action.payload.types,
                moves:action.payload.moves
            }
            console.log("pokemon",state)
            return {
                ...state,
                pokeon : [...state.pokeon, newData]
            }
        case "DELETE_POKEMON":
        console.log("DELETE DELETE");
        let dataPokemon = state.pokeon
            dataPokemon.splice(action.payload.index, 1);
            console.log("cek ini",dataPokemon);
        return {
            ...state,
            pokeon: dataPokemon
        }

        default:
            return state
    }
}

export default pokemon