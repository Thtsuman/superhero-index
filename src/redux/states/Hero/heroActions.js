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