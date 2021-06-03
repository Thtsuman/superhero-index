import types from "../../types"

const INIT_STATE = {
    currentSuperHero: {},
    searchList: [],
    isLoading: false,
    publisherList: []
}

const heroReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case types.hero.CLEAR_CURRENT_HERO_OBJ:
            return {
                ...state,
                currentSuperHero: {}
            }
        case types.utils.CLEAR_REDUX_SEARCH_LIST:
            return {
                ...state,
                searchList: []
            }
        case types.utils.TOGGLE_IS_LOADING:
            return {
                ...state,
                isLoading: action.payload,
                currentSuperHero: action.payload ? {} : state.currentSuperHero,
            }
        case types.hero.SET_INITIAL_HERO:
            return {
                ...state,
                currentSuperHero: action.payload
            }
        case types.hero.SET_SEARCH_LIST:
            return {
                ...state,
                searchList: action.payload
            }
        case types.hero.SET_PUBLISHER:
            return {
                ...state,
                publisherList: action.payload
            }
        default:
            return state
    }
}

export default heroReducer