import types from "../../types"

export const getInitialHero = () => {
    return ({
        type: types.hero.GET_INITIAL_HERO
    })
}

export const setInitialHero = (hero) => {
    return ({
        type: types.hero.SET_INITIAL_HERO,
        payload: hero
    })
}

export const getSearchListByString = (string) => {
    return ({
        type: types.hero.GET_SEARCH_LIST,
        payload: string
    })
}

export const setSearchListByString = (heroList) => {
    return ({
        type: types.hero.SET_SEARCH_LIST,
        payload: heroList
    })
}

export const getHeroWithId = (id) => {
    return ({
        type: types.hero.GET_HERO_WITH_ID,
        payload: id
    })
}

export const toggleIsLoading = bool => {
    return ({
        type: types.utils.TOGGLE_IS_LOADING,
        payload: bool
    })
}

export const clearReduxSearchList = () => {
    return ({
        type: types.utils.CLEAR_REDUX_SEARCH_LIST
    })
}

export const clearReduxHeroObj = () => {
    return({
        type: types.hero.CLEAR_CURRENT_HERO_OBJ
    })
}

export const getPublishers = () => {
    return ({
        type: types.hero.GET_PUBLISHERS
    })
}

export const setPublishers = (list) => {
    return ({
        type: types.hero.SET_PUBLISHER,
        payload: list
    })
}