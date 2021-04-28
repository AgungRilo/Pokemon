let defaultState = {
    pokeon:[]
}

const pokemon = (state = defaultState, action) => {
    switch (action.type) {
        case "SAVE_POKEMON":
            console.log("datanya : ", action.payload);
            let newData = {
                name: action.payload.name,
                image: action.payload.img
            }
            console.log("pokemon",state)
            return {
                ...state,
                pokeon : [...state.pokeon, newData]
            }

        default:
            return state
    }
}

export default pokemon