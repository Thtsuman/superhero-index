import types from "../../types"

const INIT_STATE = {
    currentSuperHero: {}
}

const heroReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case types.hero.SET_INITIAL_HERO:
            return {
                ...state,
                currentSuperHero: action.payload
            }
        default:
            return state
    }
}

export default heroReducer