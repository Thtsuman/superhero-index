import { takeLatest } from 'redux-saga/effects'
import types from '../types'
import { handleGetHeroById, handleGetInitialHero, handleGetSearchListByString, handleGetPublisher } from './handlers/heroHandlers'

export function* watcherSaga() {
    yield takeLatest(types.hero.GET_INITIAL_HERO, handleGetInitialHero)
    yield takeLatest(types.hero.GET_SEARCH_LIST, handleGetSearchListByString)
    yield takeLatest(types.hero.GET_HERO_WITH_ID, handleGetHeroById)
    yield takeLatest(types.hero.GET_PUBLISHERS, handleGetPublisher)
}

export default watcherSaga